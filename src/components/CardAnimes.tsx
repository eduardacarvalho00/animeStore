import {
  Flex, Heading, Box, Text, Image, Divider,
} from '@chakra-ui/react';
import { BsPersonCheck, BsStar, BsCheckCircle } from 'react-icons/bs';
import { MotionBox } from '../styles/animation';
import { CardInfo } from './CardInfo';

interface CardAnimesProps {
  nameAnime: string;
  nameAnimeJP: string;
  imageURL: string;
  description: string;
  age: string;
  rating: number;
  status: string;
  showType: string;
  dataStart: string;
  dataEnd: string;
  bgImageURL: string;
}

export function CardAnimes({
  description, imageURL, nameAnime, nameAnimeJP, age, rating, status, showType, dataEnd, dataStart,
} : CardAnimesProps) {
  return (
    <Flex align="center" direction="column" p="24px">
      <Heading fontWeight="medium" fontSize={[19, 24]}>
        {nameAnime}
      </Heading>
      <Text
        color="gray.500"
        fontWeight="medium"
        fontSize={[18, 20]}
        mb="13px"
      >
        {nameAnimeJP}
      </Text>
      <Flex direction={['column', 'row']} mt={[0, '30px']} alignItems="center">
        <Box>
          <MotionBox whileHover={{ scale: 1.1 }}>
            <Image src={imageURL} w={['230px', '400px']} />
          </MotionBox>
         
          <Text
            color="green.500"
            fontSize={[14, 16]}
            textAlign="center"
            mt={['12px', '24px']}
          >
            {dataStart}
          </Text>
          <Text
            color="red.500"
            fontSize={[14, 16]}
            textAlign="center"
          >
            {dataEnd}
          </Text>
        </Box>
        <Text textAlign="justify" w={['auto', '700px']} p={[0, '0px 30px']} fontSize={[17, 18]}>
          {description}
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
        alignItems="flex-start"
        flexWrap="wrap"
        alignContent="center"
        fontSize={[17, 18]}
      >
        <Text color="green.800">Subtype: <span style={{ color: '#1A1A1A' }}>{showType}</span></Text>
        <CardInfo text={age} icon={BsPersonCheck} />
        <CardInfo text={`${rating} / 100`} icon={BsStar} />
        <CardInfo text={status} icon={BsCheckCircle} />         
      </Flex>
      <Divider bg="gray.500" />
    </Flex>
  );
}
