import React from 'react' ; 
import { CgCloseO } from 'react-icons/cg'; 
import {
    Drawer,
    Text,
    Box,
    DrawerBody,
    Stack,
    Radio,
    Button,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    RadioGroup,
    Icon,
    useDisclosure,
    DrawerContent,
    DrawerCloseButton,
    Flex,
    Image,
  } from '@chakra-ui/react' ;
  import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
  

function Draw() {
    const btnRef = React.useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('left')
    const Section = [
      {
          id:1,
          title:"Home",
          path:"/"
      },
      {
          id:2,
          title:"Politics",
          path:"/politics"
      },
      {
          id:3,
          title:"Sports",
          path:"/sports"
      },
      {
          id:4,
          title:"India",
          path:"/india"
      },
      {
          id:5,
          title:"World",
          path:"/"
      },
      {
          id:6,
          title:"Business",
          path:"/"
      },
      {
          id:7,
          title:"Entertainment News",
          path:"/entertainment"
      },
      {
          id:8,
          title:"Cricket",
          path:"/cricket"
      },
      {
          id:9,
          title:"Tech",
          path:"/tech"
      },
      {
          id:10,
          title:"Cricket",
          path:"/cricket"
      },
      {
          id:11,
          title:"Health",
          path:"/"
      },
      {
          id:12,
          title:"Photos",
          path:"/"
      },
      {
          id:13,
          title:"Videos",
          path:"/"
      },
      {
          id:14,
          title:"Press Release",
          path:"/"
      },
      {
          id:15,
          title:"Firstculture",
          path:"/"
      },
      {
          id:16,
          title:"Crypto",
          path:"/crypto"
      }
  ] ; 
    return (
      <>
        
        <Icon pr={1} ref={btnRef}  onClick={onOpen} as={HamburgerIcon} color="white" w={9} h={6} m='auto'/>
        
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        
          <DrawerOverlay />
          <DrawerContent >
            {/* <CgCloseO/> */}
          <DrawerCloseButton color='grey' rounded='50%' />
          
            <DrawerHeader p={6} color='grey' borderBottomWidth='1px'></DrawerHeader>
            <DrawerBody>
              <Box 
                
              lineHeight={'45px'}>
                
                {Section.map((item,index)=>{
                  return <Box 
                  key={index}
                  borderBottomWidth='1px'
                  ><Text 
                  fontFamily={'arial'}
                  fontWeight={'700'} 
                  fontSize={'ms'} 
                  color={'black'} 
                  
                  ml={'28px'}><Link onClick={onClose} to={item.path}>{item.title}</Link></Text></Box>
                })}
                
              </Box>
              <Flex  gap="10px" mt='7px' mr='8px'> 
                    <Link to={'https://www.facebook.com/firstpostin'}><Image w={5} h={5} rounded='50%' src="https://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png"/></Link>
                    <Link to={'/'}><Image rounded="50%" h={5} w={5} src="data:image/png;base64,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"/></Link>
                    <Link to={'/'}><Image rounded="50%" h={5} w={5} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"/></Link>
                    <Link to={'/'}><Image rounded="50%" h={5} w={5} src="https://i.pinimg.com/originals/6a/42/04/6a4204f04496559aa27101d25983d0f0.png"/></Link>
                </Flex>
            </DrawerBody>
          </DrawerContent>
          
        </Drawer>
        
      </>
    )
  }
  export default Draw ; 
