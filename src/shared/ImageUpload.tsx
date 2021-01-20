import React, { useState } from 'react';

import { createStyles, Fab, Grid, makeStyles, Theme } from '@material-ui/core';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import { blue } from '@material-ui/core/colors';

export type Optional<T> = T | null;

type ImageUploadState = {
  file: Optional<File>;
  imagePreviewUrl: string;
};

type Props = {
  setImageUrl: (imageUrl: string) => void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    input: {
      display: 'none',
    },
    button: {
      color: blue[900],
      margin: 10,
    },
  }),
);

export function ImageUpload({ setImageUrl }: Props) {
  const classes = useStyles();
  const [uploadState, setUploadState] = useState<ImageUploadState>({
    file: null, // initial, search, gallery, uploaded
    imagePreviewUrl: '',
  });

  const handleUploadClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log();
    if (!event.target.files) return;
    const file = event.target.files[0];
    const reader: FileReader = new FileReader();

    reader.onloadend = () => {
      setUploadState({
        ...uploadState,
        file: file,
        imagePreviewUrl: reader.result as string,
      });
    };

    reader.readAsDataURL(file);
    setImageUrl(uploadState.imagePreviewUrl);
  };

  return (
    <Grid container alignItems='center'>
      <input accept='image/*' className={classes.input} id='contained-button-file' multiple type='file' onChange={handleUploadClick} />
      <label htmlFor='contained-button-file'>
        <Fab component='span' className={classes.button}>
          <AddPhotoAlternateIcon />
        </Fab>
      </label>
      {uploadState.imagePreviewUrl && (
        <Grid>
          <img alt='recipe-image' width={150} height={150} src={uploadState.imagePreviewUrl} />
        </Grid>
      )}
    </Grid>
  );
}
