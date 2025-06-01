export interface IRowData {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  city: string;
  date: number;
}

export type TTableData = IRowData[];