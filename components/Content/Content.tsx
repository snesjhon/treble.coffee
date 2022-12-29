import { Box, SimpleGrid } from "@chakra-ui/react";
import { RecordProps } from "../../db";
import { DataTable } from "../DataTable";
import { Navigation } from "../Navigation";
import { Toolbar } from "../Toolbar";

export function Content({ records }: RecordProps) {
  return (
    <Box bg="blackAlpha.50">
      <Navigation />
      <Toolbar />
      <SimpleGrid columns={5} gap={10} p={10}>
        <DataTable records={records} />
      </SimpleGrid>
    </Box>
  );
}
