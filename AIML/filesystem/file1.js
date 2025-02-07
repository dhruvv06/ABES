const fs = require('fs');
const data = fs.readFileSync("./data.txt","utf-8");
console.log(data);
// fs.writeFileSync("./data3.txt", "hey this is my new work","utf-8");
// fs.appendFileSync("./data.txt", "work from another file","utf-8");
// fs.renameSync("./data3.txt","./data.5txt");
//fs.unlinkSync("./data5.txt");
if(data.match("h")){
    const newdata =data.replace("h","abes");
    fs.writeFileSync("./data.text",newdata, "utf-8");
}