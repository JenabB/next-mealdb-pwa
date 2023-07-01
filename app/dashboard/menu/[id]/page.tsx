import React from 'react';
import MealDetails from './MealDetails';

const MealDetailsPage = ({ params }: { params: any }) => {
  return <MealDetails id={params.id} />;
};

export default MealDetailsPage;
