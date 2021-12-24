import React from 'react';
import styled from 'styled-components';

const footer = () => (
    <Footer>
        <Text>&copy; Culinary 2021 (Madu Nindya Viorella)</Text>
        <Text>Frontend</Text>
    </Footer>
)
const Footer = styled.div`
    position:absolute;
    background : #8B0000;
    width : 100%;
    display : flex;
    height : 60px;
    margin-top:auto;
    justify-content:center;
    align-items:center;
`;
const Text = styled.div`
    flex:1;
    text-align:center;
    color:white;
`;

export default footer;