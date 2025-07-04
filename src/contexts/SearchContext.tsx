
import React, { createContext, useContext, useState, useEffect } from 'react';

interface SearchItem {
  id: string;
  name: string;
  type: 'medicine' | 'vaccine' | 'cosmetic';
  petType: 'dogs' | 'cats' | 'birds';
  category?: string;
  image: string;
  path: string;
}

interface SearchContextType {
  searchResults: SearchItem[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isSearching: boolean;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Mock data for all searchable items - in a real app this would come from your API/database
  const allItems: SearchItem[] = [
    // Dog medicines
    ...Array.from({ length: 42 }, (_, i) => ({
      id: `${i + 1}`,
      name: `Dog Medicine ${i + 1}`,
      type: 'medicine' as const,
      petType: 'dogs' as const,
      image: `https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=200&h=200&fit=crop&sig=dog-med-${i + 1}`,
      path: `/dogs/medicines/${i + 1}`
    })),
    // Cat medicines
    ...Array.from({ length: 42 }, (_, i) => ({
      id: `${i + 1}`,
      name: `Cat Medicine ${i + 1}`,
      type: 'medicine' as const,
      petType: 'cats' as const,
      image: `https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=200&h=200&fit=crop&sig=cat-med-${i + 1}`,
      path: `/cats/medicines/${i + 1}`
    })),
    // Bird medicines by category
    ...Array.from({ length: 10 }, (_, i) => ({
      id: `${i + 1}`,
      name: `Bird Antibiotic ${i + 1}`,
      type: 'medicine' as const,
      petType: 'birds' as const,
      category: 'antibiotics',
      image: `https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=200&h=200&fit=crop&sig=bird-antibiotic-${i + 1}`,
      path: `/birds/medicines/category/antibiotics/${i + 1}`
    })),
    ...Array.from({ length: 8 }, (_, i) => ({
      id: `${i + 1}`,
      name: `Bird Anti-coccidial ${i + 1}`,
      type: 'medicine' as const,
      petType: 'birds' as const,
      category: 'anti-coccidial',
      image: `https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=200&h=200&fit=crop&sig=bird-anticoccidial-${i + 1}`,
      path: `/birds/medicines/category/anti-coccidial/${i + 1}`
    })),
    // Dog vaccines
    ...Array.from({ length: 5 }, (_, i) => ({
      id: `${i + 1}`,
      name: `Dog Vaccine ${i + 1}`,
      type: 'vaccine' as const,
      petType: 'dogs' as const,
      image: `https://images.unsplash.com/photo-1559757175-a4d43d2fe0a0?w=200&h=200&fit=crop&sig=dog-vaccine-${i + 1}`,
      path: `/dogs/vaccines/${i + 1}`
    })),
    // Cat vaccines
    ...Array.from({ length: 5 }, (_, i) => ({
      id: `${i + 1}`,
      name: `Cat Vaccine ${i + 1}`,
      type: 'vaccine' as const,
      petType: 'cats' as const,
      image: `https://images.unsplash.com/photo-1559757175-a4d43d2fe0a0?w=200&h=200&fit=crop&sig=cat-vaccine-${i + 1}`,
      path: `/cats/vaccines/${i + 1}`
    })),
    // Dog cosmetics/supplements
    ...Array.from({ length: 14 }, (_, i) => ({
      id: `${i + 1}`,
      name: `Dog Supplement ${i + 1}`,
      type: 'cosmetic' as const,
      petType: 'dogs' as const,
      image: `https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&h=200&fit=crop&sig=dog-supplement-${i + 1}`,
      path: `/dogs/cosmetics-supplements/${i + 1}`
    })),
    // Cat cosmetics/supplements
    ...Array.from({ length: 14 }, (_, i) => ({
      id: `${i + 1}`,
      name: `Cat Supplement ${i + 1}`,
      type: 'cosmetic' as const,
      petType: 'cats' as const,
      image: `https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&h=200&fit=crop&sig=cat-supplement-${i + 1}`,
      path: `/cats/cosmetics-supplements/${i + 1}`
    }))
  ];

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    
    // Simulate API delay
    const timer = setTimeout(() => {
      const results = allItems.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.petType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.category && item.category.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 10); // Limit to 10 results
      
      setSearchResults(results);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <SearchContext.Provider value={{
      searchResults,
      searchQuery,
      setSearchQuery,
      isSearching
    }}>
      {children}
    </SearchContext.Provider>
  );
};
