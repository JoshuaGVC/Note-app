import styled from 'styled-components';

export const Button = styled.button`
    background-color: #009578;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items:center;
    color: white;
    border-radius: 7px;
    transition: background-color 0.5s ease;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    font-family: 'Open Sans';
    font-style: normal;
    width: 100%;
    border: 0;
    margin-bottom: 25px;
    
    &:hover {
        background-color: #00AF8C;
        cursor: pointer;
    }
`