import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, {params}: any) {
  try {
    const url = 'https://anitaku.io/wp-admin/admin-ajax.php'
    
    const response = await axios.post(url, {
        action: 'ts_ac_do_search',
        ts_ac_query: 'one piece', // Corrected typo for consistency
      });
      console.log(response)
    return NextResponse.json({ message: "OK", response }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}