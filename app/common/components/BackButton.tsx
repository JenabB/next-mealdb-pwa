'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.back()}>
      Click here to go back
    </button>
  );
};

export default BackButton;
