import React from "react";
import client from "../contentful";
import { Redirect } from "@reach/router";
import styled from "styled-components";
import RichTextContainer from "../components/RichTextContainer";

const SingleProjectStyled = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: antiquewhite;
  background-color: #e5ee6987;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const SingleProject = (props) => {
  const [project, setProject] = React.useState(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: "project",
        "fields.slug": props.slug,
      })
      .then((entries) => {
        if (entries.items.length !== 0) {
          setProject(entries.items[0].fields);
        } else {
          setProject([]);
        }
      });
  }, [props.slug]);

  if (project && project.length === 0) {
    return <Redirect from="" to="/404" noThrow />;
  }

  return (
    <SingleProjectStyled>
      <h1>{project && project.title}</h1>
      <img
        src={`${project && project.image.fields.file.url}?w=600`}
        alt={""}
      ></img>
      <RichTextContainer text={project && project.text} />
    </SingleProjectStyled>
  );
};

export default SingleProject;
