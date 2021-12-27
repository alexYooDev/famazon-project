import styled, { css } from 'styled-components';

const spanAttr = css`
  font-size: 16px;
`;

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

export const ImgContainer = styled.img`
  width: 30%;
`;

export const NameContainer = styled.span`
  ${spanAttr}
`;

export const PriceContainer = styled.span`
  ${spanAttr}
`;

export const ItemDetailContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;
