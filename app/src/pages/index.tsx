import { Box, chakra } from '@chakra-ui/react'
import React from 'react'

export default function Home() {
  return (
    <Box>
      <chakra.h1>Hello Jest!</chakra.h1>
      <button data-test-id="hoge-button">hoge</button>
    </Box>
  )
}
