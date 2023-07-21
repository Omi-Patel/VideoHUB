import { Container, Heading, VStack, Input, Button, Text, Avatar } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack alignItems={'stretch'} spacing={'8'} w={['full', '96']} m={'auto'} my={'16'}>

          <Heading textAlign={'center'}>VIDEO HUB!</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} className='signup anime' border={'2px solid purple'} />

          <Input placeholder='Enter Name' type='text' required
            focusBorderColor={'purple.500'} />

          <Input placeholder='Enter Email' type='email' required
            focusBorderColor={'purple.500'} />

          <Input placeholder='Enter Password' type={'password'} required
            focusBorderColor={'purple.500'} />

          

          <Button colorScheme='purple' type='submit'>
            Sign Up
          </Button>

          <Text textAlign={'right'}>
            Already Sign Up? {' '}
            <Button variant={'link'} colorScheme='purple'>
              <Link to={'/login'}>
                Sign In
              </Link>
            </Button>
          </Text>

        </VStack>
      </form>
    </Container>
  )
}

export default Signup
