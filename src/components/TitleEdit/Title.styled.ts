import { FC } from 'react';
import styled from 'styled-components';

interface ITitle {
    defalutText: boolean;
}

export const Title = styled.h1<ITitle>`
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 40px;
    line-height: 54px;
    margin-bottom: 32px;
    color: ${props => props.defalutText ? "#d7d7d7" : "#000"};
`