import React, { useState } from 'react';
import axios from 'axios';
/* useNavigate for redirect after post clinic */
import { useNavigate } from 'react-router-dom';

const AddMatkul = () => {
    /* create new State for add Clinic */
    const [id_matkul, setIDMatkul] = useState("");
    const [matkul, setMatkul] = useState(""); //initial value empity string
    const [sks, setSKS] = useState("2");
    const [semester, setSemester] = useState(""); //initial value empity string

    /* initiate variable to navigate home */
    const navigate = useNavigate();


    /* create function/method setClinic */
    const saveMatkul = async (e) => {
        e.preventDefault(); // use this when submit page not reload
        try {
            await axios.post('http://localhost:4400/matkul', {
                id_matkul,
                matkul,
                sks,
                semester
            });
            navigate("/matkul"); // navigate to home after saveClinic
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={saveMatkul}>
                <div className="field">
                    <label  className="label">ID Matkul</label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={id_matkul} 
                            onChange={(e) => setIDMatkul(e.target.value)}
                            placeholder='ID Matkul'/>
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
                    <button type='submit' className='button is-success'>Save</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddMatkul;