// hooks
import { useMutation, useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'

// api
import { Get, Delete, Put } from '../api/userProducts'

// components
// libraries
import { Grid, Button, Typography, CircularProgress, FormControl, Select, MenuItem, Box } from '@mui/material'

const UserProduct = () => {

  // hooks
  const { id } = useParams()

  // hooks
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()

  // query
  const { data: userProduct, isLoading, isError, refetch } = useQuery(['userProducts', id], () => Get(id))
  const { mutate: mutatePut, isLoading: isLoadingMutatePut } = useMutation((e) => Put(id, e), {
    onSettled: () => {
      refetch()
    }
  })
  const { mutate, isLoading: isLoadingMutate } = useMutation(() => Delete(id), {
    onSettled: () => {
      navigate('/')
    }
  })

  if (isLoading) {
    return (
      <Grid container spacing={0}>
        <CircularProgress />
      </Grid>
    )
  }

  if (isError) {
    return (
      <Grid container spacing={0}>
        <Typography variant="h3">Error</Typography>
      </Grid>
    )
  }

  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        {
          userProduct?.data ?
            <Grid container spacing={0} py={5}>
              <Grid item xs={12}><Typography variant="h5"><Typography variant="inherit" component='span' fontWeight='bold'>ID:</Typography> {userProduct.data.id}</Typography></Grid>
              <Grid item xs={12}><Typography variant="h5"><Typography variant="inherit" component='span' fontWeight='bold'>NAME:</Typography> {userProduct.data.name}</Typography></Grid>
              <Grid item xs={12}><Typography variant="h5"><Typography variant="inherit" component='span' fontWeight='bold'>STATE:</Typography> {userProduct.data.state}</Typography></Grid>
            </Grid>
            : <Typography variant="h5">Not product</Typography>
        }
      </Grid>
      <Grid item xs={12}>
        <form onSubmit={handleSubmit(mutatePut)}>
          <FormControl component="fieldset" fullWidth>
            <Select label="State" error={errors.state} helperText={errors.state?.message} {...register('state')}>
              <MenuItem value={'shopping'}>shopping</MenuItem>
              <MenuItem value={'buying in store'}>buying in store</MenuItem>
              <MenuItem value={'putting in basket'}>putting in basket</MenuItem>
            </Select>
            <Box mt={5}>
              <Button fullWidth variant="contained" color="success" type='submit' disabled={isLoadingMutatePut}>
                Change state
              </Button>
            </Box>
          </FormControl>
        </form>
      </Grid>
      <Grid item xs={12} mt={5}>
        <Button variant="contained" color="error" fullWidth disabled={isLoadingMutate} onClick={() => mutate()}>
          Remove
        </Button>
      </Grid>
    </Grid>
  )
}

export default UserProduct