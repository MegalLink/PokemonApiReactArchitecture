import React, { useState, SyntheticEvent } from 'react'
import { Box, Tabs, Tab } from '@mui/material'
import { TabPanel } from '../TabPanel/TabPanel'
import { TAB_CONTAIENR_LABELS } from '../../../shared/enums/components/tab-container-enum'
import { VARIANT, ORIENTATION } from '../../../shared/enums/mui-enum'
import { TabListPokemon } from './TabPokemonList/TabPokemonList'
import { TabMyPokemons } from './TabMyPokemons/TabMyPokemons'

function setTabProps(index: number) {
  return {
    id: `horizontal-tab-${index}`,
    'aria-controls': `horizontal-tabpanel-${index}`,
  }
}

export const TabContainer = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', height: 300 }}>
      <Tabs
        centered
        orientation={ORIENTATION.Horizontal}
        value={value}
        onChange={handleChange}
        aria-label='tabs pokemon'
        sx={{ borderRight: 1, borderColor: 'divider' }}
        variant={VARIANT.FullWidth}
      >
        <Tab label={TAB_CONTAIENR_LABELS.PokemonList} {...setTabProps(0)} />
        <Tab label={TAB_CONTAIENR_LABELS.MyPokemons} {...setTabProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <TabListPokemon />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TabMyPokemons />
      </TabPanel>
    </Box>
  )
}
