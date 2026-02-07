
import { MenuItem, ServiceItem, SliderImage } from './types';

export const SLIDER_IMAGES: SliderImage[] = [
  {
    url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop",
    title: "Dreamy Wedding Cakes",
    description: "Hand-crafted multi-tier masterpieces for your special day."
  },
  {
    url: "https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=1200&auto=format&fit=crop",
    title: "Gourmet Cupcakes",
    description: "Bite-sized happiness with swirls of velvety buttercream."
  },
  {
    url: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1200&auto=format&fit=crop",
    title: "Artisanal Pastries",
    description: "Flaky, buttery layers baked fresh every morning."
  },
  {
    url: "https://images.unsplash.com/photo-1533910534207-90f31029a78e?q=80&w=1200&auto=format&fit=crop",
    title: "Glazed Perfection",
    description: "Classic and creative donuts that melt in your mouth."
  },
  {
    url: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=1200&auto=format&fit=crop",
    title: "Divine Desserts",
    description: "An array of sweets to satisfy every single craving."
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "Custom Cakes",
    description: "Perfect for birthdays, weddings, and anniversaries. We bring your vision to life with edible art.",
    icon: "🎂",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Cupcakes & Muffins",
    description: "Dozens of flavors available daily. Perfect for office treats or small celebrations.",
    icon: "🧁",
    image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Pastries & Donuts",
    description: "Our signature flaky croissants and artisan filled donuts are the talk of the town.",
    icon: "🥐",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Cookies & Brownies",
    description: "Soft-baked goodness using premium Belgian chocolate and local farm butter.",
    icon: "🍪",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Event Catering",
    description: "Full dessert bars for weddings, corporate events, and parties of all sizes.",
    icon: "🎊",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Home Delivery",
    description: "Freshly baked items delivered right to your doorstep within our 10-mile radius.",
    icon: "🚚",
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=600&auto=format&fit=crop"
  }
];

export const MENU_ITEMS: MenuItem[] = [
  { id: 1, name: "Velvet Cloud Cake", description: "Soft sponge with Madagascar vanilla cream and berry dust", price: "$35.00+", category: "Cakes", image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?q=80&w=400&auto=format&fit=crop" },
  { id: 2, name: "Midnight Chocolate", description: "Triple chocolate decadent layer cake", price: "$42.00+", category: "Cakes", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=400&auto=format&fit=crop" },
  { id: 3, name: "Red Velvet Kiss", description: "Classic red velvet with cream cheese frosting", price: "$3.50 ea", category: "Cupcakes", image: "https://images.unsplash.com/photo-1614707267537-b85af00c4b81?q=80&w=400&auto=format&fit=crop" },
  { id: 4, name: "Lemon Zest Dream", description: "Tangy lemon curd filled with meringue topping", price: "$3.50 ea", category: "Cupcakes", image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=400&auto=format&fit=crop" },
  { id: 5, name: "Butter Croissant", description: "24 layers of pure buttery perfection", price: "$4.50", category: "Pastries", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400&auto=format&fit=crop" },
  { id: 6, name: "Pain au Chocolat", description: "Double chocolate filled artisan pastry", price: "$5.00", category: "Pastries", image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?q=80&w=400&auto=format&fit=crop" },
  { id: 7, name: "Classic Glazed", description: "Light and airy yeast donut with honey glaze", price: "$2.50", category: "Donuts", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=400&auto=format&fit=crop" },
  { id: 8, name: "Pink Strawberry", description: "Strawberry frosted with rainbow sprinkles", price: "$3.00", category: "Donuts", image: "https://images.unsplash.com/photo-1533910534207-90f31029a78e?q=80&w=400&auto=format&fit=crop" },
  { id: 9, name: "Choco Chip Chunk", description: "Giant gooey cookies with dark chocolate chunks", price: "$3.00", category: "Cookies", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=400&auto=format&fit=crop" },
  { id: 10, name: "Macadamia Nut White", description: "White chocolate and roasted macadamia nuts", price: "$3.25", category: "Cookies", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=400&auto=format&fit=crop" }
];
