import React from "react";
import client from "../contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Redirect } from "@reach/router";
import "../App.css";

const SingleProject = (props) => {
  // const [project, setProject] = React.useState(null);

  // React.useEffect(() => {
  //   client
  //     .getEntries({
  //       content_type: "project",
  //       "fields.slug": props.slug,
  //     })
  //     .then((entries) => {
  //       if (entries.items.length !== 0) {
  //         setProject(entries.items[0].fields);
  //       } else {
  //         setProject([]);
  //       }
  //     });
  // }, [props.slug]);

  // if (project && project.length === 0) {
  //   return <Redirect from="" to="/404" noThrow />;
  // }

  return (
    <div className="SingleProject">
      {/* <h1>{project && project.title}</h1>
      <img src={project && project.image.fields.file.url} alt={""} height></img>
      {documentToReactComponents(project && project.text)} */}
    </div>
  );
};

export default SingleProject;
