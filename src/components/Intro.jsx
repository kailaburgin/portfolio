import { Box, Button, Flex, Heading, Text, Stack, VStack, Image, HStack } from '@chakra-ui/react'
import React from 'react'
import { CSSIcon } from '../assets/CSSIcon'
import { HTMLIcon } from '../assets/htmlicon'
import { JavascriptIcon } from '../assets/JavascriptIcon'
import { ReactIcon } from '../assets/ReactIcon'
import { GitIcon } from '../assets/GitIcon'
import { FigmaIcon } from '../assets/FigmaIcon'

const Intro = () => {
  return (
    <Box color='brand.500' maxW='1096px' margin='auto' mt='100px' borderRadius='12px' overflow='hidden' boxShadow='-5px 5px 10px 0px rgba(51, 41, 36, 0.40)'>
    <Flex>
        <Box bg='brand.100' textAlign='center' p='100px'>
            <Heading>kaila burgin</Heading>
            <Text mb='32px' mt='24px' fontSize='2xl'>Front End Web Developer</Text>
            <Button color='brand.300' w='240px'>Download Resume</Button>
        </Box>
        <Flex bg='brand.300' direction='column' textAlign='center' justifyContent='center' pl='280px' pr='280px'>
            <Heading mb='24px'>skills</Heading>
            <Stack>
                <Flex>
                <HTMLIcon boxSize='6' mr='12px'/>
                <Text>HTML</Text>
                </Flex>
                <Flex>
                <CSSIcon boxSize='6' mr='12px'/>
                <Text>CSS</Text>
                </Flex>
                <Flex>
                <JavascriptIcon boxSize='6' mr='12px'/>
                <Text>Javascript</Text>
                </Flex>
                <Flex>
                <ReactIcon boxSize='6' mr='12px'/>
                <Text>React</Text>
                </Flex>
                <Flex>
                <GitIcon boxSize='6' mr='12px'/>
                <Text>Git</Text>
                </Flex>
                <Flex>
                <FigmaIcon boxSize='6' mr='12px'/>
                <Text>Figma</Text>
                </Flex>
            </Stack>
        </Flex>
    </Flex>
    </Box>
  )
}

export default Intro