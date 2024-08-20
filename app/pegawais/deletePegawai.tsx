"use client";
import { useState } from "react";
//import { title } from "process";
//import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Pegawai from "./page";

type Pegawai = {
  id: number;
  nip: number;
  nama: string;
  tempat_lahir: string;
  alamat: string;
  tgl_lahir: string;
  j_k: string;
  gol: string;
  eselon: string;
  jabatan: string;
  tempat_tugas: string;
  agama: string;
  unit_kerja: string;
  no_hp: number;
  npwp: string;
};

const DeletePegawai = ({ pegawai }: { pegawai: Pegawai }) => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter;

  const handleDelete = async (pegawaiId: number) => {
    await axios.delete(`/api/pegawais/${pegawaiId}`);
    //router.refresh()
    setIsOpen(false);
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button className="btn btn-error btn-sm" onClick={handleModal}>
        Delete
      </button>

      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Yakin untuk menghapus data? {pegawai.nama}
          </h3>

          <div className="modal-action">
            <button type="button" className="btn" onClick={handleModal}>
              Tidak
            </button>
            <button
              type="button"
              onClick={() => handleDelete(pegawai.id)}
              className="btn btn-primary"
            >
              Ya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePegawai;
