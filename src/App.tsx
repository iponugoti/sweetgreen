import { useState, useMemo } from 'react';
import { Store, StoresByState } from './types';
import { stores, localSources } from './data/mockData';
import { StoreCard } from './components/StoreCard';
import { SourceCard } from './components/SourceCard';
import { SearchBar } from './components/SearchBar';
import { Menu, X, Compass } from 'lucide-react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const [showSources, setShowSources] = useState(false);
  const [selectedState, setSelectedState] = useState<string>('');
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [nearestStore, setNearestStore] = useState<Store | null>(null);

  // Group stores by state
  const storesByState = useMemo(() => {
    return stores.reduce((acc: StoresByState, store) => {
      if (!acc[store.state]) {
        acc[store.state] = [];
      }
      acc[store.state].push(store);
      return acc;
    }, {});
  }, []);

  // Get unique states
  const states = useMemo(() => Object.keys(storesByState).sort(), [storesByState]);

  const filteredStores = useMemo(() => {
    let filtered = selectedState ? storesByState[selectedState] : stores;

    if (searchTerm) {
      filtered = filtered.filter(
        (store) =>
          store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          store.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
          store.city.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [selectedState, searchTerm, storesByState]);

  const currentSources = useMemo(() => {
    if (!selectedStore) return [];
    return localSources[selectedStore.state] || [];
  }, [selectedStore]);

  // Function to get user's current location
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          setUserLocation({ lat: userLat, lng: userLng });

          // Find the nearest store
          const nearest = findNearestStore(userLat, userLng);
          setNearestStore(nearest);
          setSelectedStore(nearest);
          setShowSources(true);
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Could not retrieve your location.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  // Function to calculate the nearest store
  const findNearestStore = (lat: number, lng: number) => {
    let closestStore: Store | null = null;
    let shortestDistance = Infinity;

    stores.forEach((store) => {
      const distance = getDistance(lat, lng, store.latitude, store.longitude);
      if (distance < shortestDistance) {
        shortestDistance = distance;
        closestStore = store;
      }
    });

    return closestStore;
  };

  // Function to calculate distance between two coordinates using Haversine formula
  const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const toRadians = (deg: number) => (deg * Math.PI) / 180;
    const R = 6371; // Radius of Earth in km

    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distance in km
  };

  return (
    <div className="min-h-screen bg-secondary">
      {/* Header */}
      <header className="bg-secondary shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold primary">sweetgreen</h1>
            </div>
            <button
              onClick={() => setShowSources(!showSources)}
              className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {showSources ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Sourcing Commitment Section */}
      <section className="bg-secondary text-textDark py-8 px-8 max-w-3xl mx-auto text-center rounded-lg">
        <h2 className="text-4xl font-bold font-montserrat text-primary">Our Sourcing Commitment</h2>
        <p className="mt-2 text-lg">
          Sweetgreen prioritizes local, organic, and sustainable sourcing
          aiming to build healthier communities by connecting people to real food. We work with over 200 food partners
          across the country, including farmers and bakers, and prioritize regenerative practices to minimize our carbon footprint.
          Find out where your local sweetgreen sources the freshest of ingredients!
        </p>
      </section>

      {/* Find Nearest Sweetgreen Button */}
      <div className="flex justify-center">
        <button
          onClick={getUserLocation}
          className="flex mb-2 items-center bg-primary text-white px-6 py-2 rounded-md hover:bg-green-800 transition"
        >
          <Compass className="w-5 h-5 mr-2" /> Find Nearest Sweetgreen
        </button>
      </div>

      {/* Display Nearest Store (if found) */}
      {nearestStore && (
        <div className="max-w-3xl mx-auto mt-6 bg-white p-4 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-montserrat text-primary">Nearest Sweetgreen</h2>
          <p className="text-lg font-semibold">{nearestStore.name}</p>
          <p>
            {nearestStore.address}, {nearestStore.city}, {nearestStore.state}
          </p>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Stores Section */}
          <div className={`${showSources ? 'hidden' : 'block'} md:block`}>
            <div className="mb-6">
              <h2 className="text-xl font-montserrat text-primary mb-4">Store Locations</h2>
              <div className="space-y-4">
                <select
                  value={selectedState}
                  onChange={(e) => {
                    setSelectedState(e.target.value);
                    setSelectedStore(null);
                    setShowSources(false);
                  }}
                  className="bg-lightGray w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                >
                  <option value="">All States</option>
                  {states.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
                <SearchBar
                  value={searchTerm}
                  onChange={(value) => {
                    setSearchTerm(value);
                    setSelectedStore(null);
                    setShowSources(false);
                  }}
                  placeholder="Search stores by name or location..."
                />
              </div>
            </div>
            <div className="space-y-4">
              {filteredStores.map(store => (
                <StoreCard
                  key={store.id}
                  store={store}
                  isSelected={selectedStore?.id === store.id}
                  onClick={(store) => {
                    setSelectedStore(store);
                    setShowSources(true);
                  }}
                />
              ))}
            </div>
          </div>

          {/* Local Sources Section */}
          <div className={`${!showSources ? 'hidden' : 'block'} md:block`}>
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-montserrat text-primary">
                  {selectedStore ? (
                    <span>Local Sources for {selectedStore.name}</span>
                  ) : (
                    'Select a Store to See Local Sources...'
                  )}
                </h2>
                <button
                  onClick={() => {
                    setShowSources(false);
                    setSelectedStore(null);
                  }}
                  className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              {selectedStore && currentSources.length === 0 && (
                <p className="text-gray-600 mt-4">No local source information available for this location yet.</p>
              )}
            </div>
            <div className="grid grid-cols-1 gap-6">
              {currentSources.map(source => (
                <SourceCard key={source.id} source={source} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;