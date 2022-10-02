import { TagLabel, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {Box,Button,Collapse,Text,Input,FormControl,FormLabel,FormHelperText} from '@chakra-ui/react'
function EmailSubscribe() {
    const { isOpen, onToggle } = useDisclosure()
  
    return (
      <div style={{marginTop:'70px',border:'0.5px solid #C8C8C8',padding:"2px"}}>
        <Box>
            <Text textAlign='left' fontSize={'xl'} ml='15px' fontWeight={'bold'} fontFamily={'arial'}>Subscribe to our foreign policy newsletter.</Text>
            <Text lineHeight={1.5} fontFamily={'arial'} fontSize={'sm'} textAlign='left' ml='15px' color={'grey'}>Sign up for a weekly curated briefing of the most important strategic affairs stories from across the world.</Text>
        </Box>
       <FormControl ><FormLabel ml={'15px'}>Enter Email</FormLabel></FormControl> 
        <Input w='90%' border='0.1px solid grey' placeholder='Enter Email'/>
        <Button color='white' _hover={'yellow.350'} mt={'5px'} bgColor={'yellow.300'} size='sm' onClick={onToggle}>Subscriber</Button>
       
        <Box>
        <Collapse in={isOpen} animateOpacity>
          <Box
            color='yellow.400'
            mt='4'
            fontWeight={'bold'}
            rounded='md'
            shadow='md'
          >
            <Text>Thank you for subscribing!</Text>
          </Box>
        </Collapse>
        </Box>
      </div>
    )
  }

export default EmailSubscribe