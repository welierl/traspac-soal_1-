"use client";
import { useState, SyntheticEvent } from "react";
//import { title } from "process";
//import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const AddPegawai = () => {
  const [nip, setNip] = useState("");
  const [nama, setNama] = useState("");
  const [tempat_lahir, setTempatlahir] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tgl_lahir, setTgllahir] = useState("");
  const [j_k, setJK] = useState("");
  const [gol, setGol] = useState("");
  const [eselon, setEselon] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [tempat_tugas, setTempattugas] = useState("");
  const [agama, setAgama] = useState("");
  const [unit_kerja, setUnitkerja] = useState("");
  const [no_hp, setNohp] = useState("");
  const [npwp, setNpwp] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    await axios.post('api/pegawais',{
      nip: Number(nip),
      nama: nama,
      tempat_lahir: tempat_lahir,
      alamat: alamat,
      tgl_lahir: tgl_lahir,
      j_k: j_k,
      gol: gol,
      eselon: eselon,
      jabatan: jabatan,
      tempat_tugas: tempat_tugas,
      agama: agama,
      unit_kerja: unit_kerja,
      no_hp: Number(no_hp),
      npwp: npwp
    })
    setNip("")
    setNama("")
    setTempatlahir("")
    setAlamat("")
    setTgllahir("")
    setJK("")
    setGol("")
    setEselon("")
    setJabatan("")
    setTempattugas("")
    setAgama("")
    setUnitkerja("")
    setNohp("")
    setNpwp
    //router.refresh()
    setIsOpen(false)
  }

  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button className="btn" onClick={handleModal}>
        Add New
      </button>

      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add New data Pegawai</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control w-full">
              <label className="label font-bold">NIP</label>
              <input
                type="text"
                value={nip}
                onChange={(e) => setNip(e.target.value)}
                className="input input-bordered"
                placeholder="NIP"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Nama</label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="input input-bordered"
                placeholder="Nama"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Tempat Lahir</label>
              <input
                type="text"
                value={tempat_lahir}
                onChange={(e) => setTempatlahir(e.target.value)}
                className="input input-bordered"
                placeholder="Tempat Lahir"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Alamat</label>
              <input
                type="text"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                className="input input-bordered"
                placeholder="Alamat"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Tanggal Lahir</label>
              <input
                type="text"
                value={tgl_lahir}
                onChange={(e) => setTgllahir(e.target.value)}
                className="input input-bordered"
                placeholder="Tanggal Lahir(dd-mm-yyyy)"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Jenis Kelamin</label>
              <select className="select select-bordered">
                <option value="" disabled>
                  Pilih Jenis Kelamin
                </option>
                <option value="">L</option>
                <option value="">P</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Gol</label>
              <input
                type="text"
                value={gol}
                onChange={(e) => setGol(e.target.value)}
                className="input input-bordered"
                placeholder="Gol"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Eselon</label>
              <input
                type="text"
                value={eselon}
                onChange={(e) => setEselon(e.target.value)}
                className="input input-bordered"
                placeholder="Eselon"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Jabatan</label>
              <input
                type="text"
                value={jabatan}
                onChange={(e) => setJabatan(e.target.value)}
                className="input input-bordered"
                placeholder="Jabatan"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Tempat Tugas</label>
              <input
                type="text"
                value={tempat_tugas}
                onChange={(e) => setTempattugas(e.target.value)}
                className="input input-bordered"
                placeholder="Tempat Tugas"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Agama</label>
              <input
                type="text"
                value={agama}
                onChange={(e) => setAgama(e.target.value)}
                className="input input-bordered"
                placeholder="Agama"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Unit Kerja</label>
              <input
                type="text"
                value={unit_kerja}
                onChange={(e) => setUnitkerja(e.target.value)}
                className="input input-bordered"
                placeholder="Unit Kerja"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">No. HP</label>
              <input
                type="text"
                value={no_hp}
                onChange={(e) => setNohp(e.target.value)}
                className="input input-bordered"
                placeholder="No. HP"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">NPWP</label>
              <input
                type="text"
                value={npwp}
                onChange={(e) => setNpwp(e.target.value)}
                className="input input-bordered"
                placeholder="NPWP"
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleModal}>
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPegawai;
