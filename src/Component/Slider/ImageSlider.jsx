import React, { useState } from 'react'
import {Box,Text} from '@chakra-ui/react' ; 
function ImageSlider({data,img1,img2,img3}) {
    
    return (
        <div style={{marginTop:"30px"}}>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            
            <div  className=" carousel-inner">
                <div  className="carousel-item active" data-bs-interval="10000">
                <img style={{maxHeight:"390px",minHeight:"400px"}} src={img1.urlToImage?img1.urlToImage:'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'} className=" w-100" alt="..."/>

                <div  className="  carousel-caption ">
                    <Box bgColor='white'>
                        <Text 
                        
                        fontFamily={"fantasy"} 
                        textDecoration={'underline'} 
                        textDecorationColor='yellow.300' 
                        textDecorationThickness={3} 
                        textAlign={'left'}>
                            TOP HEADLINE</Text>
                        <Text 
                        fontWeight={'700'} 
                        fontFamily={"Playfair Display"} 
                        fontSize={'xl'}
                        textAlign={'left'}>{img1.title}</Text>
                    </Box>
                </div>
                </div>
            <div className="carousel-item" data-bs-interval="10000">
                <img style={{maxHeight:"390px",minHeight:"400px" }} src={img2.urlToImage?img2.urlToImage:'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'} className=" w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <Box width='100%' bgColor='white'>
                        <Text
                        fontFamily={"fantasy"}
                        textDecoration={'underline'} 
                        textDecorationColor='yellow.300' 
                        textDecorationThickness={3} 
                        textAlign={'left'}>TOP HEADLINE</Text>
                        <Text 
                        
                        fontWeight={'700'}  
                        fontFamily={"Playfair Display"} 
                        textAlign={'left'} 
                        fontSize={'2xl'}>
                            {img2.title}</Text>
                    </Box>
                </div>
                </div>
                <div style={{maxHeight:"390px"}} data-bs-interval="10000" className="carousel-item">
                <img style={{maxHeight:"390px",minHeight:"400px"}} src={img3.urlToImage?img3.urlToImage:'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'} className="w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <Box bgColor='white'>
                        <Text 
                        textDecoration={'underline'} 
                        textDecorationColor='yellow.300' 
                        textDecorationThickness={3} 
                        
                        fontFamily={"fantasy"}   
                        textAlign={'left'}>TOP HEADLINE</Text>
                        <Text 
                        fontWeight={'700'} 
                        
                        fontFamily={"Playfair Display"} 
                        fontSize={'2xl'}
                        // style={{font: 700 24px/27px 'Playfair Display',sans-serif}}
                        textAlign={'left'}>{img3.title}</Text>
                    </Box>
                </div>
                </div>
                <Box>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="text-danger active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                </Box>
            </div>
        </div>
    
    </div>
    )
    

  
  
}

export default ImageSlider