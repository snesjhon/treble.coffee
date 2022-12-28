import {
  Text,
  Card,
  CardHeader,
  Flex,
  Circle,
  Heading,
  CardBody,
  Stack,
  Box,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { TableRecords } from "../../interface/types";

interface Props {
  records: TableRecords;
}

export function DataTable({ records }: Props) {
  return (
    <>
      {records.map((record) => (
        <Card maxW="sm" key={record.id}>
          <CardHeader pb={1}>
            <Flex flex="1" gap="4" alignItems="center">
              <Circle size="30px" bg="blue.600" color="white">
                <Heading size="sm" noOfLines={1}>
                  {record.fields.Rank}
                </Heading>
              </Circle>
              <Box>
                <Heading size="sm" noOfLines={1}>
                  {record.fields.Name}
                </Heading>
                <Text>{record.fields.Artist}</Text>
              </Box>
            </Flex>
          </CardHeader>
          <CardBody>
            <Image
              src={record.fields.Art}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Text noOfLines={3}>{record.fields.Review}</Text>
            </Stack>
          </CardBody>
        </Card>
      ))}
    </>
  );
}
//   {/* <Divider />
//   <CardFooter>
//     <ButtonGroup spacing="2">
//       <Button variant="solid" colorScheme="blue">
//         Buy now
//       </Button>
//       <Button variant="ghost" colorScheme="blue">
//         Add to cart
//       </Button>
//     </ButtonGroup>
//   </CardFooter> */}
