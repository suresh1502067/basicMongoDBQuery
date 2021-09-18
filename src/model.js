const moogose = require("mongoose");

const schema = moogose.Schema;

const user = new schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    location: {
      type: String,
    },
  },
  {
    collection: "users",
  }
);

module.exports = moogose.model("users", user);
