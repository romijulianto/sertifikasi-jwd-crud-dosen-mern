import Matkul from "../models/MatkulModel.js";

export const getMatkul = async (req, res) => {
    try {
        const response = await Matkul.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

/* method getMatkul By Id */
export const getMatkulById = async (req, res) => {
    try {
        const response = await Matkul.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

/* method create Matkul */
export const createMatkul = async (req, res) => {
    try {
        await Matkul.create(req.body);
        res.status(201).json({ message: "Matkul has been Created" });
    } catch (error) {
        console.log(error.message);
    }
}

/* method update Matkul */
export const updateMatkul = async (req, res) => {
    try {
        await Matkul.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ message: "Matkul has been Updated" });
    } catch (error) {
        console.log(error.message);
    }
}

/* method delete Matkul */
export const deleteMatkul = async (req, res) => {
    try {
        await Matkul.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ message: "Matkul has been Deleted" });
    } catch (error) {
        console.log(error.message);
    }
}