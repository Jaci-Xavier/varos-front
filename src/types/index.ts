export interface NavItem {
  name: string;
  path: string;
}

export interface Cards {
  path: string;
  title: string;
  width?: string;
  height?: string;
}

export interface Carteiras {
  title: string;
  img: string;
  description: string;
}

export interface MenuItems {
  title: string;
  img: string;
  description: string;
  key: number;
  content: string;
  photo: string;
  menu: number;
}

export interface CarouselItems {
  id: number;
  path: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
}

export interface MobileMenuOptions {
  key: number;
  title: string;
  path: string;
  description: string;
}
