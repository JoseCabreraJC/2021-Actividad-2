module.exports = {
  friendlyName: "Get post",

  description: "",

  inputs: {
    postId: {
      type: "number",
      required: true,
    },
  },

  exits: {},
  fn: async function ({ postId }) {
    try {
      const post = await Posts.findOne({ id: postId });
      if (!post) {
        return { message: `post con id ${postId} notfound 404` };
      }
      return post;
    } catch (err) {
      return { message: err };
    }
  },
};
