const fs = require("fs");

module.exports = (data) => {
  try {
    fs.writeFileSync(`${__dirname}/../data.json`, JSON.stringify(data));
  } catch (err) {
    console.log("Error in writing file", err);
  }
};
