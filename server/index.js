const express = require("express");
const app = express();
const PORT = process.env.PORT || 7000;

app.get("/", (req, res) => {
  res.send("Hello from Node backend!");
});

app.get("/api", (req, res) => {
  res.json({ message: "API response from backend" });
});

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`Node server running on ${PORT}`);
});
