import { PrismaClient } from "@prisma/client";
import AddPegawai from "./addPegawai";
import DeletePegawai from "./deletePegawai";
import UpdatePegawai from "./updatePegawai";
const prisma = new PrismaClient();

const getPegawais = async () => {
  const res = await prisma.pegawai.findMany({
    select: {
      id: true,
      nip: true,
      nama: true,
      tempat_lahir: true,
      alamat: true,
      tgl_lahir: true,
      j_k: true,
      gol: true,
      eselon: true,
      jabatan: true,
      tempat_tugas: true,
      agama: true,
      unit_kerja: true,
      no_hp: true,
      npwp: true,
    },
  });
  return res;
};

const Pegawai = async () => {
  const pegawais = await getPegawais();

  return (
    <div>
        <div className="mb-2">
                <AddPegawai/>
        </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>No</th>
            <th>NIP</th>
            <th>Nama</th>
            <th>Tempat Lahir</th>
            <th>Alamat</th>
            <th>Tgl Lahir</th>
            <th>L/P</th>
            <th>Gol</th>
            <th>Eselon</th>
            <th>Jabatan</th>
            <th>Tempat Tugas</th>
            <th>Agama</th>
            <th>Unit Kerja</th>
            <th>No. HP</th>
            <th>NPWP</th>
          </tr>
        </thead>
        <tbody>
          {pegawais.map((pegawai, index) => (
            <tr key={pegawai.id}>
              <td>{index + 1}</td>
              <td>{pegawai.nip}</td>
              <td>{pegawai.nama}</td>
              <td>{pegawai.tempat_lahir}</td>
              <td>{pegawai.alamat}</td>
              <td>{pegawai.tgl_lahir}</td>
              <td>{pegawai.j_k}</td>
              <td>{pegawai.gol}</td>
              <td>{pegawai.eselon}</td>
              <td>{pegawai.jabatan}</td>
              <td>{pegawai.tempat_tugas}</td>
              <td>{pegawai.agama}</td>
              <td>{pegawai.unit_kerja}</td>
              <td>{pegawai.no_hp}</td>
              <td>{pegawai.npwp}</td>
              <td className="flex justify-center space-x-1">
                <UpdatePegawai pegawai={pegawai} />
                <DeletePegawai pegawai={pegawai} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pegawai;
