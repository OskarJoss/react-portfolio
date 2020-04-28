import React from "react";
import "./App.css";
import client from "./contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function App() {
  const [projects, setProjects] = React.useState(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: "project",
      })
      .then((entries) => {
        setProjects(entries.items);
        console.log(entries.items);
      });
  }, []);

  return (
    <div className="App">
      {projects &&
        projects.map((project, i) => {
          return (
            <div key={i}>
              <h1>{project.fields.title}</h1>
              <img src={project.fields.image.fields.file.url} alt={"hej"}></img>
              {documentToReactComponents(project.fields.text)}
            </div>
          );
        })}
    </div>
  );
}

export default App;
