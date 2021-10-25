import {} from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Layout
import { useTheme/*, styled*/} from '@material-ui/core/styles';
import {Avatar, Grid, Paper, TextField} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Button from '@material-ui/core/Button';

/*const styledTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'red',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
});*/

const useStyles = (theme) => ({
  root: {
    flex: '1 1 auto',
    background: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& > div': {
      margin: `${theme.spacing(1)}`,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    '& fieldset': {
      border: 'none',
      '& label': {
        marginBottom: theme.spacing(.5),
        display: 'block',
      },
    },
  },
  paper:{
    padding: 20,
    height:'40vh',
    width:'40vh'
  }
})

export default ({
  onUser
}) => {
  const styles = useStyles(useTheme())
  return (
    <div css={styles.root}>
      <div>
      <Grid>
        <Paper elevation={10} css={styles.paper}>
            <Grid align='center'>
              <Avatar><LockOutlinedIcon/></Avatar>
              <h2>Please log-in</h2>

              <fieldset>
                <TextField label='Username' placeholder='Enter username' fullWidth required >
                <input id="username" name="username"/>
                </TextField>
              </fieldset>

              <fieldset>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required>
                  <input id="password" name="password" type="password" />
                </TextField>
              </fieldset>

              <fieldset>
                <Button 
                  type="submit"
                  value="login"
                  variant="outlined"
                  fullWidth
                  onClick={ (e) => {
                    e.stopPropagation()
                    onUser({username: 'david'})
                  }}>
                  Login
                </Button>
              </fieldset>
              
            </Grid>

           
        </Paper>
      </Grid>
      </div>
    </div>
  );
}


/*
<div css={styles.root}>
<div>
  
  
  <fieldset>
      <Button 
        variant="contained"
        onClick={ (e) => {
          e.stopPropagation()
          onUser({username: 'david'})
        }}>
        <input type="submit" value="login" css={styles.login}/>
      </Button>
      
  </fieldset>
</div>
</div>*/
