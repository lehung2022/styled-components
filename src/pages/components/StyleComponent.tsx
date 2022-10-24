import * as React from 'react';
import styled from '@emotion/styled'

const MyComponent = styled('div')({
  color: 'darkslategray',
  backgroundColor: '#A244C5',
  padding: 8,
  borderRadius: 4,
  width: '50%', 
  height: '80vh',
});

export default function BasicUsage() {
  return <MyComponent>Styled div</MyComponent>;
}
