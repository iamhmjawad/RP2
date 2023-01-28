import React from 'react'
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode()
  // const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  return (
    <IconButton
      // size="md"
      // fontSize="lg"
      // aria-label={`Switch to ${text} mode`}
      // marginLeft="2"

      // to place it on the top right corner
      // 1 unit = 4px (default)
      zIndex={1}
      pos={'fixed'}
      top="4"
      right="4"

      variant="ghost"
      color="current"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  )
}

export default ColorModeSwitcher