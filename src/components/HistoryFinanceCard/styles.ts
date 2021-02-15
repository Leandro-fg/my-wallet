import styled from "styled-components";

interface IContainerProps {
  color: string;
}
interface ItagProps {
  color: string;
}

export const Container = styled.li<IContainerProps>`
  background-color: ${(props) => props.color};

  list-style: none;
  border-radius: 5px;
  margin: 10px 0;
  padding: 12px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  transition: all 0.3s;
  position: relative;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding-left: 10px;
  }

  > div small {
      font-size: 16px;
      font-weight: 400;
      opacity: 0.7
  }
  > h3,
  > div span {
    font-size: 22px;
    font-weight: 500;
  }
`;
export const Tag = styled.div<ItagProps>`
  position: absolute;
  left: 0;
  width: 11px;
  height: 35px;

  background-color: ${(props) => props.color};
`;
