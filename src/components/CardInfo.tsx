import { Flex, Text, Icon } from '@chakra-ui/react';

interface CardInfoProps{
  icon: any;
  text: string;
}

export function CardInfo({ icon, text }: CardInfoProps) {
  return (
    <Flex align="center">
      <Icon as={icon} color="green.800" boxSize={[6, 7]} />
      <Text ml="10px">{text}</Text>
    </Flex>
  );
}
