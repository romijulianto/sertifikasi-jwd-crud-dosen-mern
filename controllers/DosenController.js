import Dosen from "../models/DosenModel.js";

export const getDosen = async (req, res) => {
    try {
        const response = await Dosen.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

/* method getDosen By Id */
export const getDosenById = async (req, res) => {
    try {
        const response = await Dosen.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

/* method create Dosen */
export const createDosen = async (req, res) => {
    try {
        await Dosen.create(req.body);
        res.status(201).json({ message: "Dosen has been Created" });
    } catch (error) {
        console.log(error.message);
    }
}

/* method update Dosen */
export const updateDosen = async (req, res) => {
    try {
        await Dosen.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ message: "Dosen has been Updated" });
    } catch (error) {
        console.log(error.message);
    }
}

/* method delete Dosen */
export const deleteDosen = async (req, res) => {
    try {
        await Dosen.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ message: "Dosen has been Deleted" });
    } catch (error) {
        console.log(error.message);
    }
}