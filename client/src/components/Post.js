import React from "react";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const query = gql`
  {
    post(id: "26") {
      id
      title
      body
    }
  }
`;
const Post = () => {
  const { data, loading, error } = useQuery(query);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  return (
    <div>
      <h1>{data.post.title}</h1>
      <h3>{data.post.body}</h3>
      <p>{data.post.id}</p>
    </div>
  );
};

export default Post;
