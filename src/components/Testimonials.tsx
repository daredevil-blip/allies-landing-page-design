
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "שרה כהן",
    role: "בעלת עסק",
    content: "הצוות באלייז ביטוח עזר לי למצוא את הכיסוי המושלם לעסק שלי. המומחיות שלהם היא ללא תחרות!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  },
  {
    name: "מיכאל לוי",
    role: "ראש משפחה",
    content: "אני מרגיש בטוח כשאני יודע שמשפחתי מוגנת. ההדרכה שלהם בביטוח חיים הייתה חיונית.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  },
  {
    name: "רחל ישראלי",
    role: "משקיעת נדל\"ן",
    content: "שירות יוצא מן הכלל! הם הפכו את ההחלטות בנושא ביטוח לפשוטות וברורות.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">מה הלקוחות שלנו אומרים</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            אל תסתמכו רק על המילה שלנו - שמעו מהלקוחות המרוצים שלנו
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-emerald-500 fill-emerald-500" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-right">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
