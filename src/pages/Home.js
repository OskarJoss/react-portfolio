import React from "react";
import client from "../contentful";
import Card from "../components/Card";
import styled from "styled-components";

const HomeStyled = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Home = () => {
  const [projects, setProjects] = React.useState(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: "project",
      })
      .then((entries) => {
        setProjects(entries.items);
      });
  }, []);

  return (
    <HomeStyled>
      {projects &&
        projects.map((project, i) => {
          return (
            <Card
              key={i}
              fields={project.fields}
              link={`/projects/${project.fields.slug}`}
            />
          );
        })}
    </HomeStyled>
  );
};

export default Home;
