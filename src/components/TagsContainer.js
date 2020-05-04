import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TagStyled = styled.div`
  width: 100%;

  div {
    background-color: purple;
    display: inline-block;
    margin: 4px 2px;
    padding: 2px 6px;
    p {
      color: white;
      margin: 0;
    }
  }
`;

const TagsContainer = (props) => {
  return (
    <TagStyled>
      {props.tags &&
        props.tags.map((tag, i) => {
          return (
            <div key={i}>
              <p>{tag}</p>
            </div>
          );
        })}
    </TagStyled>
  );
};

TagsContainer.propTypes = {
  tags: PropTypes.array,
};

export default TagsContainer;
