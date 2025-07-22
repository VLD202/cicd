const express = require('express');         // 1
const app = express();                      // 2

app.get('/', (req, res) => {                // 3–6
  res.json({
    status: 200,
    message: "hello world"
  });
});

app.listen(8080, () => {                    // 8–10
  console.log("server running on port 8080");
});
