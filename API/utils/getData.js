const fs = require("fs");

module.exports = () => {
  try {
    return JSON.parse(fs.readFileSync(`${__dirname}/../data.json`));
  } catch (err) {
    console.log("Error in reading file", err);
  }
};
