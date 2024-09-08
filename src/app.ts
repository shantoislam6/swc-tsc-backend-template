import express from "express";
import routes from  "@/routers/routes";
import session from 'express-session';
import RedisStore from "connect-redis";
import redis from "./libs/redis";

let redisStore = new RedisStore({
  client: redis,
  prefix: "session-store:",
})

const app = express();
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  store: redisStore,
  secret: `${process.env.SESSION_SECRETE}`,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, sameSite:"lax" }
}))
//
app.use(express.static('public'));
app.use(routes);

app.listen(`${process.env.PORT ?? 8080}`, () => {
  console.log("Server is listening on port 5000");
});