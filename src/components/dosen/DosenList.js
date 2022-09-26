/* for fetch data from backend need useState, useEffect */
import React, { useState, useEffect } from 'react'
/* import axios for api interaction */
import axios from "axios";

/* use link to navigate button into specific url */
import { Link } from 'react-router-dom';

const DosenList = () => {
    /* create new state for update useState */
    const [dosens, setDosen] = useState([]); // initial value empity array: []

    /* to run method, add useEffect */
    useEffect(() => {
        getDosens();
    }, []); // [] useEffect running on mounted to DOM

    /* method to fecth data from be */
    const getDosens = async () => {
        const response = await axios.get('http://localhost:4400/dosen');
        
        /* array from be set to State = setDosen */
        setDosen(response.data);

        /* ouput array be to console */
        console.log(response.data);
    };

    /* method to delete Dosen */
    const deleteDosen = async (id) => {
        try {
            await axios.delete(`http://localhost:4400/dosen/${id}`);
            /* if delete success callback method getDosen */
            getDosens();
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <div className="columns mt-5 is-centered">
        <div className="column">
            <Link to={`/dosen/add`} className="button is-success">Tambah Dosen</Link>
            <Link to={`/matkul`} className="button is-success">Mata Kuliah</Link>
            <Link to={`/pengampu_matkul`} className="button is-success">Pengampu Mata Kuliah</Link>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>Id Dosen</th>
                        <th>NIDN</th>
                        <th>Nama Dosen</th>
                        <th>Jenis Kelamin</th>
                        <th>Alamat</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {dosens.map((dosen, index) => (
                    <tr key={dosen.id}>
                        <td>{ dosen.id }</td>
                        <td>{ dosen.nidn }</td>
                        <td>{ dosen.name }</td>
                        <td>{ dosen.gender }</td>
                        <td>{ dosen.address }</td>
                        <td>
                            <Link to={`/dosen/edit/${dosen.id}`} className='button is-small is-info'>Edit</Link>
                            <button onClick={() => deleteDosen(dosen.id)} className='button is-small is-danger'>Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default DosenList;