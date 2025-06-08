import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation and useNavigate
import ProductCard from '@/components/ProductCard';
import { products, Product } from '@/data/products';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

const ProductsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [sortBy, setSortBy] = useState('Featured');
  const [activeFilter, setActiveFilter] = useState('All Products');
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [pageTitle, setPageTitle] = useState('Our Products');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Get unique brands and colors from products
  const brands = Array.from(new Set(products.map(p => p.name.split(' ')[0])));
  const colors = Array.from(new Set(products.flatMap(p => p.colors)));

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryFromUrl = params.get('category');
    const queryFromUrl = params.get('query');

    let filtered: Product[] = [];
    let title = 'Our Products';

    if (categoryFromUrl) {
      setActiveFilter(categoryFromUrl);
      title = categoryFromUrl;
      // Filter products based on the category from the URL
      filtered = products.filter(
        (product) => product.category.toLowerCase() === categoryFromUrl.toLowerCase()
      );
    } else if (queryFromUrl) {
       setActiveFilter('Search Results'); // Indicate that we are showing search results
       title = `Search Results for "${queryFromUrl}"`;
       // Filter products based on the search query
       filtered = products.filter(
         (product) =>
           product.name.toLowerCase().includes(queryFromUrl.toLowerCase()) ||
           product.description.toLowerCase().includes(queryFromUrl.toLowerCase()) ||
           product.category.toLowerCase().includes(queryFromUrl.toLowerCase())
       );
    } else {
      // If no category or query in URL, display all products
      setActiveFilter('All Products');
      title = 'All Products';
      filtered = products;
    }

    // Apply filters
    filtered = filtered.filter(product => {
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.name.split(' ')[0]);
      const matchesColor = selectedColors.length === 0 || product.colors.some(color => selectedColors.includes(color));
      return matchesPrice && matchesBrand && matchesColor;
    });

    // Apply sorting
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'Price: Low to High':
          return a.price - b.price;
        case 'Price: High to Low':
          return b.price - a.price;
        case 'Top Rated':
          return b.rating - a.rating;
        case 'Newest':
          return b.id - a.id; // Assuming higher ID means newer product
        default: // Featured
          return 0; // Keep original order
      }
    });

    setDisplayedProducts(filtered);
    setPageTitle(title);

  }, [location.search, sortBy, priceRange, selectedBrands, selectedColors]); // Re-run effect when URL search parameters change

  const handleSortByChange = (value: string) => {
    setSortBy(value);
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    if (filter === 'All Products') {
      navigate('/products'); // Navigate to /products to clear params
    } else {
      // Navigate and add category as a URL parameter
      navigate(`/products?category=${encodeURIComponent(filter)}`);
    }
     // Close any open dropdowns or menus if necessary
  };

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const handleColorToggle = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    setPriceRange([min, max]);
  };

  const clearFilters = () => {
    setPriceRange([0, 10000]);
    setSelectedBrands([]);
    setSelectedColors([]);
  };

  // Placeholder for search handling if needed within the page (optional)
  const handleSearchOnPage = (query: string) => {
      if (query.trim()) {
          navigate(`/products?query=${encodeURIComponent(query.trim())}`);
      }
  };


  return (
    <div className="container mx-auto py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="text-gray-600 text-sm mb-4">
        <a href="/" className="hover:underline text-gray-600 hover:text-gray-800">Home</a> &gt; <span className="text-gray-800 font-semibold">{pageTitle}</span>
      </nav>

      {/* Page Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">{pageTitle}</h2>

      {/* Filter and Sort Controls */}
      {/* Show filter/sort only if displaying categories, not search results */}
      {location.search.includes('category') || !location.search ? (
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            <Button 
              variant={'outline'}
              onClick={() => handleFilterChange('All Products')}
              className={activeFilter === 'All Products' ? 'bg-black text-white hover:bg-gray-800 rounded-md px-4 py-2 text-sm' : 'border-gray-300 text-gray-700 hover:bg-gray-100 rounded-md px-4 py-2 text-sm'}
            >
              All Products
            </Button>
            <Button 
              variant={'outline'}
              onClick={() => handleFilterChange('WIRELESS EARBUDS')}
              className={activeFilter === 'WIRELESS EARBUDS' ? 'bg-black text-white hover:bg-gray-800 rounded-md px-4 py-2 text-sm' : 'border-gray-300 text-gray-700 hover:bg-gray-100 rounded-md px-4 py-2 text-sm'}
            >
              True Wireless Earbuds
            </Button>
            <Button
              variant={'outline'}
              onClick={() => handleFilterChange('BLUETOOTH HEADPHONES')}
              className={activeFilter === 'BLUETOOTH HEADPHONES' ? 'bg-black text-white hover:bg-gray-800 rounded-md px-4 py-2 text-sm' : 'border-gray-300 text-gray-700 hover:bg-gray-100 rounded-md px-4 py-2 text-sm'}
            >
              Headphones
            </Button>
            <Button
              variant={'outline'}
              onClick={() => handleFilterChange('BLUETOOTH SPEAKERS')}
              className={activeFilter === 'BLUETOOTH SPEAKERS' ? 'bg-black text-white hover:bg-gray-800 rounded-md px-4 py-2 text-sm' : 'border-gray-300 text-gray-700 hover:bg-gray-100 rounded-md px-4 py-2 text-sm'}
            >
              Speakers
            </Button>
            <Button
              variant={'outline'}
              onClick={() => handleFilterChange('SMART WATCHES')}
              className={activeFilter === 'SMART WATCHES' ? 'bg-black text-white hover:bg-gray-800 rounded-md px-4 py-2 text-sm' : 'border-gray-300 text-gray-700 hover:bg-gray-100 rounded-md px-4 py-2 text-sm'}
            >
              Smart Watches
            </Button>
          </div>

          {/* Filter and Sort */}
          <div className="flex items-center space-x-4">
            {/* Filter Button */}
            <Button 
              variant="outline" 
              className="border-gray-300 text-gray-700 hover:bg-gray-100 rounded-md px-4 py-2 text-sm"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filter By
              <ChevronDown className="ml-2 h-4 w-4 text-gray-500" />
            </Button>

            {/* Sort By Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 rounded-md px-4 py-2 text-sm">
                  Sort by: <span className="font-semibold ml-1 text-gray-800">{sortBy}</span> <ChevronDown className="ml-2 h-4 w-4 text-gray-500" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleSortByChange('Featured')}>Featured</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSortByChange('Newest')}>Newest</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSortByChange('Price: Low to High')}>Price: Low to High</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSortByChange('Price: High to Low')}>Price: High to Low</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSortByChange('Top Rated')}>Top Rated</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ) : null} {/* Hide filter/sort when displaying search results */}

      {/* Filter Panel */}
      {showFilters && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xl font-semibold">Filters</h3>
              <p className="text-sm text-gray-500 mt-1">Refine your product selection</p>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearFilters}
              className="text-gray-600 hover:text-gray-900"
            >
              Clear All
            </Button>
          </div>

          <div className="max-h-[400px] overflow-y-auto pr-4">
            {/* Price Range */}
            <div className="mb-8">
              <h4 className="font-medium mb-4 flex items-center justify-between">
                <span>Price Range</span>
                <span className="text-sm text-gray-500">₹{priceRange[0]} - ₹{priceRange[1]}</span>
              </h4>
              <div className="px-2">
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceRangeChange(priceRange[0], Number(e.target.value))}
                  className="w-full mb-4"
                />
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Min:</span>
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => handlePriceRangeChange(Number(e.target.value), priceRange[1])}
                      className="w-24 px-2 py-1 border rounded text-sm"
                      min="0"
                      max={priceRange[1]}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Max:</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => handlePriceRangeChange(priceRange[0], Number(e.target.value))}
                      className="w-24 px-2 py-1 border rounded text-sm"
                      min={priceRange[0]}
                      max="10000"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="h-px bg-gray-200 my-6" />

            {/* Colors */}
            <div className="mb-8">
              <h4 className="font-medium mb-4 flex items-center justify-between">
                <span>Colors</span>
                <span className="text-sm text-gray-500">{selectedColors.length} selected</span>
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {colors.map(color => (
                  <div
                    key={color}
                    className={`flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded-md ${
                      selectedColors.includes(color) ? 'bg-gray-50' : ''
                    }`}
                    onClick={() => handleColorToggle(color)}
                  >
                    <div className={`w-4 h-4 border rounded flex items-center justify-center ${
                      selectedColors.includes(color) ? 'bg-black border-black' : 'border-gray-300'
                    }`}>
                      {selectedColors.includes(color) && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm">{color}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Apply Filters Button */}
          <div className="mt-6 pt-4 border-t">
            <Button 
              className="w-full bg-black hover:bg-gray-800 text-white"
              onClick={() => setShowFilters(false)}
            >
              Apply Filters
            </Button>
          </div>
        </div>
      )}

      {/* Active Filters */}
      {(selectedBrands.length > 0 || selectedColors.length > 0 || priceRange[0] > 0 || priceRange[1] < 10000) && (
        <div className="flex flex-wrap gap-2 mb-6">
          {selectedBrands.map(brand => (
            <Badge 
              key={brand} 
              variant="secondary" 
              className="flex items-center gap-1 px-3 py-1 bg-gray-100 hover:bg-gray-200"
            >
              {brand}
              <X className="h-3 w-3 cursor-pointer" onClick={() => handleBrandToggle(brand)} />
            </Badge>
          ))}
          {selectedColors.map(color => (
            <Badge 
              key={color} 
              variant="secondary" 
              className="flex items-center gap-1 px-3 py-1 bg-gray-100 hover:bg-gray-200"
            >
              {color}
              <X className="h-3 w-3 cursor-pointer" onClick={() => handleColorToggle(color)} />
            </Badge>
          ))}
          {(priceRange[0] > 0 || priceRange[1] < 10000) && (
            <Badge 
              variant="secondary" 
              className="flex items-center gap-1 px-3 py-1 bg-gray-100 hover:bg-gray-200"
            >
              ₹{priceRange[0]} - ₹{priceRange[1]}
              <X className="h-3 w-3 cursor-pointer" onClick={() => setPriceRange([0, 10000])} />
            </Badge>
          )}
        </div>
      )}

      {displayedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : ( location.search &&
        <p className="text-gray-600">No products found matching your criteria.</p>
      )}
    </div>
  );
};

export default ProductsPage;