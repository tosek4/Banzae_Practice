import * as React from 'react'

import { BottomNavigation } from '@mui/material'
import {
  SportsScoreRounded,
  SportsBaseballRounded,
  SportsHandballRounded,
} from '@mui/icons-material'
import { Box, List } from '@mui/material'

export const LabelNavigation = () => {
  return (
    <BottomNavigation>
      <Box>
        <List>
          <SportsScoreRounded />
          <SportsBaseballRounded />
          <SportsHandballRounded />
        </List>
      </Box>
    </BottomNavigation>
  )
}
