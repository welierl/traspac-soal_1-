"use client";
import { useState, SyntheticEvent } from "react";
//import { title } from "process";
//import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

type Pegawai = {
    id: number
    nip: number
    nama: string
    tempat_lahir: string
    alamat: string
    tgl_lahir: string
    j_k: string
    gol: string
    eselon: string
    jabatan: string
    tempat_tugas: string
    agama: string
    unit_kerja: string
    no_hp: number
    npwp: string
}

const UpdatePegawai = ({pegawai}: {pegawai: Pegawai}) => {
  const [nip, setNip] = useState(pegawai.nip);
  const [nama, setNama] = useState(pegawai.nama);
  const [tempat_lahir, setTempatlahir] = useState(pegawai.tempat_lahir);
  const [alamat, setAlamat] = useState(pegawai.alamat);
  const [tgl_lahir, setTgllahir] = useState(pegawai.tgl_lahir);
  const [j_k, setJK] = useState(pegawai.j_k);
  const [gol, setGol] = useState(pegawai.gol);
  const [eselon, setEselon] = useState(pegawai.eselon);
  const [jabatan, setJabatan] = useState(pegawai.jabatan);
  const [tempat_tugas, setTempattugas] = useState(pegawai.tempat_tugas);
  const [agama, setAgama] = useState(pegawai.agama);
  const [unit_kerja, setUnitkerja] = useState(pegawai.unit_kerja);
  const [no_hp, setNohp] = useState(pegawai.no_hp);
  const [npwp, setNpwp] = useState(pegawai.npwp);

  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter

  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault()
    await axios.patch(`api/pegawais/${pegawai.id}`,{
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
    
    //router.refresh()
    setIsOpen(false)
  }

  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button className="btn btn-info btn-sm" onClick={handleModal}>
        Edit
      </button>

      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update {pegawai.nama}</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control w-full">
              <label className="label font-bold">NIP</label>
              <input
                type="text"
                value={nip}
                onChange={(e) => setNip(Number(e.target.value))}
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
                onChange={(e) => setNohp(Number(e.target.value))}
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
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePegawai;
