import { Tables, Enums } from "@/database.types";

export type tablesName = "albums" | "sermons" | "users";

export type AlbumRow = Tables<"albums">;
export type SermonRow = Tables<"sermons">;
export type UserRow = Tables<"users">;
export type MemberRow = Tables<"members">;
export type roleEum = Enums<"user_role">;

type adminRole = { admin?: roleEum };
// export type RoleWithMember = MemberRow | adminRole;
export type RoleWithMember = MemberRow & {
  admin?: {
    role: roleEum;
  } | null;
};

/**
 * boardTables
 */
export type boardTables = AlbumRow | SermonRow;
