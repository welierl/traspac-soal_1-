import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Pegawai } from "@prisma/client";
import { request } from "http";
const prisma = new PrismaClient()


export const PATCH = async (request: Request, {params}: {params: {id: string}}) =>{
    const body: Pegawai = await request.json()
    const pegawai = await prisma.pegawai.update({
        where:{
            id: Number(params.id)
        },
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
    return NextResponse.json(pegawai, {status: 200})
}


export const DELETE = async (request: Request, {params}: {params: {id: string}}) =>{
    
    const pegawai = await prisma.pegawai.delete({
        where:{
            id: Number(params.id)
        }
    })
    return NextResponse.json(pegawai, {status: 200})
}