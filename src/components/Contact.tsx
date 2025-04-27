
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-right">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">בואו נתחבר</h2>
            <p className="text-xl text-gray-600 mb-8">
              צרו קשר עם המומחים שלנו היום והבטיחו את המחר שלכם.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="w-6 h-6 text-emerald-500" />
                <span className="text-gray-600">03-1234567</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="w-6 h-6 text-emerald-500" />
                <span className="text-gray-600">contact@alliesconsult.co.il</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <form className="space-y-6">
              <div>
                <Input placeholder="השם שלך" className="text-right" />
              </div>
              <div>
                <Input type="email" placeholder="כתובת אימייל" className="text-right" />
              </div>
              <div>
                <Input placeholder="נושא" className="text-right" />
              </div>
              <div>
                <Textarea placeholder="ההודעה שלך" className="text-right" />
              </div>
              <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
                שלח הודעה
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
