// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import { SupabaseClient } from "@supabase/supabase-js";
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			supabase:
			session:
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
