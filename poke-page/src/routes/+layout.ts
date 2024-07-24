import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from "$env/static/public";
import type { LayoutLoad } from "./$types";
import { createBrowserClient, isBrowser, parse } from "@supabase/ssr";



export const ssr = false;


export const load: LayoutLoad = async ({fetch, data, depends}) => {
    depends ('supabase: auth')

    const supabase = createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY)
    return { }
}