
import { Heart } from "lucide-react";

interface DrinkCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

export const DrinkCard = ({ name, description, price, image }: DrinkCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-4 shadow-sm transition-all hover:shadow-md">
      <div className="absolute right-4 top-4 z-10">
        <button className="rounded-full bg-white/90 p-2 text-gray-600 backdrop-blur-sm transition-all hover:text-primary">
          <Heart className="h-5 w-5" />
        </button>
      </div>
      <div className="aspect-square overflow-hidden rounded-xl bg-muted">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="font-medium text-secondary">{name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-primary">{price}</span>
          <button className="rounded-full bg-primary px-4 py-2 text-xs font-medium text-white transition-all hover:bg-primary/90">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
