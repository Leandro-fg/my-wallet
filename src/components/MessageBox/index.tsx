import React from "react";

import { Container } from "./styles";

interface ImessageBoxProps {
  title: string;
  description: string;
  footerText: string;
  icon: string;
}

const MessageBox: React.FC<ImessageBoxProps> = ({
  title,
  description,
  footerText,
  icon,
}) => {
  return (
    <Container>
      <header>
        <h1>
          {title}
          <img src={icon} alt="" />
        </h1>
        <p>{description}</p>
      </header>
      <footer>
        <span>{footerText}</span>
      </footer>
    </Container>
  );
};

export default MessageBox;
