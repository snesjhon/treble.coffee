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
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  CardFooter,
  Grid,
  SimpleGrid,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { TableRecord, TableRecords } from "../../interface/types";

interface Props {
  records: TableRecords;
}

export function DataTable({ records }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [current, setCurrent] = useState<TableRecord | null>(null);

  const openModal = (record: TableRecord) => {
    setCurrent(record);
    onOpen();
  };

  const closeModal = () => {
    setCurrent(null);
    onClose();
  };

  return (
    <>
      {records.map((record) => (
        <Card
          maxW="sm"
          key={record.id}
          bg="white"
          onClick={() => openModal(record)}
          _hover={{ bg: "gray.100", cursor: "pointer" }}
        >
          <CardHeader pb={4}>
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
          <Image
            border="1px"
            borderColor="gray.100"
            objectFit="cover"
            src={record.fields.Art}
            alt="Green double couch with wooden legs"
          />
          <CardBody>
            <Stack spacing="3">
              <Text noOfLines={3}>{record.fields.Review}</Text>
            </Stack>
          </CardBody>
        </Card>
      ))}
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        // isCentered
        scrollBehavior="outside"
      >
        <ModalOverlay />
        <ModalContent>
          {current !== null && (
            <>
              <ModalHeader pb={3}>
                <ModalCloseButton />
                <Heading size="md">{current.fields.Name}</Heading>
                <Text fontWeight="normal">{current.fields.Artist}</Text>
              </ModalHeader>
              <ModalBody>
                <Image src={current.fields.Art} w="full" />
                <Accordion allowToggle>
                  <AccordionItem>
                    <AccordionButton
                      flex={1}
                      justifyContent="space-between"
                      fontSize="lg"
                    >
                      Review
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      {current.fields.Review}
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Section 2 title
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                {/* <Stack>
                  <Heading size="md">Review</Heading>
                  <Text>{current.fields.Review}</Text>
                </Stack> */}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
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
