////my-backend-servicios/src/routes/index.js
import express from 'express';
import solicitaServicioRoutes from './solicitaServicio.js';
import detalleServicioRoutes from './detalleServicio.js';


const router = express.Router();
router.use('/solicitaServicio', solicitaServicioRoutes);
router.use('/detalleServicio', detalleServicioRoutes);


export default router;
