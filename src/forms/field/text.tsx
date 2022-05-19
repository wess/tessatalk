//
// text.tsx
// asylum
// 
// Author: Wess Cope (me@wess.io)
// Created: 10/22/2021
// 
// Copywrite (c) 2021 Wess.io
//

import React from "react";

import {
   FormControl,
   FormLabel,
   Input,
   InputGroup,
   InputLeftElement,
} from '@chakra-ui/react'


export const TextField = ({id, icon = null, ...props}) => (
  <FormControl id={id} isRequired={Object.keys(props).includes('isRequired')} w='full'>
    {props.label && <FormLabel>{props.label}</FormLabel>}
    
    <InputGroup w='full'>
      {icon &&
        <InputLeftElement
          pointerEvents="none"
          children={icon}
        />
      }
      <Input {...props} variant={"nadda"} w='100%'/>
    </InputGroup>
  </FormControl>
);

export default TextField;