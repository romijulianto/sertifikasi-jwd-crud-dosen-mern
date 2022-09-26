import React, { useState } from 'react';
import axios from 'axios';
/* useNavigate for redirect after post clinic */
import { useNavigate } from 'react-router-dom';

const AddPengampuMatkul = () => {
    /* create new State for add Clinic */
    const [nidn, setNIDN] = useState("");
    const [name, setName] = useState(""); //initial value empity string
    const [matakuliah, setMatakuliah] = useState("");
    const [sks, setSKS] = useState("1"); //initial value empity string

    /* initiate variable to navigate home */
    const navigate = useNavigate();


    /* create function/method setClinic */
    const savePengampuMatkul = async (e) => {
        e.preventDefault(); // use this when submit page not reload
        try {
            await axios.post('http://localhost:4400/pengampu_matkul', {
                nidn,
                name,
                matakuliah,
                sks
            });
            navigate("/pengampu_matkul"); // navigate to home after saveClinic
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={savePengampuMatkul}>
                <div className="field">
                    <label  className="label">NIDN</label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={nidn} 
                            onChange={(e) => setNIDN(e.target.value)}
                            placeholder='NIDN'/>
                    </div>
                </div>
                <div className="field">
                    <label  className="label">Nama Dosen</label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Nama Dosen'/>
                    </div>
                </div>
                <div className="field">
                    <label  className="label">Matakuliah</label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={matakuliah} 
                            onChange={(e) => setMatakuliah(e.target.value)}
                            placeholder='Mata Kuliah'/>
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
                    <button type='submit' className='button is-success'>Save</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddPengampuMatkul;