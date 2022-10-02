import React, { useState } from 'react'
import { CgCloseO } from 'react-icons/cg';
import { Search2Icon,CloseIcon} from '@chakra-ui/icons'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,

    DrawerHeader,
    DrawerOverlay,
    useDisclosure,
    Button,
    Input,
    Icon,
    DrawerContent,
    DrawerCloseButton,
    Box,
  } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function SearchDrawer() {
  const navigate = useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('top')
    const [value,setValue] = useState("") ; 
    
    
    // useEffect(()=>{
    //   handleKeyDown() ; 
    // },[])
    
    const handleKeyDown = (e)=>{
      if(e.key === "Enter"){
        console.log(value) ; 
        navigate(`news/${value}`)
      }
    }
    console.log(value)
    return (
      <>
        
        <Icon onClick={onOpen} m='auto' color='white' as={isOpen?CgCloseO:Search2Icon} cursor='pointer'/>
        
        <Drawer  size={'md'} placement={placement} onClose={onClose} isOpen={isOpen}>
          
          <DrawerContent w='85%' bgColor='black'>
          
            <DrawerBody  w='68%' display='flex' m='auto' color='white' bgColor='black'>
              {/* <Link>
              
              </Link> */}
                <Input  id="one" onChange={((e)=>setValue(e.target.value))} value={value} onKeyDown={handleKeyDown}  textAlign='left' size={'xs'} p='12px' placeholder="Search"/>
              {/* <Box>
                <Link to={`news/${value}`}></Link>
              </Box> */}
              {/* <Box>
              <Link to={`news/${value}`}>
                
                </Link>
              </Box> */}
            </DrawerBody>
          </DrawerContent> 
          
        </Drawer>
      </>
    )
  }
  export default SearchDrawer ; 
