
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: 'Cakes' | 'Cupcakes' | 'Pastries' | 'Donuts' | 'Cookies';
  image: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface SliderImage {
  url: string;
  title: string;
  description: string;
}
