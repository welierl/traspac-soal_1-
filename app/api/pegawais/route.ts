import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Pegawai } from "@prisma/client";
import { request } from "http";
const prisma = new PrismaClient()

export const POST = async (request: Request) =>{
    const body : Pegawai = await request.json()
    const pegawai = await prisma.pegawai.create({
        data:{
            nip: body.nip,
            nama: body.nama,
            tempat_lahir: body.tempat_lahir,
            alamat: body.alamat,
            tgl_lahir: body.tgl_lahir,
            j_k: body.j_k,
            gol: body.gol,
            eselon: body.eselon,
            jabatan: body.jabatan,
            tempat_tugas: body.tempat_tugas,
            agama: body.agama,
            unit_kerja: body.unit_kerja,
            no_hp: body.no_hp,
            npwp: body.npwp
        }
    })
    return NextResponse.json(pegawai, {status: 201})
}