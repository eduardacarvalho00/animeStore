/* eslint-disable react/no-children-prop */
import { SearchIcon } from '@chakra-ui/icons';
import {
  Box, Flex, Heading, Image, Input, InputGroup, InputRightElement, Text,
} from '@chakra-ui/react';
import { BsPersonCheck, BsStar, BsCheckCircle } from 'react-icons/bs';
import Logo from './assets/logo.gif';
import image from './assets/image 1.png';
import { CardInfo } from './components/CardInfo';

function App() {
  return (
    <Box>
      <Flex
        as="header"
        w="100%"
        h="200px"
        bg="blue.800"
        direction="column"
        align="center"
      >
        <Image src={Logo} w="138px" h="138px" />

        <InputGroup w={['243px', '369px']} h="35px" bg="gray.200" borderRadius="20px">
          <InputRightElement
            pointerEvents="none"
            children={<SearchIcon color="gray.800" />}
          />
          <Input
            type="text"
            placeholder="search for anime..."
            borderRadius="20px"
            _placeholder={{ opacity: 0.7, color: 'gray.500' }}
            focusBorderColor="transparent"
           />
        </InputGroup>
      </Flex>
      
      <Flex align="center" direction="column" mt={['36px', '101px']} p="24px">
        <Heading fontWeight="medium" fontSize={[19, 24]}>
          Cowboy bebop
        </Heading>
        <Text
          color="gray.500"
          fontWeight="medium"
          fontSize={[18, 20]}
          mb="13px"
        >
          カウボーイビバップ"
        </Text>

        <Flex direction={['column', 'row']} mt={[0, '30px']} alignItems={['center', 'initial']}>
          <Box>
            <Image src={image} w={['230px', '400px']} />
            <Text
              color="gray.500"
              fontSize={[14, 16]}
              textAlign="center"
              mt={['12px', '24px']}
            >
              1998-04-03   -   1999-04-24
            </Text>
          </Box>

          <Text textAlign="justify" w={['auto', '700px']} p={[0, '0px 30px']} fontSize={[17, 18]}>
            In the year 2071, humanity has colonized several of the planets and moons of the solar system leaving the now uninhabitable surface of planet Earth behind. The Inter Solar System Police attempts to keep peace in the galaxy, aided in part by outlaw bounty hunters, referred to as \"Cowboys\". The ragtag team aboard the spaceship Bebop are two such individuals.
            .\nMellow and carefree Spike Spiegel is balanced by his boisterous, pragmatic partner Jet Black as the pair makes a living chasing bounties and collecting rewards. Thrown off course by the addition of new members that they meet in their travels—Ein, a genetically engineered, highly intelligent Welsh Corgi; femme fatale Faye Valentine, an enigmatic trickster with memory loss; and the strange computer whiz kid Edward Wong—the crew embarks on thrilling adventures that unravel each member's dark and mysterious past little by little. \nWell-balanced with high density action and light-hearted comedy, Cowboy Bebop is a space Western classic and an homage to the smooth and improvised music it is named after.\n\n(Source: MAL Rewrite)
          </Text>
        </Flex>
       
        <Flex
          borderRadius={10}
          border="1px solid"
          borderColor="gray.300"
          minW={['254px', '596px']}
          minH={['180px', '137px']}
          mt="32px"
          mb="30px"
          direction="column"
          p="26px 20px"
          lineHeight={2}
          align="center"
          fontSize={[17, 18]}
        >
          <Text color="green.800">Subtype: <span style={{ color: '#1A1A1A' }}>TV</span></Text>
          <CardInfo text="17+ (violence & profanity)" icon={BsPersonCheck} />
          <CardInfo text="Average Ranking: 81.98" icon={BsStar} />
          <CardInfo text="Finished" icon={BsCheckCircle} />         
       </Flex>
      </Flex>
    </Box>
  );
}

export default App;
