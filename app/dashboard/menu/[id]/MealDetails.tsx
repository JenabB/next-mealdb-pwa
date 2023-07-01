'use client';
import React from 'react';
import { fetcher } from './api';
import useSWR from 'swr';
import Image from 'next/image';
import DetailsLoading from './loading';
import MealDetailsError from './error';

const MealDetails = ({ id }: any) => {
  const { data, error, isLoading } = useSWR(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    fetcher
  );

  if (isLoading) return <DetailsLoading />;

  if (error) return <MealDetailsError error={error} />;

  return (
    <div>
      <Image
        src={data.meals[0].strMealThumb}
        alt={data.meals[0].strMeal}
        width={400}
        height={500}
      />
      <h1>{data.meals[0].strMeal}</h1>
    </div>
  );
};

export default MealDetails;
