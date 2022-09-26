/* for fetch data from backend need useState, useEffect */
import React, { useState, useEffect } from 'react'
/* import axios for api interaction */
import axios from "axios";

/* use link to navigate button into specific url */
import { Link } from 'react-router-dom';

const MatkulList = () => {
    /* create new state for update useState */
    const [matkuls, setMatkul] = useState([]); // initial value empity array: []

    /* to run method, add useEffect */
    useEffect(() => {
        getMatkuls();
    }, []); // [] useEffect running on mounted to DOM

    /* method to fecth data from be */
    const getMatkuls = async () => {
        const response = await axios.get('http://localhost:4400/matkul');
        
        /* array from be set to State = setDosen */
        setMatkul(response.data);

        /* ouput array be to console */
        console.log(response.data);
    };

    /* method to delete Dosen */
    const deleteMatkul = async (id) => {
        try {
            await axios.delete(`http://localhost:4400/matkul/${id}`);
            /* if delete success callback method getDosen */
            getMatkuls();
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <div className="columns mt-5 is-centered">
        <div className="column">
            <Link to={`/dosen`} className="button is-success">Dosen</Link>
            <Link to={`/matkul/add`} className="button is-success">Tambah Mata Kuliah</Link>
            <Link to={`/pengampu_matkul`} className="button is-success">Pengampu Mata Kuliah</Link>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Id Matkul</th>
                        <th>Matkul</th>
                        <th>SKS</th>
                        <th>Semester</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {matkuls.map((matkul, index) => (
                    <tr key={matkul.id}>
                        <td>{ matkul.id }</td>
                        <td>{ matkul.id_matkul }</td>
                        <td>{ matkul.matkul }</td>
                        <td>{ matkul.sks }</td>
                        <td>{ matkul.semester }</td>
                        <td>
                            <Link to={`/matkul/edit/${matkul.id}`} className='button is-small is-info'>Edit</Link>
                            <button onClick={() => deleteMatkul(matkul.id)} className='button is-small is-danger'>Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default MatkulList;