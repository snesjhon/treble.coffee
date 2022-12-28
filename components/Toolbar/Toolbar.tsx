import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

export function Toolbar() {
  return (
    <Flex px="10" pt="6" justifyContent="space-between">
      <Heading as="h1" size="lg">
        NeedleDrop 2015
      </Heading>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Filters
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}
