const fs = require("fs");

fs.writeFile("message.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

fs.appendFile('message.txt', '\nData appended', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

fs.readFile("message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});


