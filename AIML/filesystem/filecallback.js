const read=()=>{
  const fs = require("fs");
  fs.readFile("./data.txt","utf-8",(error, data) => {
    if (error) {
        console.error("Error reading file:",error);
    }
    else{
        console.log("Data from file:",data);
    }
  });
}
read();
console.log("Complete me first")
module.exports = read;