import express from "express";
import routes from  "@/routers/routes"

const app = express();

app.use(express.static('public'));
app.use(routes);

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});