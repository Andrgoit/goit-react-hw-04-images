import styled from 'styled-components';

const StyledModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
`;

const StyledModalCard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  min-height: 300px;
  /* background-color: #fff; */
  /* border: 1px solid red; */
  padding: 30px;
`;

const StyledModalCardImg = styled.img``;

export { StyledModalBackground, StyledModalCard, StyledModalCardImg };
