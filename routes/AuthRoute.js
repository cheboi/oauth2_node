const express = require("express");
const passport = require("passport");

const {
  getUserController,
  githubLoginController,
  LogoutController,
} = require("../controllers/AuthController.js");

const router = express.Router();

router.get("/logout", LogoutController);

router.get("/me", getUserController);

router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

router.get(
    "/github/callback",
    passport.authenticate("github", {
      failureRedirect: "/",
      failureMessage: "some error occured",
    }),
    githubLoginController
);
