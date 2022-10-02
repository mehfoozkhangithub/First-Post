import { Box,Text } from "@chakra-ui/react";
import { useState } from "react"
import { useEffect } from "react"
import { getData2 } from "../Api/api"



function MostRead(){
    const [data,setData] = useState([]) ; 
    const [count,setCount] = useState(1) ;
    useEffect(()=>{
        getData2()
        .then(res=>{
            setData(res.data.articles) ; 
            // console.log(res) ; 
        })
    },[]) ; 
   
    return (
        <div >
            <Box >
                <Text textAlign={'left'}  fontSize='2xl'  ml='15px'fontWeight={'bold'} fontFamily={'arial'} textDecoration='underline' textDecorationColor='yellow.300' textDecorationThickness={3} fontStyle={'italic'}>Most Read</Text>
            </Box>
            <Box  border={'1px solid #C8C8C8'}>
                {data?.map((item,i)=>{
                    
                    return <Box key={i}  p='10px' display={'flex'} borderWidth={'1px'}>
                        <Box mt='-20px' w='10%'>
                            <Text  textAlign={'left'} fontSize={'3xl'} fontWeight={'bold'} fontFamily={'Playfair Display'}>{i+1}</Text>
                        </Box>
                        <Box w='90%'>
                            <Text lineHeight={7} textAlign="left" fontFamily={'Playfair Display'} fontSize={'xl'} fontWeight={'700'}>{item.title}</Text>
                            <Text color='blackAlpha.900' textAlign={'left'} fontSize={'small'}>{item.description}</Text>
                        </Box>
                        
                    </Box>
                })}
            </Box>
        </div>
    )
}
export default MostRead ; 