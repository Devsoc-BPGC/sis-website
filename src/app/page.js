import Navbar from "./HomePage/navbar";

import { ChakraProvider } from "@chakra-ui/react";
import Line1 from "./HomePage/line1";
import Line2 from "./HomePage/line2";
import Line3 from "./HomePage/line3";
import Marker from "./HomePage/Marker";

export default function Home() {
  return (
    <>
      <ChakraProvider>
        <Line1 />
        <Marker />
        <Line2 />
        <Line3 />
      </ChakraProvider>
    </>
  );
}
