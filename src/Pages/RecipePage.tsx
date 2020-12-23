import React from 'react';
import { useParams } from 'react-router';

interface ParamTypes {
  recipeId: string;
}

export function RecipePage() {
  const { recipeId } = useParams<ParamTypes>();
  return <div>RecipePage+ {recipeId}</div>;
}
