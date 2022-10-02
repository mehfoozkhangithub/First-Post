
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function CurrentPage({pageName}) {
  return (
    <div>
        <Box mb={30} w={'75%'} m={'auto'}>
                <Text fontFamily={'arial'} color='black' textAlign={'left'}><Link color={'black'} to={'/'}>Latest News</Link> <ChevronRightIcon/> <Link color={'black'} to={'/india'}>{pageName}</Link></Text>
            </Box>
    </div>
  )
}

export default CurrentPage