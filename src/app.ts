import express from "express";
import routes from  "@/router/rountes"

const app = express();

app.use(routes);

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
