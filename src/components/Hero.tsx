
import { Coffee } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-accent">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
      <div className="container relative h-full">
        <div className="flex h-full flex-col items-start justify-center space-y-6 max-w-2xl">
          <div className="animate-fade-down">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <Coffee className="mr-1 h-4 w-4" />
              New Drinks
            </span>
          </div>
          <h1 className="animate-fade-up text-5xl font-bold tracking-tight text-secondary">
            Handcrafted Drinks,
            <br />
            Made Just for You
          </h1>
          <p className="animate-fade-up text-lg text-secondary/80">
            Discover our menu of handcrafted beverages, from signature espresso drinks to refreshing iced teas.
          </p>
          <button className="animate-fade-up rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-all hover:bg-primary/90 hover:shadow-lg">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};
