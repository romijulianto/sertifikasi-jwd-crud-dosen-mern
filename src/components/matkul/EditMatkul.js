import React, { useState, useEffect } from 'react';
import axios from 'axios';
/* useNavigate for redirect after edit clinic */
/* useParams for get params from BE */
import { useNavigate, useParams } from 'react-router-dom';

const EditMatkul = () => {
    /* create new State for edit Clinic */
    const [id_matkul, setIDMatkul] = useState("");
    const [matkul, setMatkul] = useState(""); //initial value empity string
    const [sks, setSKS] = useState("1");
    const [semester, setSemester] = useState(""); //initial value empity string

    /* initiate variable to navigate home */
    const navigate = useNavigate();

    /* call params clinic_id */
    const { id } = useParams();


    /* call method getClinicById using useEffect */
    useEffect(() => {
        getMatkulById();

    }, []);

    /* create function/method setClinic */
    const updateMatkul = async (e) => {
        e.preventDefault(); // use this when submit page not reload
        try {
            await axios.patch(`http://localhost:4400/matkul/${id}`, {
                id_matkul,
                matkul,
                sks,
                semester
            });
            navigate("/matkul"); // navigate to home after EditDosen
        } catch (error) {
            console.log(error);
        }
    };

    /* method to get single data byID */
    const getMatkulById = async () => {
        const response = await axios.get(`http://localhost:4400/matkul/${id}`);
        setIDMatkul(response.data.id_matkul);
        setMatkul(response.data.matkul); // set response to setName
        setSKS(response.data.sks);
        setSemester(response.data.semester); // set response to setName
    }

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={updateMatkul}>
                <div className="field">
                    <label  className="label">Id Matkul</label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={id_matkul} 
                            onChange={(e) => setIDMatkul(e.target.value)}
                            placeholder='Matkul'/>
                    </div>
                </div>
                <div className="field">
                    <label  className="label">Nama Matakuliah</label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={matkul} 
                            onChange={(e) => setMatkul(e.target.value)}
                            placeholder='Matkul'/>
                    </div>
                </div>
                <div className="field">
                    <label  className="label">SKS</label>
                    <div className="control">
                        <div className="select is-fullwidth">
                        <select value={sks} onChange={(e) => setSKS(e.target.value)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label  className="label">Semester</label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={semester} 
                            onChange={(e) => setSemester(e.target.value)}
                            placeholder='Semester'/>
                    </div>
                </div>
                <div className="field">
                    <button type='submit' className='button is-success'>Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditMatkul;