import {
  Flex, FlexProps, Box, BoxProps, 
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const MotionFlex = motion<FlexProps>(Flex);
export const MotionBox = motion<BoxProps>(Box);
