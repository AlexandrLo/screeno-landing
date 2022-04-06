import React from "react";
import {
  HStack,
  Container,
  Wrap,
  WrapItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import LogoAndroid from "assets/logo-android.svg";
import LogoAndroidTv from "assets/logo-android-tv.svg";
import LogoAppleTv from "assets/logo-apple-tv.svg";
import LogoAppleWatch from "assets/logo-apple-watch.svg";
import LogoIphone from "assets/logo-iphone.svg";

function LogoCloud() {
  const svgHeight = useBreakpointValue([
    "16px",
    "20px",
    "24px",
    "28px",
    "32px",
  ]);
  return (
    <Container
      maxW={{ base: "container.sm", xl: "container.xl" }}
      py={{ base: "3.125rem", md: "4.25rem" }}
    >
      <Wrap
        spacing={{ base: "3rem", md: "3rem" }}
        justify={{ base: "center", xl: "space-between" }}
      >
        <WrapItem>
          <LogoAppleTv width="100%" height={svgHeight} />
        </WrapItem>
        <WrapItem>
          <LogoAndroidTv width="100%" height={svgHeight} />
        </WrapItem>
        <WrapItem>
          <LogoAppleWatch width="100%" height={svgHeight} />
        </WrapItem>
        <WrapItem>
          <LogoIphone width="100%" height={svgHeight} />
        </WrapItem>
        <WrapItem>
          <LogoAndroid width="100%" height={svgHeight} />
        </WrapItem>
      </Wrap>
    </Container>
  );
}

export default LogoCloud;
