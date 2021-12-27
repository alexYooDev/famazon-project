import styled, { css } from 'styled-components';

const spanAttr = css`
  width: 23%;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  > img {
    width: 100%;
    height: 100%;
  }
`;

export const NameContainer = styled.span`
  ${spanAttr}
`;

export const QuantityContainer = styled.span`
  ${spanAttr}
  display: flex;
  > .arrow {
    cursor: pointer;
  }

  > .value {
    margin: 0 10px;
  }
`;

export const PriceContainer = styled.span`
  ${spanAttr}
`;

export const RemoveButtonContainer = styled.span`
  padding-left: 12px;
  cursor: pointer;
`;
