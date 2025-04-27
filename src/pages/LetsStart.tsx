
import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { ArrowLeft, CheckCircle, Phone, Mail, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import { toast } from 'sonner';

const InsuranceModel = ({ currentStep }: { currentStep: number }) => {
  const { scene } = useGLTF('/insurance_shield.glb');
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
      
      // Animation based on current step
      const targetScale = 1 + (currentStep * 0.1);
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05);
    }
  });

  return (
    <primitive 
      ref={meshRef} 
      object={scene} 
      position={[0, -1, 0]} 
      scale={[1, 1, 1]}
    />
  );
};

// Fallback component if 3D model fails to load
const FallbackShield = ({ currentStep }: { currentStep: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
      
      // Animation based on current step
      const targetScale = 1 + (currentStep * 0.1);
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05);
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#10B981" />
    </mesh>
  );
};

const Model3D = ({ currentStep }: { currentStep: number }) => {
  return (
    <div className="h-80 w-full rounded-xl overflow-hidden">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Suspense fallback={<FallbackShield currentStep={currentStep} />}>
          <InsuranceModel currentStep={currentStep} />
        </Suspense>
        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

const FormStep = ({ 
  currentStep, 
  formData, 
  handleInputChange, 
  handleNext, 
  handlePrevious 
}: { 
  currentStep: number, 
  formData: any, 
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void, 
  handleNext: () => void, 
  handlePrevious: () => void 
}) => {
  if (currentStep === 0) {
    return (
      <div className="space-y-6">
        <div className="space-y-2 text-right">
          <Label htmlFor="insurance_type" className="text-right block">סוג הביטוח שאתה מחפש</Label>
          <select
            id="insurance_type"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-right"
            value={formData.insurance_type}
            onChange={(e) => handleInputChange({ target: { name: 'insurance_type', value: e.target.value } } as any)}
            dir="rtl"
          >
            <option value="">בחר סוג ביטוח</option>
            <option value="life">ביטוח חיים</option>
            <option value="health">ביטוח בריאות</option>
            <option value="car">ביטוח רכב</option>
            <option value="home">ביטוח דירה</option>
            <option value="business">ביטוח עסקי</option>
          </select>
        </div>

        <div className="text-right">
          <Button 
            onClick={handleNext} 
            disabled={!formData.insurance_type}
            className="bg-emerald-500 hover:bg-emerald-600 ms-4"
          >
            המשך
            <ArrowLeft className="mr-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }
  
  if (currentStep === 1) {
    return (
      <div className="space-y-6">
        <div className="space-y-2 text-right">
          <Label htmlFor="coverage" className="text-right block">רמת הכיסוי הרצויה</Label>
          <select
            id="coverage"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-right"
            value={formData.coverage}
            onChange={(e) => handleInputChange({ target: { name: 'coverage', value: e.target.value } } as any)}
            dir="rtl"
          >
            <option value="">בחר רמת כיסוי</option>
            <option value="basic">בסיסי</option>
            <option value="standard">סטנדרטי</option>
            <option value="premium">פרימיום</option>
            <option value="custom">מותאם אישית</option>
          </select>
        </div>

        <div className="text-right">
          <Button onClick={handlePrevious} variant="outline" className="ms-4">
            חזור
          </Button>
          <Button 
            onClick={handleNext} 
            disabled={!formData.coverage}
            className="bg-emerald-500 hover:bg-emerald-600 ms-4"
          >
            המשך
            <ArrowLeft className="mr-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2 text-right">
          <Label htmlFor="name" className="text-right block">שם מלא</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="הזן את השם המלא שלך"
            className="text-right"
            dir="rtl"
            required
          />
        </div>

        <div className="space-y-2 text-right">
          <Label htmlFor="phone" className="text-right block">טלפון</Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="הזן את מספר הטלפון שלך"
            className="text-right"
            dir="rtl"
            required
          />
        </div>
        
        <div className="space-y-2 text-right md:col-span-2">
          <Label htmlFor="email" className="text-right block">אימייל</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="הזן את כתובת האימייל שלך"
            className="text-right"
            dir="rtl"
            required
          />
        </div>
      </div>

      <div className="text-right">
        <Button onClick={handlePrevious} variant="outline" className="ms-4">
          חזור
        </Button>
        <Button 
          onClick={handleNext} 
          disabled={!formData.name || !formData.phone || !formData.email}
          className="bg-emerald-500 hover:bg-emerald-600 ms-4"
        >
          שלח בקשה
          <ArrowLeft className="mr-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

const LetsStart = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    insurance_type: '',
    coverage: '',
    name: '',
    phone: '',
    email: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit form
      toast.success("הבקשה נשלחה בהצלחה! נציג יצור איתך קשר בקרוב", {
        position: "top-center"
      });
      setIsSubmitted(true);
    }
  };
  
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const insuranceTypes = {
    'life': 'ביטוח חיים',
    'health': 'ביטוח בריאות',
    'car': 'ביטוח רכב',
    'home': 'ביטוח דירה',
    'business': 'ביטוח עסקי'
  };
  
  const coverageTypes = {
    'basic': 'בסיסי',
    'standard': 'סטנדרטי',
    'premium': 'פרימיום',
    'custom': 'מותאם אישית'
  };
  
  const resetForm = () => {
    setFormData({
      insurance_type: '',
      coverage: '',
      name: '',
      phone: '',
      email: ''
    });
    setCurrentStep(0);
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-28 pb-16 bg-gradient-to-bl from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">בוא נתחיל</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              מלא את הטופס הבא ונחזור אליך עם הצעת ביטוח מותאמת אישית
            </p>
          </div>
          
          <div className="flex justify-center mb-16">
            <div className="w-full max-w-4xl">
              <div className="flex justify-between items-center mb-8">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      i <= currentStep ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-500'
                    } ${isSubmitted && i === 2 ? 'bg-emerald-500 text-white' : ''}`}>
                      {isSubmitted && i === 2 ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        i + 1
                      )}
                    </div>
                    <span className="mt-2 text-sm text-gray-600">
                      {i === 0 ? 'סוג ביטוח' : i === 1 ? 'רמת כיסוי' : 'פרטים אישיים'}
                    </span>
                  </div>
                ))}
              </div>
              
              <Card className="border-2 border-gray-100 shadow-lg">
                <CardContent className="pt-6">
                  {!isSubmitted ? (
                    <div className="grid md:grid-cols-2 gap-12">
                      <div>
                        <FormStep
                          currentStep={currentStep}
                          formData={formData}
                          handleInputChange={handleInputChange}
                          handleNext={handleNext}
                          handlePrevious={handlePrevious}
                        />
                      </div>
                      <div className="relative">
                        <Suspense fallback={<div className="h-80 w-full flex items-center justify-center">טוען מודל תלת מימדי...</div>}>
                          <Model3D currentStep={currentStep} />
                        </Suspense>
                        <div className="mt-4 text-center">
                          <h3 className="text-lg font-medium">מגן הביטוח שלך</h3>
                          <p className="text-sm text-gray-500">
                            אנו מגנים על העתיד שלך עם פתרונות ביטוח מותאמים אישית
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="flex justify-center mb-4">
                        <CheckCircle className="w-16 h-16 text-emerald-500" />
                      </div>
                      <h2 className="text-2xl font-bold mb-2">הבקשה נשלחה בהצלחה!</h2>
                      <p className="text-gray-600 max-w-md mx-auto mb-6">
                        תודה {formData.name}, פנייתך ל{insuranceTypes[formData.insurance_type as keyof typeof insuranceTypes]} 
                        ברמת כיסוי {coverageTypes[formData.coverage as keyof typeof coverageTypes]} התקבלה. 
                        נציג יצור איתך קשר בהקדם.
                      </p>
                      <Button onClick={resetForm} className="bg-emerald-500 hover:bg-emerald-600">
                        חזור לטופס
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-md max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="bg-emerald-100 rounded-full p-6 flex justify-center">
                  <HelpCircle className="w-16 h-16 text-emerald-600" />
                </div>
              </div>
              <div className="md:w-2/3 text-right">
                <h3 className="text-2xl font-bold mb-2">יש לך שאלות?</h3>
                <p className="text-gray-600 mb-6">
                  הצוות שלנו זמין לענות על כל שאלה. אל תהסס לפנות אלינו בכל עת.
                </p>
                <div className="flex flex-wrap gap-4 justify-end">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>03-1234567</span>
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>info@allyze.co.il</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// Needed for React Three Fiber
const Suspense = motion.div;

export default LetsStart;
