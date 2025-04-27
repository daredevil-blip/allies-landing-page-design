
import { Button } from '@/components/ui/button';
import { ArrowLeft, PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center pt-16 bg-gradient-to-bl from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-right">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 animate-fade-in">
              פתרונות חכמים<br />
              לעסק שלך<br />
              נמצאים כאן.
            </h1>
            <p className="text-lg text-gray-600 md:pr-12 animate-fade-in">
              המטרה שלנו היא לספק ללקוחות שלנו את הפתרונות הטובים ביותר תוך כדי שמירה על צמיחה מתמדת של העסק.
            </p>
            <div className="flex gap-4 items-center justify-end animate-fade-in">
              <Button variant="ghost" className="text-gray-700 flex items-center gap-2">
                צפה בסרטון
                <PlayCircle className="h-5 w-5" />
              </Button>
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-6">
                <ArrowLeft className="mr-2 h-5 w-5" />
                בוא נתחיל
              </Button>
            </div>
            <div className="flex justify-end items-center gap-8 pt-8">
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40" alt="Hero" className="rounded-lg w-full max-w-md" />
            </div>
            <div className="flex items-center justify-end gap-8 pt-8">
              <img src="/public/lovable-uploads/c6ef560d-ee3f-4a98-af56-2251abf83f99.png" alt="לוגו גוגל" className="h-8" />
              <img src="https://a.slack-edge.com/bv1-10/slack_logo-ebd02d1.svg" alt="לוגו סלאק" className="h-8" />
              <img src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/849e5056.svg" alt="לוגו טוקופדיה" className="h-8" />
              <img src="https://style.monday.com/static/media/monday_logo_short.2f74542a.svg" alt="לוגו מאנדיי" className="h-8" />
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2">
              <div className="bg-emerald-500 text-white p-3 rounded-full">
                <span className="text-sm font-medium">הצוות היצירתי שלנו</span>
                <div className="flex -space-x-2 mt-2">
                  <img src="https://i.pravatar.cc/32?img=1" alt="" className="w-8 h-8 rounded-full border-2 border-white" />
                  <img src="https://i.pravatar.cc/32?img=2" alt="" className="w-8 h-8 rounded-full border-2 border-white" />
                  <img src="https://i.pravatar.cc/32?img=3" alt="" className="w-8 h-8 rounded-full border-2 border-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
