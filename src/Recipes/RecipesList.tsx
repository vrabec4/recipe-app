import React from 'react';

import { Grid } from '@material-ui/core';

import { Recipe } from './Recipe';

type Recipe = {
  title: string;
  image: string;
  category: string;
};

type Props = {
  recipes: Array<Recipe>;
  // editRecipe: () => void;
  recipeCategoryID: string;
};

export function RecipesList({ recipes, recipeCategoryID }: Props) {
  console.log(!!recipeCategoryID, 'recipeCategoryID');
  const categorizedRecipes =
    recipeCategoryID !== 'all-recipes' &&
    recipes
      .filter(({ category }) => category === recipeCategoryID)
      .map(({ title, image, category }, index) => {
        // Todo replace index with recipe id
        return <Recipe key={index} title={title} image={image} category={category} />;
      });

  const allRecipes = recipes.map(({ title, image, category }, index) => {
    // Todo replace index with recipe id
    return <Recipe key={index} title={title} image={image} category={category} />;
  });

  console.log(categorizedRecipes, 'allRecipes');

  return (
    <Grid container direction='row' justify='flex-start' alignItems='center' spacing={2}>
      {recipeCategoryID === 'all-recipes' ? allRecipes : categorizedRecipes}
    </Grid>
  );
}
