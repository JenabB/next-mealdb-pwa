import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MenuItem = ({ meal }: { meal: any }) => {
  return (
    <div className=" bg-white m-2 p-2 rounded-lg shadow-lg">
      <div className="flex flex-row justify-center">
        <Image
          className="rounded-full"
          src={meal.strMealThumb}
          alt={meal.strMeal}
          width={100}
          height={55}
        />
      </div>
      <Link href={`/dashboard/menu/${meal.idMeal}`}>
        <div className="text-center my-2 ">
          <h1 className="font-bold">{meal.strMeal}</h1>
          <h2 className="text-gray-400">{meal.strArea}</h2>
        </div>
      </Link>
    </div>
  );
};

export default MenuItem;
