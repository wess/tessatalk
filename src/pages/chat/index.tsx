import React from 'react';

import {
  HStack,
  VStack,
  Box
} from '@chakra-ui/react';

const Component = (_props) => {
  return (
    <HStack>
      <VStack>
        <Box>here</Box>
      </VStack>

      <VStack>
        <Box>here</Box>
      </VStack>
    </HStack>
  );
}

export default Component;