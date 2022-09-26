import React, { useState, useEffect } from 'react';
import axios from 'axios';
/* useNavigate for redirect after edit clinic */
/* useParams for get params from BE */
import { useNavigate, useParams } from 'react-router-dom';

const EditDosen = () => {
    /* create new State for edit Clinic */
    const [nidn, setNIDN] = useState("");
    const [name, setName] = useState(""); //initial value empity string
    const [gender, setGender] = useState("Laki-laki");
    const [address, setAddress] = useState(""); //initial value empity string

    /* initiate variable to navigate home */
    const navigate = useNavigate();

    /* call params clinic_id */
    const { id } = useParams();


    /* call method getClinicById using useEffect */
    useEffect(() => {
        getDosenById();

    }, []);

    /* create function/method setClinic */
    const updateDosen = async (e) => {
        e.preventDefault(); // use this when submit page not reload
        try {
            await axios.patch(`http://localhost:4400/dosen/${id}`, {
                nidn,
                name,
                gender,
                address
            });
            navigate("/dosen"); // navigate to home after EditDosen
        } catch (error) {
            console.log(error);
        }
    };

    /* method to get single data byID */
    const getDosenById = async () => {
        const response = await axios.get(`http://localhost:4400/dosen/${id}`);
        setNIDN(response.data.nidn);
        setName(response.data.name); // set response to setName
        setGender(response.data.gender);
        setAddress(response.data.address); // set response to setName
    }

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={updateDosen}>
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
                    <button type='submit' className='button is-success'>Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditDosen;