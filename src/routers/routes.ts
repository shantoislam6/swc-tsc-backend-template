import Home from "@/views";
import express from "express";

const routes = express.Router();

routes.get("/", (req, res) => {
  console.log(req.sessionID);
  return res.send(Home());
});

routes.get("/set", (req, res) => {
  req.sessionStore.get('EdSts8pkK8qXC6aXl-ja8KovgX3RBCeN', (err, data) => {
    console.log(data)
  });
  req.session.value = req.query.value as string;
  req.session.save();
  return res.send(req.query.value);
});

routes.get("/get", (req, res) => {
  console.log(req.sessionID);
  return res.send(req.session.value);
});

routes.get("/delete", (req, res) => {
  req.session.destroy(() => {});
  return res.send(req.session?.value);
});

export default routes;
