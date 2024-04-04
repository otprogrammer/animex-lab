import { NextRequest, NextResponse } from "next/server";
import { pool } from "../../../../../db";

export async function GET(request: NextRequest, {params}: any) {
//   const anime = params.anime;

const result = {}
console.log(params)
  try {
    const data =  await pool.query('SELECT * FROM anime WHERE anime_id=$1 OR mal_id=$2 OR title=$3 OR enime_id=$4', [params.animeid,params.animeid,params.animeid,params.animeid]) 
     console.log(data)
      return NextResponse.json(data.rows, { status: 200 });
  
  
    // const result = await fetchData(id);
    // return NextResponse.json({ message: "OK", result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}