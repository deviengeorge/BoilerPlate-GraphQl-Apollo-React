module.exports = {
  Query: {
    // comments: (_, __, { dataSources }) =>
    //   dataSources.commentAPI.getAllComments(),
    // comment: (_, { id }, { dataSources }) =>
    //   dataSources.commentAPI.getCommentById({ commentId: id }),
    posts: (_, __, { dataSources }) => dataSources.postAPI.getAllPosts(),
    post: (_, { id }, { dataSources }) =>
      dataSources.postAPI.getPostById({ postId: id }),
  },
};
