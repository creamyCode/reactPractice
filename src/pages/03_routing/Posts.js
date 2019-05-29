import React from "react";
import { Link, Route } from "react-router-dom";
import { Post } from "pages";
import * as _ from "lodash";

const Posts = ({ match }) => {
  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {_.range(1, 10).map(num => (
          <li key={num}>
            <Link to={`${match.url}/${num}`}>Post #{num}</Link>
          </li>
        ))}
      </ul>
      <Route
        exact
        path={match.url}
        render={() => <h3>Please select any post</h3>}
      />
      <Route path={`${match.url}/:id`} component={Post} />
    </div>
  );
};

export default Posts;
