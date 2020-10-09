import { Box, Container, Divider, Heading } from "@chakra-ui/core";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { GetStaticProps } from "next";
import React from "react";
import BumpTop50 from "../components/BumpTop50";
import ListYear from "../components/ListYear";
import creds from "../creds.json";
import { RSData } from "../interfaces";

export const getStaticProps: GetStaticProps = async () => {
  try {
    const doc = new GoogleSpreadsheet(
      "1rGkhRNC0iTJGStYLGhoSzmz8feMBhCx7mfH9ELX6OkA"
    );
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    const currentSheet = doc.sheetsByIndex[0];
    const allRows = await currentSheet.getRows();
    const filteredRows = allRows.reduce<RSData[]>((a: RSData[], c: any) => {
      const {
        artist = "",
        name = "",
        rs2003 = -1,
        rs2012 = -1,
        rs2020 = -1,
        poster = "",
        genre = "",
        overview = "",
        country = "",
        label = "",
        release_date = "",
      } = c;

      a.push({
        artist,
        title: name,
        rs2003: rs2003 === "" ? -1 : rs2003,
        rs2012: rs2012 === "" ? -1 : rs2012,
        rs2020: rs2020 === "" ? -1 : rs2020,
        poster,
        releaseDate: release_date,
        genre,
        overview,
        country,
        label,
      });
      return a;
    }, []);
    return { props: { sheetsData: filteredRows } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};

function App({ sheetsData }: { sheetsData: RSData[] }) {
  return (
    <>
      <Box bgColor="#d32531" pt={8} pb={2} mb={8}>
        <Container maxW="lg" color="white">
          <Heading size="2xl" mb={2}>
            Analyzing Greatness
          </Heading>
          <Heading size="lg" fontWeight="300" pb={2}>
            Rolling Stone's 500 Greatest Albums over the years.
          </Heading>
        </Container>
      </Box>
      <Container maxW="lg">
        <BumpTop50 data={sheetsData} />
        <Divider my={8} />
        <ListYear data={sheetsData} />
      </Container>
    </>
  );
}

export default App;

// const allData = sheetsData.slice(0, range);
// const bumData = allData.reduce<
//   { id: string; data: { x: number; y: number | null }[] }[]
// >((a, c) => {
//   a.push({
//     id: c.title,
//     data: [
//       // {
//       //   x: 2003,
//       //   y:
//       //     parseInt(c.rs2003) > range || parseInt(c.rs2003) === -1
//       //       ? null
//       //       : parseInt(c.rs2003),
//       // },
//       {
//         x: 2012,
//         y:
//           parseInt(c.rs2012) > range || parseInt(c.rs2012) === -1
//             ? null
//             : parseInt(c.rs2012),
//       },
//       {
//         x: 2020,
//         y:
//           parseInt(c.rs2020) > range || parseInt(c.rs2020) === -1
//             ? null
//             : parseInt(c.rs2020),
//       },
//     ],
//   });
//   return a;
// }, []);// const [range, setRange] = useState(25);
// const [rangeNumber, setRangeNumber] = useState(25);
