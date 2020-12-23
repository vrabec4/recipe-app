import React from 'react';
import { useParams } from 'react-router';

import { RecipeForm } from '../Recipes/RecipeForm';
import { RecipesList } from '../Recipes/RecipesList';

interface ParamTypes {
  recipeCategoryID: string;
}

const recipes = [
  {
    title: 'Crock Pot Roast',
    image: 'http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg',
    category: 'meat',
  },
  {
    title: 'Asp',
    image: 'http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/50/84/7/picMcSyVd.jpg',
    category: 'fish',
  },
  {
    title: 'Pizza',
    image: 'http://upload.wikimedia.org/wikipedia/commons/c/c7/Spinach_pizza.jpg',
    category: 'soups',
  },
  {
    title: 'Bull dick steak',
    image: 'https://www.omahasteaks.com/blog/wp-content/uploads/2019/09/creative-ways-to-cook-a-steak.png',
    category: 'vegie',
  },
  {
    title: 'Acorn squash',
    image: 'http://elanaspantry.com/wp-content/uploads/2008/10/acorn_squash_with_cranberry.jpg',
    category: 'vegie',
  },
  {
    title: 'Yorkshire pudding',
    image: 'http://upload.wikimedia.org/wikipedia/commons/f/f9/Yorkshire_Pudding.jpg',
    category: 'vegie',
  },
  {
    title: 'Currie chicken salad',
    image: 'http://www.chatelaine.com/wp-content/uploads/2013/05/Curried-chicken-salad.jpg',
    category: 'meat',
  },
  {
    title: 'Blueberyy oatmeal',
    image: 'https://data.thefeedfeed.com/static/2019/04/04/15543976075ca639a743ac2.jpg',
    category: 'vegie',
  },
];

export function DashboardContent() {
  const { recipeCategoryID } = useParams<ParamTypes>();
  console.log(recipeCategoryID, 'recipeCategoryID');
  return recipeCategoryID === 'add' ? (
    <RecipeForm />
  ) : (
    <div>
      <RecipesList recipes={recipes} recipeCategoryID={recipeCategoryID} />
    </div>
  );
}
