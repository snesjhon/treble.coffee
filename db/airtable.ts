import Airtable, { Record, Records } from "airtable";
import { FieldProps, TableRecord } from "../interface/types";

Airtable.configure({ apiKey: process.env.AIRTABLE_API_KEY });

const ndBase = Airtable.base(process.env.AIRTABLE_ND_BASE_ID!);
const ndTable = (year: number) => ndBase<FieldProps>(`nd-${year}`);

const pfBase = Airtable.base(process.env.AIRTABLE_PF_BASE_ID!);
const pfTable = (year?: string | string[]) => pfBase<FieldProps>(`pf-${year}`);

const minifyItems = (records: Records<FieldProps>) =>
  records.map((record) => getMinifiedItem(record));

const getMinifiedItem = (record: Record<FieldProps>): TableRecord => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

export { ndTable, pfTable, minifyItems };
