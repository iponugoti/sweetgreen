export interface Store {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  latitude: number;
  longitude: number;
  hours: string;
  isOpen: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  calories: number;
  image: string;
  allergens: string[];
  isVegan: boolean;
  isGlutenFree: boolean;
}

export interface LocalSource {
  id: string;
  name: string;
  location: string;
  distance: number;
  description: string;
  products: string[];
  image: string;
  since: number;
}

export interface StoreMenu {
  storeId: string;
  items: MenuItem[];
}

export interface StoresByState {
  [state: string]: Store[];
}

export interface LocalSourcesByState {
  [state: string]: LocalSource[];
}