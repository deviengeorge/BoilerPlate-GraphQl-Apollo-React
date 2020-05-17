const { RESTDataSource } = require("apollo-datasource-rest");

class PostAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://jsonplaceholder.typicode.com/";
  }
  async getAllPosts() {
    const res = await this.get("posts");
    return Array.isArray(res) ? res.map((post) => this.postReducer(post)) : [];
  }

  postReducer(post) {
    return {
      id: post.id,
      title: post.title,
      body: post.body,
    };
  }

  async getPostById({ postId }) {
    const res = await this.get("posts", { id: postId });
    return this.postReducer(res[0]);
  }
}
// the end of the file
module.exports = PostAPI;
