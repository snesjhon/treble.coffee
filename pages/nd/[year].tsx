import { GetStaticProps } from "next";
import { Content } from "../../components";
import { getRecords, RecordProps, RecordResponse } from "../../db";

export const getServerSideProps: GetStaticProps<RecordResponse> = async (
  context
) => {
  return await getRecords("nd", context.params?.year);
};

function NeedleDropList({ records }: RecordProps) {
  if (!records) return <div>loading</div>;

  return <Content records={records} />;
}

export default NeedleDropList;
