import styled from 'styled-components';

interface IParagraph {
  defaulTextColor: boolean;
}

export const Wrapper = styled.div<IParagraph>`
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  color: ${(props) => (props.defaulTextColor ? '#d7d7d7' : '#000')};
  outline: 0;
`;
