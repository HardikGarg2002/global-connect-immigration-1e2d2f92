"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, MessageCircle } from "lucide-react";
import { NavigationItem } from "../Header";

export default function MobileHeaderSheet({ navigation }: { navigation: NavigationItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="ghost" size="sm">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col space-y-4 mt-8">
          {navigation.map((item) => (
            <div key={item.label}>
              <a
                href={item.href}
                className="text-lg font-medium text-foreground hover:text-canada-red transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
              {item.dropdown && (
                <div className="ml-4 mt-2 space-y-2">
                  {item.dropdown.map((dropdownItem) => (
                    <a
                      key={dropdownItem.label}
                      href={dropdownItem.href}
                      className="block text-sm text-muted-foreground hover:text-canada-red transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {dropdownItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 space-y-3">
            <a href="tel:6044951927">
              <Button
                variant="outline"
                className="w-full flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
            </a>
            <a href="https://wa.me/16047254814?text=Hi, I'm interested in your immigration services.">
              <Button className="w-full bg-green-600 hover:bg-green-700 flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
            </a>
            <a href="/contact">
              <Button className="w-full gradient-primary">
                Book Consultation
              </Button>
            </a>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
