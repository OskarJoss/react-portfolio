import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Card = (props) => {
  return (
    <div className="Card">
      <h1>{props.fields.title}</h1>
      <img src={props.fields.image.fields.file.url} alt=""></img>
      {documentToReactComponents(props.fields.summary)}
      <a href={`/projects/${props.fields.slug}`}>Länk</a>
    </div>
  );
};

export default Card;
