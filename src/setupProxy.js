const proxy = require("http-proxy-middleware");
const HttpsProxyAgent = require("https-proxy-agent");

module.exports = function (app) {
  console.log("Proxy middleware enabled");

  app.use(
    "/get/main/data",
    proxy({
      target: "https://story.craftyartapp.com",
      changeOrigin: true,
      agent: new HttpsProxyAgent({ rejectUnauthorized: false }),
      pathRewrite: {
        "^/get/main/data": "/get/main/data",
      },
    })
  );
};
