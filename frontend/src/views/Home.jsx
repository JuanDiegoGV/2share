// hooks
import { useState } from 'react'
import { useQuery } from 'react-query'

// api
import { Gets } from '../api/userProducts'

// components
// libraries
import { Grid, Button, Typography, List, ListItem, ListItemButton, Pagination, CircularProgress } from '@mui/material'
import { Link } from 'react-router-dom'


const Home = () => {
  // states
  const [options, setOptions] = useState({
    page: 0
  })

  // query
  const { data: userProducts, refetch, isLoading, isError } = useQuery(['userProducts', options], () => Gets(options))

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
      <Grid item xs={8}>
        <Link to='/create'>
          <Button variant="contained" color="success" fullWidth>
            Add products to list
          </Button>
        </Link>
      </Grid>
      <Grid item xs={4} display='flex' justifyContent='end'>
        <Button variant="text" color="primary" onClick={() => refetch()}>
          Refresh
        </Button>
      </Grid>
      <Grid item xs={12}>
        <List>
          {
            userProducts?.data?.length > 0 ?
              userProducts?.data.map((product, index) => (
                <ListItem key={index}>
                  <Link to={`${product.id}`} style={{ width: '100%' }}>
                    <ListItemButton>
                      <Grid container spacing={0} py={5}>
                        <Grid item xs={2}><Typography variant="h5">{product.id} - </Typography></Grid>
                        <Grid item xs={6}><Typography variant="h5" textTransform='uppercase'>{product.name}</Typography></Grid>
                        <Grid item xs={4}><Typography variant="h5" textTransform='uppercase' textAlign='center'>{product.state}</Typography></Grid>
                      </Grid>
                    </ListItemButton>
                  </Link>
                </ListItem>
              ))
              : <Typography variant="h5">Empty</Typography>
          }
        </List>
      </Grid>
      <Grid item xs={12} display='flex' justifyContent='center' mt={2}>
        <Pagination
          shape='rounded'
          page={options.page + 1}
          onChange={async (e, v) => {
            await setOptions({ ...options, page: v - 1 })
            refetch()
          }} count={userProducts ? userProducts.totalPages : 0} color="primary" />
      </Grid>
    </Grid>
  )
}

export default Home