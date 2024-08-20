-- CreateTable
CREATE TABLE "Pegawai" (
    "id" SERIAL NOT NULL,
    "nip" INTEGER NOT NULL,
    "nama" TEXT NOT NULL,
    "tempat_lahir" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "tgl_lahir" TEXT NOT NULL,
    "j_k" TEXT NOT NULL,
    "gol" TEXT NOT NULL,
    "eselon" TEXT NOT NULL,
    "jabatan" TEXT NOT NULL,
    "tempat_tugas" TEXT NOT NULL,
    "agama" TEXT NOT NULL,
    "unit_kerja" TEXT NOT NULL,
    "no_hp" INTEGER NOT NULL,
    "npwp" TEXT NOT NULL,

    CONSTRAINT "Pegawai_pkey" PRIMARY KEY ("id")
);
