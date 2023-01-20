import styled from 'styled-components'

export const GradientContainer = styled.div`
  padding: 10px;
  font-size: 15px;
  background-image: linear-gradient(
    ${props => props.direction},
    ${props => props.colorOne},
    ${props => props.colorTwo}
  );
`
