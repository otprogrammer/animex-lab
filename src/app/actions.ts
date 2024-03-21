"use server";

// import supabase from "../../utils/supabase";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { CookieOptions, createServerClient } from "@supabase/ssr";
import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function submitFormAction(prevState: any, formData: FormData,id:string) {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: "", ...options });
        },
      },
    }
  );
  const updates = {
    id: prevState.fieldValues.id,
    // username: username || profile,
    description: formData.get("description"),
    website: formData.get("website"),
    updated_at: new Date().toISOString(),
  };
  console.log(formData);
  try {
    const { data, error } = await supabase
      .from("profiles")
      .upsert({
        id: prevState.fieldValues.id,
        description: formData.get("description"),
        website: formData.get("website"),
        updated_at: new Date().toISOString(),
      })
      .select();
    console.log(data);
    console.log(updates);
    
    revalidatePath("profile");
  } catch (e) {
    console.log(e);
  }
}

export async function DeleteAnimeFromDb(user_id: any, anime_id: string) {
  "use server";
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: "", ...options });
        },
      },
    }
  );
  console.log(user_id, anime_id);
  try {
    await supabase.rpc("delete_fav_anime", {
      user_id: user_id,
      anime_id: anime_id,
    });
    revalidateTag('collection')
    console.log("item removed from database")
  } catch (e) {
    console.log(e);
  }
}
