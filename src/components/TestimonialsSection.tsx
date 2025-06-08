
import { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Arjun Mehta",
      role: "Music Producer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The sound quality of BOAT Airdopes is absolutely incredible! As a music producer, I need crystal clear audio, and these earbuds deliver exactly that. The bass is punchy without being overwhelming.",
      product: "Airdopes 441"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Fitness Enthusiast",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b790?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Perfect for my workout sessions! The earbuds stay secure even during intense workouts, and the sweat resistance is amazing. Battery life easily lasts through multiple gym sessions.",
      product: "Airdopes 131"
    },
    {
      id: 3,
      name: "Rahul Singh",
      role: "Software Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "These headphones are a game-changer for my work-from-home setup. The noise cancellation helps me focus, and the comfort level is outstanding even after 8+ hours of use.",
      product: "Rockerz 450"
    },
    {
      id: 4,
      name: "Sneha Patel",
      role: "College Student",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Amazing value for money! The design is sleek, sound quality is top-notch, and it fits perfectly within a student budget. Best purchase I've made this year!",
      product: "Bassheads 100"
    },
    {
      id: 5,
      name: "Vikram Kumar",
      role: "Gamer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The gaming experience with these headphones is unreal! 7.1 surround sound makes every game more immersive. The mic quality is crystal clear for team communications.",
      product: "Immortal 1000D"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join millions of satisfied customers who trust BOAT for their audio needs
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="glass-card border-0 shadow-xl overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                
                {/* Customer Info */}
                <div className="text-center lg:text-left">
                  <div className="relative inline-block mb-4">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-24 h-24 rounded-full object-cover mx-auto lg:mx-0"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-boat-red text-white p-2 rounded-full">
                      <Quote className="h-4 w-4" />
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-xl mb-1">{testimonials[currentTestimonial].name}</h3>
                  <p className="text-muted-foreground mb-3">{testimonials[currentTestimonial].role}</p>
                  
                  {/* Rating */}
                  <div className="flex justify-center lg:justify-start space-x-1 mb-3">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <span className="text-sm text-boat-red font-medium">
                    {testimonials[currentTestimonial].product}
                  </span>
                </div>

                {/* Testimonial Text */}
                <div className="lg:col-span-2">
                  <Quote className="h-12 w-12 text-boat-red opacity-20 mb-4" />
                  <blockquote className="text-lg md:text-xl leading-relaxed text-foreground mb-6">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mb-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentTestimonial ? 'bg-boat-red' : 'bg-muted'
              }`}
            />
          ))}
        </div>

        {/* Mini Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="glass-card border-0 shadow-lg hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-sm text-muted-foreground line-clamp-3">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="text-center">
            <div className="text-2xl font-bold text-boat-red">4.8/5</div>
            <div className="text-sm">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-boat-red">50K+</div>
            <div className="text-sm">Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-boat-red">99%</div>
            <div className="text-sm">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
