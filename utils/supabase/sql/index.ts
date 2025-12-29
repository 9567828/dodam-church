import { Tables } from "@/database.types";

export type tablesName = "albums" | "sermons" | "users";

export type AlbumRow = Tables<"albums">;
export type SermonRow = Tables<"sermons">;
export type UserRow = Tables<"users">;

/**
 * boardTables
 */
export type boardTables = AlbumRow | SermonRow;
