const express = require("express");
const router = express.Router();
const Profile = require("../model/ProfileModel");

router.route("/:page")
  .get(async (req, res) => {
    const page = Number(req.params.page);

    if (isNaN(page) || page < 1) {
      return res.json({ error: "Invalid page number!" });
    }

    const itemsPerPage = 6;
    const skip = (page - 1) * itemsPerPage;

    try {
      const profiles = await Profile.find().sort({ createdAt: -1 }).skip(skip).limit(itemsPerPage);
      const count=await Profile.countDocuments();
      res.json({ profiles, count });
    } catch (err) {
      res.status(500).json({ error_msg: "Error finding profiles!", error: err });
    }
  });

module.exports = router;
