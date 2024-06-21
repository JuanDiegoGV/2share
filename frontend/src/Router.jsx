// hooks
import { useAtom } from 'jotai'

// context/store
import { theme as ThemeStore } from './store/Theme'
import { user as UserStore } from './store/User'

// components/views
// libraries
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'

// createds
import Base from './layouts/Base'
import Login from './views/Login'
import Home from './views/Home'
import NotFound from './views/NotFound'
import UserProduct from './views/UserProduct'
import UserProductsCreate from './views/UserProductsCreate'
import Register from './views/Register'

function Router() {

  // hooks
  const [themeStore] = useAtom(ThemeStore)
  const [userStore] = useAtom(UserStore)

  // others
  const theme = createTheme(themeStore)

  return (
    <ThemeProvider theme={theme}>
      {!userStore
        ? <Routes>
          {/* Login */}
          <Route path='login' element={<Login />} />
          {/* Register */}
          <Route path='register' element={<Register />} />
          {/* 404 */}
          <Route path='*' element={<NotFound />} />
        </Routes>
        : <Base>
          <Routes>
            {/* home */}
            <Route index element={<Home />} />
            {/* userProducts */}
            <Route path='create' element={<UserProductsCreate />} />
            {/* userProducts */}
            <Route path=':id' element={<UserProduct />} />
            {/* 404 */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Base>
      }
    </ThemeProvider >
  )
}

export default Router
