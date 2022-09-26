import express from "express";
import {
    getMatkul,
    getMatkulById,
    createMatkul,
    updateMatkul,
    deleteMatkul
} from "../controllers/MatkulController.js";

/* inisiasi route */
const router = express.Router();

/* endpoint route clinic crud */
router.get('/matkul', getMatkul);
router.get('/matkul/:id', getMatkulById);
router.post('/matkul/', createMatkul);
router.patch('/matkul/:id', updateMatkul);
router.delete('/matkul/:id', deleteMatkul);

export default router;