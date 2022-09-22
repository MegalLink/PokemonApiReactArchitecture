import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Chip from '@mui/material/Chip'
import { HEADER_LABELS } from '../../shared/enums/components/header-enum'
import { SIZE, MUI_COLOR } from '../../shared/enums/mui-enum'

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ mb: 2 }}>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            {HEADER_LABELS.AppTitle}
          </Typography>
          <Chip label={'TODO'} color={MUI_COLOR.Warning} />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
