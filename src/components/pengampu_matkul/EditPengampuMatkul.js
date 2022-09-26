import React, { useState, useEffect } from 'react';
import axios from 'axios';
/* useNavigate for redirect after edit clinic */
/* useParams for get params from BE */
import { useNavigate, useParams } from 'react-router-dom';

const EditPengampuMatkul = () => {
    /* create new State for edit Clinic */
    const [nidn, setNIDN] = useState("");
    const [name, setName] = useState(""); //initial value empity string
    const [matakuliah, setMatakuliah] = useState("");
    const [sks, setSKS] = useState("1"); //initial value empity string

    /* initiate variable to navigate home */
    const navigate = useNavigate();

    /* call params clinic_id */
    const { id } = useParams();


    /* call method getClinicById using useEffect */
    useEffect(() => {
        getPengampuMatkulById();

    }, []);

    /* create function/method setClinic */
    const updatePengampuMatkul = async (e) => {
        e.preventDefault(); // use this when submit page not reload
        try {
            await axios.patch(`http://localhost:4400/pengampu_matkul/${id}`, {
                nidn,
                name,
                matakuliah,
                sks
            });
            navigate("/pengampu_matkul"); // navigate to home after EditDosen
        } catch (error) {
            console.log(error);
        }
    };

    /* method to get single data byID */
    const getPengampuMatkulById = async () => {
        const response = await axios.get(`http://localhost:4400/pengampu_matkul/${id}`);
        setNIDN(response.data.nidn);
        setName(response.data.name); // set response to setName
        setMatakuliah(response.data.matakuliah);
        setSKS(response.data.sks); // set response to setName
    }

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={updatePengampuMatkul}>
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
                    <label  className="label">Nama Matakuliah</label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={matakuliah} 
                            onChange={(e) => setMatakuliah(e.target.value)}
                            placeholder='Nama Matakuliah'/>
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
                    <button type='submit' className='button is-success'>Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditPengampuMatkul;