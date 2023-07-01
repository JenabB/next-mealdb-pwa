'use client';
import { Suspense, useState } from 'react';
import Searchbar from './components/Searchbar';
import MenuResult from './components/MenuResult';

export default function MenuPage() {
  const [query, setQuery] = useState<undefined | string>(undefined);
  const handleQueryChange = (query: string) => {
    setQuery(query);
  };

  return (
    <div className="h-screen overflow-y-scroll">
      <Searchbar query={query} onQueryChange={handleQueryChange} />
      <Suspense fallback={<h1>Loading from Suspense</h1>}>
        <MenuResult query={query} />
      </Suspense>
    </div>
  );
}
