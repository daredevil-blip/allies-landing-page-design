
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, HeartHandshake, Clock, ThumbsUp } from 'lucide-react';
import ReasonCard from '@/components/why-us/ReasonCard';
import AboutSection from '@/components/why-us/AboutSection';
import IndustryStats from '@/components/why-us/IndustryStats';
import { StatsCounter } from '@/components/StatsCounter';

const reasons = [
  {
    icon: Shield,
    title: 'אמינות ומקצועיות',
    description: 'למעלה מ-15 שנות ניסיון בענף הביטוח עם צוות מומחים מקצועי ואמין'
  },
  {
    icon: HeartHandshake,
    title: 'שירות אישי',
    description: 'אנו מאמינים בגישה אישית ומותאמת לכל לקוח בהתאם לצרכים הייחודיים שלו'
  },
  {
    icon: Clock,
    title: 'זמינות 24/7',
    description: 'צוות השירות שלנו זמין עבורך בכל שעה כדי לענות על שאלות ולסייע בתביעות'
  },
  {
    icon: ThumbsUp,
    title: 'תנאים מועדפים',
    description: 'קשרים חזקים עם חברות הביטוח המובילות מאפשרים לנו להציע תנאים מועדפים'
  }
];

const stats = [
  { name: 'לקוחות מרוצים', value: 5000, color: '#10B981' },
  { name: 'פרויקטים', value: 1200, color: '#6366F1' },
  { name: 'תביעות שטופלו', value: 3500, color: '#F59E0B' },
  { name: 'שנות ניסיון', value: 15, color: '#3B82F6' }
];

const WhyUs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-28 pb-16 bg-gradient-to-bl from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">למה לבחור בנו?</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              אנו מחויבים להעניק לכם את השירות האיכותי ביותר עם פתרונות ביטוח מותאמים אישית
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {reasons.map((reason, index) => (
              <ReasonCard key={index} {...reason} index={index} />
            ))}
          </div>
        </div>
      </div>
      
      <AboutSection />
      
      <StatsCounter 
        stats={stats.map(stat => ({
          label: stat.name,
          value: stat.value,
          color: stat.color
        }))}
        title="המספרים מדברים בעצמם"
        description="אנו גאים בהישגים שלנו ובאמון שלקוחותינו נותנים בנו"
      />
      
      <IndustryStats />
      <Footer />
    </div>
  );
};

export default WhyUs;
