module.exports = {
  friendlyName: "Create user",

  description: "",

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    const body = this.req.body;
    try {
      const user = await Users.findOne({
        username: body.username,
      });
      if (user) {
        return {
          message: ` el nombre de usuario ${body.username} no esta disponible`,
        };
      }
      await Users.create(body);

      return { message: "created", user: body };
    } catch (err) {
      return { message: err };
    }
  },
};
