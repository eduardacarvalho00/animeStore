/* eslint-disable react/no-children-prop */
import { SearchIcon } from '@chakra-ui/icons';
import {
  Box, Flex, Image, Input, InputGroup, InputRightElement, 
} from '@chakra-ui/react';
import Logo from './assets/logo.gif';

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
    </Box>
  );
}

export default App;
