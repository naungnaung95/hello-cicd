const fs = require("fs");

fs.mkdirSync("dist", { recursive: true });

const html = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Hello CI/CD</title>
  </head>
  <body>
    <h1>Hello from GitHub Pages 🚀</h1>
    <p>Built at: ${new Date().toISOString()}</p>
  </body>
</html>
`;

fs.writeFileSync("dist/index.html", html);
console.log("Website built: dist/index.html");
