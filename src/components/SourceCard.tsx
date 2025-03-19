import { LocalSource } from '../types';

interface SourceCardProps {
  source: LocalSource;
}

export function SourceCard({ source }: SourceCardProps) {
  return (
    <div className="bg-lightGray rounded-lg shadow-md overflow-hidden">
      <img 
        src={source.image} 
        alt={source.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{source.name}</h3>
          <span className="text-sm text-gray-500">{source.distance} miles away</span>
        </div>
        
        <div className="mb-4">
          <span className="text-gray-600 text-sm">{source.location}</span>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-gray-600 text-sm">Partner since {source.since}</span>
        </div>
        
        <p className="text-gray-600 mb-4">{source.description}</p>
        
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-900">Products we source:</h4>
          <div className="flex flex-wrap gap-2">
            {source.products.map(product => (
              <span 
                key={product}
                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
              >
                {product}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}