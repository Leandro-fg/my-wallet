import styled from "styled-components";

interface IcontainerProps {
    color: string;
}

export const Container = styled.div<IcontainerProps>`
background-color: ${(props) => props.color};

`;
