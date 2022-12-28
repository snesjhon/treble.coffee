import { SimpleGrid } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { Navigation, DataTable, Toolbar } from "../../components";
import { minifyItems, pfTable } from "../../db";
import { TableRecords } from "../../interface/types";

interface Props {
  records: TableRecords;
}

export const getServerSideProps: GetStaticProps<
  Props | { err: string }
> = async (context) => {
  try {
    const items = await pfTable(context.params?.year)
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
};

function PitchforkList({ records }: Props) {
  if (!records) return <div>loading</div>;

  return (
    <>
      <Navigation />
      <Toolbar />
      <SimpleGrid columns={5} gap={10} p={10}>
        <DataTable records={records} />
      </SimpleGrid>
    </>
  );
}

export default PitchforkList;
