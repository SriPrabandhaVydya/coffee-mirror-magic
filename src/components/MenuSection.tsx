
import { DrinkCard } from "./DrinkCard";

const FEATURED_DRINKS = [
  {
    name: "Caramel Macchiato",
    description: "Freshly steamed milk with vanilla-flavored syrup marked with espresso and topped with a caramel drizzle.",
    price: "$4.95",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=3337&auto=format&fit=crop",
  },
  {
    name: "Iced Green Tea Latte",
    description: "Premium green tea blended with milk and slightly sweetened, served over ice.",
    price: "$4.45",
    image: "https://images.unsplash.com/photo-1620031769374-273d76dc6053?q=80&w=3337&auto=format&fit=crop",
  },
  {
    name: "Cappuccino",
    description: "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam.",
    price: "$3.95",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=3270&auto=format&fit=crop",
  },
];

export const MenuSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-secondary">Featured Drinks</h2>
          <p className="mt-2 text-muted-foreground">Discover our baristas' favorite creations</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_DRINKS.map((drink) => (
            <DrinkCard key={drink.name} {...drink} />
          ))}
        </div>
      </div>
    </section>
  );
};
