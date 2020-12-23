import React, { ChangeEvent, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Button, createStyles, FormControl, InputLabel, makeStyles, MenuItem, Select, Theme } from '@material-ui/core';
import { ImageUpload } from '../shared/ImageUpload';

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

  const handleChangeImage = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    console.log(file);
    setFile(URL.createObjectURL(file));
  };

  const [age, setAge] = useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };
  return (
    <form>
      <Typography variant='h6' gutterBottom>
        New Recipe
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField required id='title' name='title' label='Title' fullWidth autoComplete='given-name' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl className={classes.formControl}>
            <InputLabel id='recipe-category'>Category</InputLabel>
            <Select labelId='recipe-category' id='recipe-category' value={age} onChange={handleChange}>
              <MenuItem value={'Meat'}>Meat</MenuItem>
              <MenuItem value={'Fishs'}>Fishs</MenuItem>
              <MenuItem value={'Soups'}>Soups</MenuItem>
              <MenuItem value={'Vegie'}>Vegie</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ImageUpload />
        </Grid>
        <Grid item xs={12}>
          <Button color='primary' variant='contained'>
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
