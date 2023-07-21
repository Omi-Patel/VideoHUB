import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'
import '../index.css'

const headingOption = {
    pos: "absolute",
    left: "50%",
    top: '50%',
    transform: "translate(-50%, -50%)",
    textTransform: "uppercase",
    p: "4",
    size: "4xl"
}

const Home = () => {
    return (
        <Box>
            <MyCarousel className={'slider'} />


            <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
                <Heading textTransform={'uppercase'} py={'2'} w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>
                    Services
                </Heading>

                <Stack
                    h={'full'}
                    p={'4'}
                    alignItems={'center'}
                    direction={['column', 'row']}
                >
                    <Image className='anime' src={img5} h={['40', '400']} my={'5'} filter={'hue-rotate(130deg)'}/>

                    <Text letterSpacing={'widest'} lineHeight={'190%'} p={['auto', '16']} textAlign={'center'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Ultricies integer quis auctor elit sed vulputate mi. Neque convallis a cras semper auctor neque vitae tempus. Sem fringilla ut morbi tincidunt augue interdum velit. Enim neque volutpat ac tincidunt vitae. Morbi tristique senectus et netus et malesuada fames. Amet commodo nulla facilisi nullam vehicula ipsum a. Hendrerit dolor magna eget est. Libero nunc consequat interdum varius sit amet mattis.
                    </Text>
                </Stack>
            </Container>
        </Box>
    )
}

const MyCarousel = () => (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>

        <Box w='full' h={'100vh'}>
            <Image src={img1} className='img1' />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOption}>Watch The Future</Heading>
        </Box>

        <Box w='full' h={'100vh'}>
            <Image src={img2} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOption}>Future Is Gaming</Heading>
        </Box>

        <Box w='full' h={'100vh'}>
            <Image src={img3} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOption}>Gaming on Console</Heading>
        </Box>

        <Box w='full' h={'100vh'}>
            <Image src={img4} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOption}>Night Life is Cool</Heading>
        </Box>

    </Carousel>
)

export default Home
