import {
  Box,
  Flex,
  IconButton,
  Collapse,
  useColorModeValue,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { DesktopNavigation, MobileNavigation } from "./components";
import { LogoIcon } from "../Icons";

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Pitchfork",
    children: [
      {
        label: "2022",
        href: "/pf/2022",
      },
      {
        label: "2021",
        href: "/pf/2021",
      },
      {
        label: "2020",
        href: "/pf/2020",
      },
      {
        label: "2019",
        href: "/pf/2019",
      },
      {
        label: "2018",
        href: "/pf/2018",
      },
      {
        label: "2017",
        href: "/pf/2017",
      },
      {
        label: "2016",
        href: "/pf/2016",
      },
      {
        label: "2015",
        href: "/pf/2015",
      },
    ],
  },
  {
    label: "NeedleDrop",
    children: [
      {
        label: "2022",
        href: "/nd/2022",
      },
      {
        label: "2021",
        href: "/nd/2021",
      },
      {
        label: "2020",
        href: "/nd/2020",
      },
      {
        label: "2019",
        href: "/nd/2019",
      },
      {
        label: "2018",
        href: "/nd/2018",
      },
      {
        label: "2017",
        href: "/nd/2017",
      },
      {
        label: "2016",
        href: "/nd/2016",
      },
      {
        label: "2015",
        href: "/nd/2015",
      },
    ],
  },
  {
    label: "Stats",
    href: "#",
  },
  { label: "About", href: "/" },
];

export function Navigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg="white">
      <Flex
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 10 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <LogoIcon boxSize={6} mr="2" />
          <Text fontSize="lg">treble.coffee</Text>
        </Flex>
        <Flex display={{ base: "none", md: "flex" }}>
          <DesktopNavigation />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNavigation />
      </Collapse>
    </Box>
  );
}
