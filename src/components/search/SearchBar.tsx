
import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useSearch } from '../../contexts/SearchContext';
import { Link } from 'react-router-dom';

const SearchBar: React.FC = () => {
  const { searchQuery, setSearchQuery, searchResults, isSearching } = useSearch();
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setIsOpen(true);
  };

  const handleClear = () => {
    setSearchQuery('');
    setIsOpen(false);
  };

  const handleResultClick = () => {
    setIsOpen(false);
    setSearchQuery('');
  };

  const getPetTypeColor = (petType: string) => {
    switch (petType) {
      case 'dogs':
        return 'text-vet-blue';
      case 'cats':
        return 'text-vet-green';
      case 'birds':
        return 'text-vet-orange';
      default:
        return 'text-gray-600';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'medicine':
        return 'Medicine';
      case 'vaccine':
        return 'Vaccine';
      case 'cosmetic':
        return 'Supplement';
      default:
        return type;
    }
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          placeholder="Search medicines, vaccines, supplements..."
          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-deepsky focus:border-transparent bg-white"
        />
        {searchQuery && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {isOpen && (searchQuery.trim() !== '' || isSearching) && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {isSearching ? (
            <div className="p-4 text-center text-gray-500">
              <div className="animate-spin h-5 w-5 border-2 border-theme-deepsky border-t-transparent rounded-full mx-auto mb-2"></div>
              Searching...
            </div>
          ) : searchResults.length > 0 ? (
            <div className="py-2">
              {searchResults.map((item) => (
                <Link
                  key={`${item.petType}-${item.type}-${item.id}`}
                  to={item.path}
                  onClick={handleResultClick}
                  className="flex items-center p-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-md flex-shrink-0"
                  />
                  <div className="ml-3 flex-grow">
                    <h4 className="font-medium text-gray-900">{item.name}</h4>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <span className={getPetTypeColor(item.petType)}>
                        {item.petType.charAt(0).toUpperCase() + item.petType.slice(1)}
                      </span>
                      <span className="mx-1">•</span>
                      <span>{getTypeLabel(item.type)}</span>
                      {item.category && (
                        <>
                          <span className="mx-1">•</span>
                          <span className="capitalize">{item.category.replace('-', ' ')}</span>
                        </>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-gray-500">
              No results found for "{searchQuery}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
