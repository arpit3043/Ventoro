const express = require("express");

const profileRoutes = require("../modules/profile/routes/founderRoutes.js");
const authRoutes = require("../modules/auth/routes/authRoutes.js");
const userRoutes = require("../modules/user/routes/userRoutes.js");
const postRoutes = require("../modules/activityFeed/routes/postRoutes.js");

const router = express.Router();

router.use("/profile", profileRoutes);
router.use("/users", authRoutes, userRoutes);
router.use("/post", postRoutes);

module.exports = router;