import React from 'react';
import useSWR from 'swr';
import { fetcher } from '../api';
import MenuItem from './MenuItem';
import MenuEmpty from './MenuEmpty';

export default function MenuResult({
  query,
}: {
  query: string | undefined;
}) {
  const { data } = useSWR(
    query
      ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      : `https://www.themealdb.com/api/json/v1/1/search.php?s=a`,
    fetcher
  );

  console.log({ data });

  // if (error) return <p>Error :(</p>;
  console.log({ query, data });
  if (query && !data) return <MenuEmpty />;
  if (!query && !data) return <h1>not found</h1>;

  if (data.meals === null) return <h1>not found ea</h1>;

  return (
    <div>
      <div className="grid grid-cols-6 p-2">
        {data.meals.map((meal: any, index: number) => (
          <MenuItem key={index} meal={meal} />
        ))}
      </div>
    </div>
  );
}
