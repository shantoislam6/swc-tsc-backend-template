import express = require("express");

declare module "express-session" {
  interface SessionData {
    value: string;
  }
}
