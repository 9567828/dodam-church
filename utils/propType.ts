export interface ISearchParams {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export type pageQueryProps = string | string[] | undefined;

export interface ISearchParamsInfo {
  currPage: number;
  listNum: number;
}

export interface IParams {
  params: Promise<{ id: string }>;
}
