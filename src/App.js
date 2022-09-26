/* import react router dom -> to replace <div> menjadi <BrowserRouter>*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddDosen from "./components/dosen/AddDosen";
import DosenList from "./components/dosen/DosenList";
import EditDosen from "./components/dosen/EditDosen";
import MatkulList from "./components/matkul/MatkulList";
import AddMatkul from "./components/matkul/AddMatkul";
import EditMatkul from "./components/matkul/EditMatkul";
import PengampuMatkulList from "./components/pengampu_matkul/PengampuMatkulList";
import AddPengampuMatkul from "./components/pengampu_matkul/AddPengampuMatkul";
import EditPengampuMatkul from "./components/pengampu_matkul/EditPengampuMatkul";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dosen" element={<DosenList />} />
        <Route path="/dosen/add" element={<AddDosen />} />
        <Route path="/dosen/edit/:id" element={<EditDosen />} />
        <Route path="/matkul" element={<MatkulList />} />
        <Route path="/matkul/add" element={<AddMatkul />} />
        <Route path="/matkul/edit/:id" element={<EditMatkul />} />
        <Route path="/pengampu_matkul" element={<PengampuMatkulList />} />
        <Route path="/pengampu_matkul/add" element={<AddPengampuMatkul />} />
        <Route path="/pengampu_matkul/edit/:id" element={<EditPengampuMatkul/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
