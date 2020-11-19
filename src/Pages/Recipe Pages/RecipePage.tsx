import React from 'react';
import { useParams } from 'react-router';

interface ParamTypes {
  recipeCategoryID: string;
}

export function RecipePage() {
  const { recipeCategoryID } = useParams<ParamTypes>();
  console.log({ recipeCategoryID });
  return (
    <div>
      <h1>{`${recipeCategoryID} recipes`}</h1>
    </div>
  );
}
