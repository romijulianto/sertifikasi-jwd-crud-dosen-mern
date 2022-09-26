/* for fetch data from backend need useState, useEffect */
import React, { useState, useEffect } from 'react'
/* import axios for api interaction */
import axios from "axios";

/* use link to navigate button into specific url */
import { Link } from 'react-router-dom';

const PengampuMatkulList = () => {
    /* create new state for update useState */
    const [pengampuMatkuls, setPengampuMatkul] = useState([]); // initial value empity array: []

    /* to run method, add useEffect */
    useEffect(() => {
        getPengampuMatkuls();
    }, []); // [] useEffect running on mounted to DOM

    /* method to fecth data from be */
    const getPengampuMatkuls = async () => {
        const response = await axios.get('http://localhost:4400/pengampu_matkul');
        
        /* array from be set to State = setDosen */
        setPengampuMatkul(response.data);

        /* ouput array be to console */
        console.log(response.data);
    };

    /* method to delete Dosen */
    const deletePengampuMatkul = async (id) => {
        try {
            await axios.delete(`http://localhost:4400/pengampu_matkul/${id}`);
            /* if delete success callback method getDosen */
            getPengampuMatkuls();
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <div className="columns mt-5 is-centered">
        <div className="column">
            <Link to={`/dosen`} className="button is-success">Dosen</Link>
            <Link to={`/matkul`} className="button is-success">Mata Kuliah</Link>
            <Link to={`/pengampu_matkul/add`} className="button is-success">Tambah Pengampu Mata Kuliah</Link>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>NIDN</th>
                        <th>Nama Dosen</th>
                        <th>Matakuliah</th>
                        <th>SKS</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {pengampuMatkuls.map((pengampuMatkul, index) => (
                    <tr key={pengampuMatkul.id}>
                        <td>{ pengampuMatkul.nidn }</td>
                        <td>{ pengampuMatkul.name }</td>
                        <td>{ pengampuMatkul.matakuliah }</td>
                        <td>{ pengampuMatkul.sks }</td>
                        <td>
                            <Link to={`/pengampu_matkul/edit/${pengampuMatkul.id}`} className='button is-small is-info'>Edit</Link>
                            <button onClick={() => deletePengampuMatkul(pengampuMatkul.id)} className='button is-small is-danger'>Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default PengampuMatkulList;