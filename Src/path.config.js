const path = require("path");

const viewsPath = path.join(__dirname, "/views");
const staticPath = path.join(__dirname, "/Content");
const partialsPath = path.join(__dirname, "./views/Partials");

module.exports = { viewsPath, staticPath, partialsPath };