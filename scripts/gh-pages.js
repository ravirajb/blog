const ghpages = require("gh-pages");

ghpages.publish(
  "__sapper__/export/blog",
  {
    branch: "main",
    repo: "https://github.com/blog/blog.git",
    user: {
      name: "ravirajb",
      email: "raviraj636@gmail.com",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
