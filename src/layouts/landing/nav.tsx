import React from 'react';
import {Link} from 'react-router-dom';

import {
  Box,
  HStack,
  Spacer,
  Heading,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';

import ThemeSwitcher from '~/theme';

const Component = (props) => (
  <HStack 
    as="nav" 
    w="full" 
    h="50px" 
    align="flex-start" 
    alignItems="center" 
    alignContent="center"
    my={8}
    className="landing-nav">

  <Heading size="lg" className="branding" fontSize="24px" fontWeight="700">
    Tessatalk
  </Heading>

  <Spacer/>
</HStack>

);

export default Component;