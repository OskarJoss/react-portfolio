import React from "react";
import client from "../contentful";
import Card from "../components/Card";

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
    <div className="Home">
      {projects &&
        projects.map((project, i) => {
          return <Card key={i} fields={project.fields} />;
        })}
    </div>
  );
};

export default Home;
