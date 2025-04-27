
import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 animate-fade-in">
              Smart Ideas<br />
              For Your Brand<br />
              Are Here.
            </h1>
            <p className="text-lg text-gray-600 md:pr-12 animate-fade-in">
              Our motto is to fulfill customer demands by making them satisfied with growing their business.
            </p>
            <div className="flex gap-4 items-center animate-fade-in">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-6">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="ghost" className="text-gray-700 flex items-center gap-2">
                <PlayCircle className="h-5 w-5" />
                Watch Video
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-8">
              <img src="/public/lovable-uploads/c6ef560d-ee3f-4a98-af56-2251abf83f99.png" alt="Hero" className="rounded-lg max-w-md" />
            </div>
            <div className="flex items-center gap-8 pt-8">
              <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-8" />
              <img src="https://a.slack-edge.com/bv1-10/slack_logo-ebd02d1.svg" alt="Slack" className="h-8" />
              <img src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/849e5056.svg" alt="Tokopedia" className="h-8" />
              <img src="https://style.monday.com/static/media/monday_logo_short.2f74542a.svg" alt="Monday" className="h-8" />
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
              <div className="bg-emerald-500 text-white p-3 rounded-full">
                <span className="text-sm font-medium">Our Creative Team</span>
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
