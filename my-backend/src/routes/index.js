//src/routes/index.js
import express from 'express';
import authRoutes from './auth.js';
import usuarioRoutes from './usuario.js';
import serviceRoutes from './service.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/usuario', usuarioRoutes);
router.use('/service', serviceRoutes);

export default router;
