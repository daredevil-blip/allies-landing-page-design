
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const partners = [
  {
    name: "Axon",
    image: "/lovable-uploads/5f79934a-a74f-4e8c-af6a-e2c2f6b1b1c5.png",
  },
  {
    name: "Jetstar",
    image: "/lovable-uploads/5f79934a-a74f-4e8c-af6a-e2c2f6b1b1c5.png",
  },
  {
    name: "Expedia",
    image: "/lovable-uploads/5f79934a-a74f-4e8c-af6a-e2c2f6b1b1c5.png",
  },
  {
    name: "Qantas",
    image: "/lovable-uploads/5f79934a-a74f-4e8c-af6a-e2c2f6b1b1c5.png",
  },
  {
    name: "Alitalia",
    image: "/lovable-uploads/5f79934a-a74f-4e8c-af6a-e2c2f6b1b1c5.png",
  },
];

const PartnersCarousel = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <Carousel className="w-full" opts={{ align: "start", loop: true }}>
          <CarouselContent className="-ml-2 md:-ml-4">
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/4 lg:basis-1/5">
                <div className="p-4">
                  <img 
                    src={partner.image} 
                    alt={partner.name}
                    className="w-full h-auto opacity-50 hover:opacity-100 transition-opacity"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default PartnersCarousel;
