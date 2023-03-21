/* eslint-disable react/no-children-prop */
import { SearchIcon } from '@chakra-ui/icons';
import {
  Box, Center, Flex, Image, Input, InputGroup, InputRightElement, Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import Logo from './assets/logo.gif';
import { useSearchAnime } from './queries/useSearchAnime';
import { CardAnimes } from './components/CardAnimes';

interface CardAnimes{
  id: number;
  attributes:{
    canonicalTitle: string;
    ageRatingGuide: string;
    description: string;
    endDate: string;
    startDate: string;
    showType: string;
    status: string;
    titles:{
      ja_jp: string;
    }
  }
}

function App() {
  const [animeName, setAnimeName] = useState('');
  const onChangeInput = (text: string) => {
    setAnimeName(text);
  };  
  const { data } = useSearchAnime(animeName);
  
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
            value={animeName}
            onChange={(event) => onChangeInput(event.target.value)}
            type="text"
            placeholder="search for anime..."
            borderRadius="20px"
            _placeholder={{ opacity: 0.7, color: 'gray.500' }}
            focusBorderColor="transparent"
           />
          
        </InputGroup>
      </Flex>
     
      {data?.data.length === 0 
        ? <Center w="100vw" h="70vh">
            <Text as="b" fontSize={30} color="blue.800">What about starting by researching an anime?</Text>
          </Center> 
        : data?.data.map((anime) => (
         <CardAnimes
           key={anime.id}
           nameAnime={anime.attributes.canonicalTitle}
           description={anime.attributes.description}
           imageURL={anime.attributes.posterImage.large}
           age={anime.attributes.ageRatingGuide}
           nameAnimeJP={anime.attributes.titles.ja_jp} 
           status={anime.attributes.status}
           rating={anime.attributes.averageRating}
           showType={anime.attributes.showType}
           dataEnd={anime.attributes.endDate}
           dataStart={anime.attributes.startDate}
           bgImageURL={anime.attributes.coverImage?.tiny}
          />
        ))}
    </Box>
  );
}

export default App;
