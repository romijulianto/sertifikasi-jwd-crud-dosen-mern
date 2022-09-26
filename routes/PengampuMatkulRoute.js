import express from "express";
import {
    getPengampuMatkul,
    getPengampuMatkulById,
    createPengampuMatkul,
    updatePengampuMatkul,
    deletePengampuMatkul
} from "../controllers/PengampuMatkulController.js";

/* inisiasi route */
const router = express.Router();

/* endpoint route clinic crud */
router.get('/pengampu_matkul', getPengampuMatkul);
router.get('/pengampu_matkul/:id', getPengampuMatkulById);
router.post('/pengampu_matkul/', createPengampuMatkul);
router.patch('/pengampu_matkul/:id', updatePengampuMatkul);
router.delete('/pengampu_matkul/:id', deletePengampuMatkul);

export default router;