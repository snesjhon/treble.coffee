import { FieldSet } from "airtable";

export interface TableRecord {
  id: string;
  fields: FieldProps;
}

export type TableRecords = TableRecord[];

export interface FieldProps extends FieldSet {
  Name: string;
  Artist: string;
  Art: string;
  Review: string;
  Rank: number;
}
