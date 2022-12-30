import styled from 'styled-components';

interface ICard {
    selected?: boolean;
}

export const Card = styled.li<ICard>`
    height: 121px;
    border-radius: 7px;
    background-color: ${props => props.selected ? '#EEEEEE' : '#fff'};
    padding: 11px;
    user-select: none;
    margin-bottom: 17px;

    &:last-child {
        margin-bottom: 0;
    }

    &:hover {
        cursor: pointer;
    }

    & > * {
        font-weight: 600 !important;
    }
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 8px;
`

export const Paragraph = styled(Title)`
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 15px;
`

export const Date = styled.span`
    display: block;
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #AAAAAA;
    text-align: right;
`