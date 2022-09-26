import React, { useState } from 'react';
import axios from 'axios';
/* useNavigate for redirect after post clinic */
import { useNavigate } from 'react-router-dom';

const AddDosen = () => {
    /* create new State for add Clinic */
    const [nidn, setNIDN] = useState("");
    const [name, setName] = useState(""); //initial value empity string
    const [gender, setGender] = useState("Laki-laki");
    const [address, setAddress] = useState(""); //initial value empity string

    /* initiate variable to navigate home */
    const navigate = useNavigate();


    /* create function/method setClinic */
    const saveDosen = async (e) => {
        e.preventDefault(); // use this when submit page not reload
        try {
            await axios.post('http://localhost:4400/dosen', {
                nidn,
                name,
                gender,
                address
            });
            navigate("/dosen"); // navigate to home after saveClinic
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={saveDosen}>
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
                            placeholder='Name'/>
                    </div>
                </div>
                <div className="field">
                    <label  className="label">Jenis Kelamin</label>
                    <div className="control">
                        <div className="select is-fullwidth">
                        <select value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value="Laki-laki">Laki-laki</option>
                            <option value="Perempuan">Perempuan</option>
                        </select>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label  className="label">Alamat</label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={address} 
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder='Address'/>
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

export default AddDosen;