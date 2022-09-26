import pengampuMatkul from "../models/PengampuMatkulModel.js";

export const getPengampuMatkul = async (req, res) => {
    try {
        const response = await pengampuMatkul.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

/* method getMatkul By Id */
export const getPengampuMatkulById = async (req, res) => {
    try {
        const response = await pengampuMatkul.findOne({
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
export const createPengampuMatkul = async (req, res) => {
    try {
        await pengampuMatkul.create(req.body);
        res.status(201).json({ message: "Pengampu Matkul has been Created" });
    } catch (error) {
        console.log(error.message);
    }
}

/* method update Matkul */
export const updatePengampuMatkul = async (req, res) => {
    try {
        await pengampuMatkul.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ message: "Pengampu Matkul has been Updated" });
    } catch (error) {
        console.log(error.message);
    }
}

/* method delete Matkul */
export const deletePengampuMatkul = async (req, res) => {
    try {
        await pengampuMatkul.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ message: "Pengampu Matkul has been Deleted" });
    } catch (error) {
        console.log(error.message);
    }
}