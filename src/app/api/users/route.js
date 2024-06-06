import { NextResponse } from "next/server";

export async function GET(){
    // return new Response("hello world");
   const res = await fetch('https://jsonplaceholder.typicode.com/users')
   const data =  await res.json()
    return NextResponse.json({
        message: data
    });
}

export function POST(){
    // return new Response("hello world");
    return NextResponse.json({
        message: "CREANDO DATOS"
    });
}

export function PUT(){
    // return new Response("hello world");
    return NextResponse.json({
        message: "ACTUALIZANDO DATOS"
    });
}

export function DELETE(){
    // return new Response("hello world");
    return NextResponse.json({
        message: "ELIMINANDO DATOS"
    });
}