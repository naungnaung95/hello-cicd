const fs = require("fs");

fs.mkdirSync("dist", { recursive: true });
fs.writeFileSync(
  "dist/build.txt",
  "Build successful at " + new Date().toISOString()
);

console.log("Build completed");
