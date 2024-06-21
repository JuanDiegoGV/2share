// hooks
import { useForm } from 'react-hook-form'
import useSession from './../hooks/useSession'

// components
// libraries
import { Box, Grid, FormControl, TextField, Button, Typography } from '@mui/material'

// others
import bgLogin from '../images/bg.jpg'
import { Link } from 'react-router-dom'

const Login = () => {
  // hooks
  const { login } = useSession()
  const { register, handleSubmit, formState: { errors } } = useForm()

  return (
    <Grid container spacing={0} height='100%'>
      <Grid item xs={12} lg={7} sx={{ display: { xs: 'none', lg: 'block' } }} style={{ backgroundImage: `url(${bgLogin})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
      </Grid>
      <Grid item xs={12} lg={5} sx={{ paddingX: { xs: '20px', md: 'none' }, height: { xs: '70%', lg: '100%' } }} display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
        <Box width='100%' sx={{ height: '10%' }} textAlign='center' display='flex' justifyContent='center' alignItems='center'>
          <Typography variant="h3">Login</Typography>
        </Box>
        <Box sx={{ width: { xs: '80%', lg: '100%' } }}>
          <form onSubmit={handleSubmit(login)}>
            <FormControl component="fieldset" fullWidth>
              <TextField label="Username" type='text' margin='dense' error={errors.username} helperText={errors.username?.message}
                {...register('username', { required: { value: true, message: 'Field Username is required' } })} />
              <TextField label="Password" type='password' margin='dense' error={errors.password} helperText={errors.password?.message}
                {...register('password', { required: { value: true, message: 'Field Password is required' } })} />
              <Box mt={5}>
                <Button fullWidth variant="contained" color="success" type='submit'>
                  login
                </Button>
              </Box>
              <Box mt={5} textAlign='center' color='blue'>
                <Link to='/register'>Click here to register</Link>
              </Box>
            </FormControl>
          </form>
        </Box>
      </Grid >
    </Grid >
  )
}

export default Login
