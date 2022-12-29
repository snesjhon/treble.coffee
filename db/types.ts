import { TableRecords } from "../interface/types";

export interface RecordProps {
  records: TableRecords;
}

export type RecordResponse = RecordProps | { err: string };
