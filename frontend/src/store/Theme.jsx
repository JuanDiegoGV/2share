import { atom } from 'jotai'
import { createTheme } from '@mui/material/styles'

const { palette } = createTheme()

const groceryPrimary = '#014C8E'
const grocerySecondary = '#FFC72C'
const groceryInfo = '#F5F5F6'

export const theme = atom({
  palette: {
    groceryPrimary: palette.augmentColor({
      color: {
        main: groceryPrimary
      }
    }),
    grocerySecondary: palette.augmentColor({
      color: {
        main: grocerySecondary
      }
    }),
    groceryInfo: palette.augmentColor({
      color: {
        main: groceryInfo
      }
    })
  }
})
