import React, { useState, MouseEvent, ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

type Props = {
  children: ReactNode;
};

export function SimplePopover({ children }: Props) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box>
      <IconButton aria-describedby={id} onClick={handleClick} color='inherit'>
        <PermIdentityIcon fontSize='large' />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box display='flex' width='100%'>
          {children}
        </Box>
      </Popover>
    </Box>
  );
}
