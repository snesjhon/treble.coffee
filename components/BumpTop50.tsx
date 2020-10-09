import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/core";
import { BumpInputSerie, ResponsiveBump } from "@nivo/bump";
import React, { useState } from "react";
import { RSData } from "../interfaces";

function BumpTop50({ data }: { data: RSData[] }) {
  const [range, setRange] = useState(25);
  const [rangeNumber, setRangeNumber] = useState(25);
  const allData = data.slice(0, range);
  const bumData = allData.reduce<
    { id: string; data: { x: number; y: number | null }[] }[]
  >((a, c) => {
    a.push({
      id: c.title,
      data: [
        // {
        //   x: 2003,
        //   y:
        //     parseInt(c.rs2003) > range || parseInt(c.rs2003) === -1
        //       ? null
        //       : parseInt(c.rs2003),
        // },
        {
          x: 2012,
          y:
            parseInt(c.rs2012) > range || parseInt(c.rs2012) === -1
              ? null
              : parseInt(c.rs2012),
        },
        {
          x: 2020,
          y:
            parseInt(c.rs2020) > range || parseInt(c.rs2020) === -1
              ? null
              : parseInt(c.rs2020),
        },
      ],
    });
    return a;
  }, []);
  return (
    <Box>
      <Text fontStyle="italic" fontWeight="500">
        2012 vs 2020
      </Text>
      <Flex pb={2}>
        <Heading size="lg" borderBottom="4px solid #d32531" pb={2}>
          Top 50 Change
        </Heading>
      </Flex>
      <Text>
        The top 50 mostly stayed the same for 2003 vs 2012. But had a dramatic
        shift in 2020
      </Text>
      <br />
      <AspectRatio
        ratio={16 / 9}
        bgColor="rgba(255,255,255,0.95)"
        color="gray.500"
      >
        <ResponsiveBump
          data={bumData as BumpInputSerie[]}
          margin={{ top: 40, right: 100, bottom: 40, left: 150 }}
          colors={{ scheme: "dark2" }}
          // @ts-ignore
          lineWidth={2}
          activeLineWidth={5}
          inactiveLineWidth={2}
          inactiveOpacity={0.15}
          pointSize={5}
          activePointSize={16}
          inactivePointSize={0}
          pointColor={{ theme: "background" }}
          pointBorderWidth={3}
          activePointBorderWidth={3}
          pointBorderColor={{ from: "serie.color" }}
          startLabel={(series) => {
            return series.id;
          }}
          axisLeft={{
            tickSize: 0,
          }}
          axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendPosition: "middle",
            legendOffset: -36,
          }}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendPosition: "middle",
            legendOffset: 32,
          }}
          // endLabel={() => <div>asd</div>}
          // axisLeft={{
          //   tickSize: 5,
          //   tickPadding: 5,
          //   tickRotation: 0,
          //   legend: "Ranking",
          //   legendPosition: "middle",
          //   legendOffset: -40,
          // }}
        />
      </AspectRatio>
      <Text>Threshold</Text>
      <Text>{rangeNumber}</Text>
      <Slider
        defaultValue={25}
        onChangeEnd={(val) => setRange(val)}
        onChange={(val) => setRangeNumber(val)}
        min={2}
        max={50}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  );
}

export default BumpTop50;
