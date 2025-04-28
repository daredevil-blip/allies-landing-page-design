
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

const Subscribe = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            הירשם לקבלת מידע, חדשות ומבצעים מיוחדים
          </h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
            <Input
              type="email"
              placeholder="הכנס את האימייל שלך"
              className="w-full md:w-96"
              dir="rtl"
            />
            <Button className="w-full md:w-auto">
              הרשמה
              <Send className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
