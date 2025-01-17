import styled from "styled-components";

interface IcontainerProps {
  color: string;
}

export const Container = styled.div<IcontainerProps>`
  background-color: ${(props) => props.color};
  width: 32%;
  height: 150px;
  margin: 10px 0;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.white};
  border-radius: 7px;
  padding: 10px 20px;

  position: relative;
  overflow: hidden;

  > img {
    height: 110%;
    position: absolute;
    top: -10px;
    right: -30px;
    opacity: 0.3;
  }
  > span {
    font-weight: 500;
    font-size: 18px;
  }
  > small {
    font-size: 12px;
    position: absolute;
    bottom: 10px;
    font-weight: 400;
  }
`;
