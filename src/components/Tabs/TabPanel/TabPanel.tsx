import * as React from 'react'
import Box from '@mui/material/Box'
import { TabPanelPropsI } from '../../../shared/interfaces/components/tab-panel.interface'

export const TabPanel = (props: TabPanelPropsI) => {
  const { children, value, index, ...other } = props
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`horizontal-tabpanel-${index}`}
      aria-labelledby={`horizontal-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ mt: 2, p: 2 }}>{children}</Box>}
    </div>
  )
}
