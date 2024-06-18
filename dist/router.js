"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const university_1 = require("./controllers/university");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/university", university_1.listuniversity);
router.post("/university", university_1.saveuniversity);
