const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  console.log("Proxy middleware enabled");
  app.use(
    "/get/main/data",
    createProxyMiddleware({
      target: "https://story.craftyartapp.com",
      changeOrigin: true,
      pathRewrite: {
        "^/get/main/data": "/get/main/data",
      },
    })
  );
};
