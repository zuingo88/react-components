import React from 'react';
import {
  Box0,
  Box1,
  Text,
  Black0,
  Container
} from './StyledSystem.style';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

const StyledSystem = () => {
  return (
    <div id='pageContainer'>
      <ThemeProvider theme={theme}>
        <Box0
          color='#fff'
          bg="tomato"
          py='2px'
          px='10px'
          flex='1'
        >
          Box0
          <Black0 p='20px'>
            Black0
          </Black0>
        </Box0>

        <Box0
          color={['#fff', 'blue', 'green', 'purple']}
          bg="tomato"
          py='2px'
          px='10px'
          flex='2'
        >
          Box0
        </Box0>

        <Box1
          m='15px'
          p='10px'
          width={[1, 1 / 2, 1 / 4, 1 / 7]}
        >
          <Text
            m={['xs', 'sm', 'md', 'lg']}
            color='black'
            fontSize={['xs', 'sm', 'md', 'lg']}
          >
            Box1
          </Text>
        </Box1>

        <Container>
          Container default
        </Container>

        <Container variant='small'>
          Container small
        </Container>

        <Container variant='large'>
          Container large
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default StyledSystem