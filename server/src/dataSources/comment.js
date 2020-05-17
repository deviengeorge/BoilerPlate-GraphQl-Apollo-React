const { RESTDataSource } = require("apollo-datasource-rest");

class CommentAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://my-json-server.typicode.com/typicode/demo/";
  }

  async getAllComments() {
    const response = await this.get("comments");
    return Array.isArray(response)
      ? response.map((comment) => this.commentReducer(comment))
      : [];
  }

  commentReducer(comment) {
    return {
      id: comment.id,
      body: comment.body,
    };
  }

  async getCommentById({ commentId }) {
    const response = await this.get("comments", { id: commentId });
    return this.commentReducer(response[0]);
  }

  getCommentsByIds({ commentIds }) {
    return Promise.all(
      commentIds.map((commentId) => this.getCommentById({ commentId }))
    );
  }
}
module.exports = CommentAPI;
