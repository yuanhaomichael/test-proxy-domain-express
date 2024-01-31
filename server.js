const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({
  target: 'https://michael-yuanhao-deng.vercel.app/',
  changeOrigin: true,
  pathRewrite: {
    '^/': '/posts/My%20Story', // Rewrite root to the specific path
  },
}));

const PORT = process.env.PORT || 3002; // Use the PORT environment variable provided by Heroku or default to 3002

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});