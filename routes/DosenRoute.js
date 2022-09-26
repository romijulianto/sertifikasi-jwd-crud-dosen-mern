import express from "express";
import {
    getDosen,
    getDosenById,
    createDosen,
    updateDosen,
    deleteDosen
} from "../controllers/DosenController.js";

/* inisiasi route */
const router = express.Router();

/* endpoint route clinic crud */
router.get('/dosen', getDosen);
router.get('/dosen/:id', getDosenById);
router.post('/dosen/', createDosen);
router.patch('/dosen/:id', updateDosen);
router.delete('/dosen/:id', deleteDosen);

export default router;