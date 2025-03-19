import { Store, MenuItem, StoreMenu, LocalSource, LocalSourcesByState } from '../types';

export const stores: Store[] = [
  // California - Los Angeles
  {
    id: 'ca-la-5th-grand',
    name: 'Sweetgreen - 5th + Grand',
    address: '601 W 5th St',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90071',
    phone: '2135551234',
    latitude: 34.0496,
    longitude: -118.2539,
    hours: '10:30 AM - 9:00 PM',
    isOpen: true,
  },
  {
    id: 'ca-la-8th-hill',
    name: 'Sweetgreen - 8th + Hill',
    address: '820 S Hill St',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90014',
    phone: '2135552345',
    latitude: 34.0419,
    longitude: -118.2556,
    hours: '10:30 AM - 9:00 PM',
    isOpen: true,
  },
  {
    id: 'ca-la-beverly',
    name: 'Sweetgreen - Beverly + Wilshire',
    address: '8075 W 3rd St',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90048',
    phone: '3235553456',
    latitude: 34.0723,
    longitude: -118.3647,
    hours: '10:30 AM - 9:00 PM',
    isOpen: true,
  },
  // New York City
  {
    id: 'ny-nyc-union-square',
    name: 'Sweetgreen - Union Square',
    address: '8 E 18th St',
    city: 'New York',
    state: 'NY',
    zipCode: '10003',
    phone: '2125554567',
    latitude: 40.7371,
    longitude: -73.9915,
    hours: '10:30 AM - 10:00 PM',
    isOpen: true,
  },
  {
    id: 'ny-nyc-nomad',
    name: 'Sweetgreen - NoMad',
    address: '1164 Broadway',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    phone: '2125555678',
    latitude: 40.7449,
    longitude: -73.9892,
    hours: '10:30 AM - 10:00 PM',
    isOpen: true,
  },
  // Boston
  {
    id: 'ma-boston-backbay',
    name: 'Sweetgreen - Back Bay',
    address: '659 Boylston St',
    city: 'Boston',
    state: 'MA',
    zipCode: '02116',
    phone: '6175556789',
    latitude: 42.3498,
    longitude: -71.0817,
    hours: '10:30 AM - 9:00 PM',
    isOpen: true,
  },
  // Washington DC
  {
    id: 'dc-dupont',
    name: 'Sweetgreen - Dupont',
    address: '1512 Connecticut Ave NW',
    city: 'Washington',
    state: 'DC',
    zipCode: '20036',
    phone: '2025557890',
    latitude: 38.9109,
    longitude: -77.0426,
    hours: '10:30 AM - 9:00 PM',
    isOpen: true,
  },
];

export const localSources: LocalSourcesByState = {
  CA: [
    {
      id: 'ca-1',
      name: 'Sage Mountain Farm',
      location: 'Hemet, CA',
      distance: 87,
      description: 'Organic family farm specializing in seasonal vegetables and herbs. Known for their sustainable farming practices and diverse crop rotation.',
      products: ['Kale', 'Arugula', 'Tomatoes', 'Herbs'],
      image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=500',
      since: 2015
    },
    {
      id: 'ca-2',
      name: 'Coleman Family Farms',
      location: 'Carpinteria, CA',
      distance: 95,
      description: 'Multi-generational family farm providing specialty greens and herbs. Practices sustainable agriculture with focus on soil health.',
      products: ['Mixed Greens', 'Specialty Lettuce', 'Microgreens'],
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=500',
      since: 2012
    }
  ],
  NY: [
    {
      id: 'ny-1',
      name: 'Norwich Meadows Farm',
      location: 'Norwich, NY',
      distance: 215,
      description: 'Certified organic farm specializing in diverse vegetables and herbs. Known for their commitment to biodiversity.',
      products: ['Organic Vegetables', 'Heirloom Tomatoes', 'Fresh Herbs'],
      image: 'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?q=80&w=1974&auto=format&fit=crop&w=500',
      since: 2014
    },
    {
      id: 'ny-2',
      name: 'Hudson Valley Farms',
      location: 'Hudson Valley, NY',
      distance: 98,
      description: 'Collective of small family farms focusing on sustainable agriculture and seasonal produce.',
      products: ['Seasonal Greens', 'Root Vegetables', 'Apples'],
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=500',
      since: 2013
    }
  ],
  MA: [
    {
      id: 'ma-1',
      name: 'Kitchen Garden Farm',
      location: 'Sunderland, MA',
      distance: 89,
      description: 'Organic farm specializing in salad greens and hot peppers. Known for their innovative growing techniques.',
      products: ['Salad Greens', 'Hot Peppers', 'Tomatoes'],
      image: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=500',
      since: 2016
    }
  ],
  DC: [
    {
      id: 'dc-1',
      name: 'Path Valley Farms',
      location: 'Path Valley, PA',
      distance: 120,
      description: 'Cooperative of Amish and Mennonite family farms providing fresh, seasonal produce.',
      products: ['Mixed Vegetables', 'Herbs', 'Root Vegetables'],
      image: 'https://plus.unsplash.com/premium_photo-1661811677567-6f14477aa1fa?q=80&w=2076&auto=format&fit=crop&w=500',
      since: 2011
    }
  ]
};

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Harvest Bowl',
    description: 'Wild rice, kale, apples, sweet potatoes, chicken, goat cheese, roasted almonds, balsamic vinaigrette',
    price: 13.95,
    category: 'Warm Bowls',
    calories: 705,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500',
    allergens: ['nuts', 'dairy'],
    isVegan: false,
    isGlutenFree: true,
  },
  {
    id: '2',
    name: 'Kale Caesar',
    description: 'Kale, romaine, parmesan crisps, tomatoes, fresh lime squeeze, caesar dressing',
    price: 11.95,
    category: 'Salads',
    calories: 440,
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=500',
    allergens: ['dairy'],
    isVegan: false,
    isGlutenFree: true,
  },
  {
    id: '3',
    name: 'Guacamole Greens',
    description: 'Organic mesclun, avocado, roasted chicken, red onion, tomatoes, tortilla chips, lime cilantro jalapeño vinaigrette',
    price: 12.95,
    category: 'Salads',
    calories: 530,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500',
    allergens: [],
    isVegan: false,
    isGlutenFree: true,
  },
  {
    id: '4',
    name: 'Crispy Rice Bowl',
    description: 'Blackened chicken, crispy rice, raw carrots, shredded cabbage, cucumber, cilantro, roasted almonds, lime squeeze, spicy cashew dressing',
    price: 14.95,
    category: 'Warm Bowls',
    calories: 640,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=500',
    allergens: ['nuts'],
    isVegan: false,
    isGlutenFree: true,
  },
];

export const storeMenus: StoreMenu[] = stores.map(store => ({
  storeId: store.id,
  items: menuItems,
}));