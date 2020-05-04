import React from "react";
import styled from "styled-components";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "../App.css";

const CardStyled = styled.a`
  width: 280px;
  height: 360px;
  text-align: center;
  background-color: antiquewhite;
  margin: 7px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  overflow: hidden;

  img {
    width: 100%;
    height: 40%;
    min-height: 40%;
    object-fit: cover;
  }

  .textBox {
    padding: 5px;
    text-overflow: ellipsis;
  }

  h1 {
    margin: 0;
    color: cornflowerblue;
  }

  @media (max-width: 768px) {
    width: calc(50vw - 14px);
  }
`;

const Card = (props) => {
  return (
    <CardStyled href={props.link}>
      <img src={`${props.fields.image.fields.file.url}?w=280`} alt=""></img>
      <div className="textBox">
        <h1>{props.fields.title}</h1>
        {documentToReactComponents(props.fields.summary)}
      </div>
    </CardStyled>
  );
};

export default Card;
