import React from 'react';
import styled from 'styled-components';
import Image from './Image';

const CardContainer = styled.div`
  border: 1px solid #282c34;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #DC143C;

`;

const CardTitle = styled.h2`
  font-size: 1.5em;
  margin: 10px 0;
  color: #282c34
`;

const CardDescription = styled.p`
  font-size: 1em;
  width: 600px;
    margin: 0 auto;
    border: 2px solid #282c34;
    padding: 10px;
  color: black
  
  
`;

const Card = ({ product }) => (
  <CardContainer>
    <Image src={product.image} alt={product.title} />
    <CardTitle>{product.title}</CardTitle>
    <CardDescription>{product.description}</CardDescription>
  </CardContainer>
);

export default Card;
