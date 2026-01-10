import { Tables, Enums } from "@/database.types";

export type tablesName = "albums" | "sermons" | "users";

export type AlbumRow = Tables<"albums">;
export type SermonRow = Tables<"sermons">;
export type UserRow = Tables<"users">;
export type MemberRow = Tables<"members">;
export type roleEum = Enums<"user_role">;

export type RoleWithMember = MemberRow & {
  admin: {
    role: roleEum;
  } | null;
  avatar_url: string | null;
};

/**
 * boardTables
 */
export type boardTables = AlbumRow | SermonRow;

export type MemberAddPaylod = {
  created_at: string;
  updated_at: string;
  zonecode?: string | null;
  addr?: string | null;
  addr_detail?: string | null;
  avatar?: string | null;
  duty?: string | null;
  email: string;
  name: string;
  phone: string;
  position?: string | null;
  avatar_url?: string | null;
};

export type MemberEditPaylod = {
  payload: {
    updated_at: string;
    zonecode?: string | null;
    addr?: string | null;
    addr_detail?: string | null;
    duty?: string | null;
    email?: string;
    name?: string;
    phone?: string;
    position?: string | null;
    avatar_url?: string | null;
  };
  role?: roleEum;
  uid: string;
  memId: string;
  avatrImg?: File | null;
};
