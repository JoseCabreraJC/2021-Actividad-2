module.exports = {
  friendlyName: "Create post",

  description: "",

  inputs: {},

  exits: {},

  fn: async function () {
    const body = this.req.body;
    try {
      await Posts.create(body);

      return { message: "created", post: body };
    } catch (err) {
      return { message: err };
    }
  },
};
