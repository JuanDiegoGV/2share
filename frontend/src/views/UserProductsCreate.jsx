// hooks
import { useForm } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'

// api
import { Post } from '../api/userProducts'
import { Gets } from '../api/products'

// components
// libraries
import { Box, Button, CircularProgress, FormControl, Grid, MenuItem, Select, Typography } from '@mui/material'

const UserProductsCreate = () => {

  // hooks
  const { register, handleSubmit, formState: { errors } } = useForm()

  // query
  const { data: products, isLoading, isError } = useQuery(['products'], () => Gets())
  const { mutate, isLoading: isLoadingMutate } = useMutation(Post)

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
      <Grid item xs={12} textAlign='center' mb={5}>
        <Typography variant="h3">Add product</Typography>
      </Grid>
      <Grid item xs={12}>
        <form onSubmit={handleSubmit(mutate)}>
          <FormControl component="fieldset" fullWidth>
            <Select label="Product" error={errors.productId} helperText={errors.productId?.message} {...register('productId')}>
              {products?.data?.length > 0 ?
                products?.data.map((product, index) => (
                  <MenuItem key={index} value={product.id}>{product.name}</MenuItem>
                ))
                : <MenuItem disabled>Empty</MenuItem>
              }
            </Select>
            <Box mt={5}>
              <Button fullWidth variant="contained" color="success" type='submit' disabled={isLoadingMutate}>
                Add product
              </Button>
            </Box>
          </FormControl>
        </form>
      </Grid>
    </Grid>
  )
}

export default UserProductsCreate