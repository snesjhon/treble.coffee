import { minifyItems, ndTable, pfTable } from "./airtable";

export async function getRecords(type: string, year?: string | string[]) {
  const tableType = type === "pf" ? pfTable : ndTable;
  try {
    const items = await tableType(year)
      .select({ sort: [{ field: "Rank", direction: "asc" }] })
      .firstPage();
    return {
      props: {
        records: minifyItems(items),
      },
    };
  } catch (error) {
    return {
      props: {
        err: "Something went wrong 😕",
      },
    };
  }
}
