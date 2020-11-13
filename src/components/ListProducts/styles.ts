import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 16px 0;

  > a {
    font-size: 14px;
    text-decoration: none;
    color: var(--color-blue);
    padding: 2.5px 0;

    & + a {
      padding-left: 10px;
      margin-left: 10px;
      border-left: 1px solid var(--color-border);
    }
  }
`;

export const Panel = styled.div`
  background: var(--color-white);
  box-shadow: var(--panel-shadow);

  display: grid;
  grid-template-columns: 20fr 80fr;
`;

export const Column = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 20fr 20fr 20fr;
`;

export const Gallery = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 330px;

  > img {
    height: 73%;
  }
`;

export const Menu = styled.div`
  background-color: #EDEDED;
  border-top: 1px solid var(--color-border);
  padding: 48px 32px;

  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 26px;
    font-weight: 600;
    line-height: 30px;
    padding-right: 16px;
  }
  > p {
    font-size: 14px;
    line-height: 1.29;
    font-weight: 300;
    position: relative;
    bottom: 2px;
    margin-bottom: 40px;
  }
  > section {
    display: flex;
    flex-direction: column;
    margin: 20px 0px;

    .title {
      color: #333;
      font-size: 16px;
      font-weight: 600;
      line-height: 1.25;
      margin: 0 0 12px;
    }

    .sub-title {
      color: #333;
      font-size: 14px;
      font-weight: 600;
      line-height: 1.25;
    }

    .categories {
      margin: 10px 0px;
      display: flex;
      flex-direction: column;

      > a {
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          color: var(--color-black);
          text-decoration: none;
      }
    }
    > select {
      width: 150px;
    }

  }

`;

export const Product = styled.div`
  padding: 20px;
  margin: 10px;
  transition: transform .2s; /* Animation */
  cursor: pointer;

  .title{
    font-weight: 600;
    margin-bottom: 5px;
  }
  > h3 {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  > p {
    font-size: 14px;
    font-weight: 400;
  }
  :hover {
    transform: scale(1.05); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }
`;


