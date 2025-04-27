
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
            <p className="text-xl text-gray-600 mb-8">
              Get in touch with our insurance experts today and secure your tomorrow.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-orange-500" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-orange-500" />
                <span className="text-gray-600">contact@insureconsult.com</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <form className="space-y-6">
              <div>
                <Input placeholder="Your Name" className="w-full" />
              </div>
              <div>
                <Input type="email" placeholder="Email Address" className="w-full" />
              </div>
              <div>
                <Input placeholder="Subject" className="w-full" />
              </div>
              <div>
                <Textarea placeholder="Your Message" className="w-full" />
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
