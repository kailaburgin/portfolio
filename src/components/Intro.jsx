import { Box, Button, Flex, Heading, Text, Stack, VStack } from '@chakra-ui/react'
import React from 'react'

const Intro = () => {
  return (
    <Box maxW='996px' margin='auto' mt='100px' borderRadius='12px' overflow='hidden' boxShadow='-5px 5px 10px 0px RGBA(0, 0, 0, 0.36)'>
    <Flex>
        <Box bg='purple.100' textAlign='center' p='100px'>
            <Heading>kaila burgin</Heading>
            <Text mb='32px' mt='24px' fontSize='2xl'>Front End Wed Developer</Text>
            <Button w='240px'>Download Resume</Button>
        </Box>
        <Flex bg='purple.200' direction='column' textAlign='center' justifyContent='center' pl='240px' pr='240px'>
            <Heading mb='24px'>skills</Heading>
            <Stack>
                <Text>HTML</Text>
                <Text>CSS</Text>
                <Text>Javascript</Text>
                <Text>React</Text>
                <Text>Git</Text>
                <Text>Figma</Text>
            </Stack>
        </Flex>
    </Flex>
    </Box>
  )
}

export default Intro