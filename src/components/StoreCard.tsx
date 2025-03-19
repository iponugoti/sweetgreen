import { MapPin, Phone, Clock } from 'lucide-react';
import { Store } from '../types';
import { formatPhoneNumber } from '../lib/utils';

interface StoreCardProps {
  store: Store;
  onClick: (store: Store) => void;
  isSelected?: boolean;
}

export function StoreCard({ store, onClick, isSelected }: StoreCardProps) {
  return (
    <div 
      className={`bg-lightGray rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer ${
        isSelected ? 'ring-2 ring-green-800' : ''
      }`}
      onClick={() => onClick(store)}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-primary">{store.name}</h3>
        <span className={`px-2 py-1 rounded-full text-sm ${store.isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {store.isOpen ? 'Open' : 'Closed'}
        </span>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center text-gray-600">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{store.address}, {store.city}, {store.state} {store.zipCode}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <Phone className="w-4 h-4 mr-2" />
          <span>{formatPhoneNumber(store.phone)}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <Clock className="w-4 h-4 mr-2" />
          <span>{store.hours}</span>
        </div>
      </div>
    </div>
  );
}