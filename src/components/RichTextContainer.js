import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styled from "styled-components";

const RichTextContainerStyled = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: 20px;
`;

const RichTextContainer = (props) => {
  console.log(props);
  return (
    <RichTextContainerStyled>
      {props.text && documentToReactComponents(props.text)}
    </RichTextContainerStyled>
  );
};

export default RichTextContainer;
