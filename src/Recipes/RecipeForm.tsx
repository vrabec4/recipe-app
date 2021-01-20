import React, { ChangeEvent, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {
  Box,
  Button,
  createStyles,
  FormControl,
  Icon,
  IconButton,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Theme,
} from '@material-ui/core';
import { ImageUpload } from '../shared/ImageUpload';

type Ingredient = {
  ingredientName: string;
  amount: string;
};

type Step = {
  stepName: string;
  time: number;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

export function RecipeForm() {
  const classes = useStyles();
  const [file, setFile] = useState<string | undefined>(undefined);
  const [ingredientList, setInputList] = useState<Array<Ingredient>>([{ ingredientName: '', amount: '' }]);
  const [stepsList, setStepList] = useState<Array<Step>>([{ stepName: '', time: 0 }]);
  const [imageURl, setImageURL] = useState<string>('');
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');

  console.log(ingredientList, 'ingredientList');

  const handleChangeImage = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    console.log(file);
    setFile(URL.createObjectURL(file));
  };

  const handleIngredientChange = (event: ChangeEvent, index: number) => {
    const { name, value } = event.target as HTMLInputElement;
    const list = [...ingredientList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleStepChange = (event: ChangeEvent, index: number) => {
    const { name, value } = event.target as HTMLInputElement;
    const list = [...stepsList];
    list[index][name] = value;
    setStepList(list);
  };

  // handle click event of the Remove button
  const handleRemoveIngredient = (index: number) => {
    const list = [...ingredientList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddIngredient = () => {
    setInputList([...ingredientList, { ingredientName: '', amount: '' }]);
  };

  // handle click event of the Remove button
  const handleRemoveStep = (index: number) => {
    const list = [...stepsList];
    list.splice(index, 1);
    setStepList(list);
  };

  // handle click event of the Add button
  const handleAddStep = () => {
    setStepList([...stepsList, { stepName: '', time: 0 }]);
  };

  const handleChangeCategory = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCategory(event.target.value as string);
  };

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSaveRecipe = () => {
    const recipe = {
      title: title,
      category: category,
      ingredients: ingredientList,
      steps: stepsList,
      image: imageURl,
    };

    console.log(recipe, '');
  };

  return (
    <form>
      <Typography variant='h6' gutterBottom>
        New Recipe
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField required id='title' name='title' label='Title' fullWidth autoComplete='given-name' onChange={handleChangeTitle} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl className={classes.formControl}>
            <InputLabel id='recipe-category'>Category</InputLabel>
            <Select labelId='recipe-category' id='recipe-category' value={category} onChange={handleChangeCategory}>
              <MenuItem value={'Meat'}>Meat</MenuItem>
              <MenuItem value={'Fishs'}>Fishs</MenuItem>
              <MenuItem value={'Soups'}>Soups</MenuItem>
              <MenuItem value={'Vegie'}>Vegie</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Typography>Ingredients</Typography>
        {ingredientList.map(({ ingredientName, amount }, i) => {
          return (
            <Grid container spacing={2} key={i}>
              <Grid item>
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  label='Ingredient'
                  name='ingredientName'
                  autoComplete='ingredient'
                  autoFocus
                  value={ingredientName}
                  onChange={e => handleIngredientChange(e, i)}
                />
              </Grid>
              <Grid item>
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  label='Amount'
                  name='amount'
                  id='amount'
                  autoComplete='current-password'
                  value={amount}
                  onChange={e => handleIngredientChange(e, i)}
                />
              </Grid>
              <Grid>
                <Box>
                  {ingredientList.length !== 1 && <IconButton onClick={() => handleRemoveIngredient(i)}>-</IconButton>}
                  {ingredientList.length - 1 === i && <IconButton onClick={handleAddIngredient}>+</IconButton>}
                </Box>
              </Grid>
            </Grid>
          );
        })}
        <Typography>Steps</Typography>
        {stepsList.map(({ stepName, time }, i) => {
          return (
            <Grid container spacing={2} key={i}>
              <Grid item>
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  id='stepName'
                  label='Step name'
                  name='stepName'
                  autoComplete='stepName'
                  autoFocus
                  value={stepName}
                  onChange={e => handleStepChange(e, i)}
                />
              </Grid>
              <Grid item>
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  label='Time in (min)'
                  name='time'
                  id='time'
                  autoComplete='current-password'
                  value={time}
                  onChange={e => handleStepChange(e, i)}
                />
              </Grid>
              <Grid>
                <Box>
                  {stepsList.length !== 1 && <IconButton onClick={() => handleRemoveStep(i)}>-</IconButton>}
                  {stepsList.length - 1 === i && <IconButton onClick={handleAddStep}>+</IconButton>}
                </Box>
              </Grid>
            </Grid>
          );
        })}
        <Typography>Photo</Typography>
        <ImageUpload setImageUrl={setImageURL} />
        <Grid item xs={12}>
          <Button color='primary' variant='contained' onClick={handleSaveRecipe}>
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
