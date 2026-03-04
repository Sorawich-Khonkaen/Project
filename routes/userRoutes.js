const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// 1. กลุ่มเส้นทางทั่วไป (Static Routes)
router.get('/', userController.index); 
router.get('/dashboard', userController.dashboard);
router.get('/create', userController.create);
router.post('/', userController.store);

// 2. กลุ่มเส้นทางที่มี Action เฉพาะเจาะจง (ต้องวางไว้ก่อน /:id)
router.get('/:id/edit', userController.edit);
router.post('/:id/update', userController.update); 
router.post('/:id/delete', userController.destroy);

// 3. เส้นทางรับค่า ID ทั่วไป (ต้องอยู่ล่างสุดเสมอ)
router.get('/:id', userController.show); 

module.exports = router;