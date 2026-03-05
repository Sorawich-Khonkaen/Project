const express = require("express");
const router = express.Router();
const controller = require('../controllers/enrollmentController');
const enrollmentRoutes = require('./routes/enrollmentRoutes');


router.get("/", controller.index);

router.get("/create", controller.createPage);

router.post("/create", controller.create);

router.get("/:id", controller.show);

router.get("/:id/edit", controller.editPage);

router.post("/:id/edit", controller.update);

router.post("/:id/delete", controller.delete);

router.get('/reports/members-in-class', controller.membersInClass);

router.get('/reports/member-schedule', controller.memberSchedule);

router.get("/reports/members-in-class", enrollmentController.membersInClass);

router.get("/reports/member-schedule", enrollmentController.memberSchedule);

module.exports = router