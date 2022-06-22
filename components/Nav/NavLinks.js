import { useState } from "react";
import { Box, Text, Heading, Image } from "@chakra-ui/react";
import Link from "next/link";
import OpenAppButton from "./OpenAppButton";
import { useColorMode } from "../../contexts/ColorMode";
import { SubNav } from "./SubNav";

export default function NavLinks(props) {
  const { themes, colorTheme, setColorTheme } = useColorMode();
  const [isSubnavOpen, setIsSubNavOpen] = useState();

  return (
    <>
    <Box sx={{ display: `flex`, alignItems: `center`, gap: `3rem` }}>
      <Text
        sx={{
          color: `${colorTheme?.accent1}`,
          textTransform: `uppercase`,
          fontFamily: `Jost`,
          transition: `all 0.25s`,
        }}
        _hover={{
          cursor: `pointer`,
          color: `${colorTheme?.accent2}`,
        }}
        onClick={() => setIsSubNavOpen((v) => !v) } //v for previous value
      >
        Products
      </Text>
      {["Education", "News"].map((item) => {
        return (
          <Link
            href={`/${item.toLocaleLowerCase()}`}
            passHref={true}
            key={item}
          >
            <a>
              <Text
                sx={{
                  color: `${colorTheme?.accent1}`,
                  textTransform: `uppercase`,
                  fontFamily: `Jost`,
                  transition: `all 0.25s`,
                }}
                _hover={{
                  cursor: `pointer`,
                  color: `${colorTheme?.accent2}`,
                }}
              >
                {item}
              </Text>
            </a>
          </Link>
        );
      })}
      <Link href={`/about`} passHref={true} key={"About"}>
        <a>
          <Text
            sx={{
              color: `${colorTheme?.accent1}`,
              textTransform: `uppercase`,
              fontFamily: `Jost`,
              transition: `all 0.25s`,
              textAlign: `center`,
            }}
            _hover={{
              cursor: `pointer`,
              color: `${colorTheme?.accent2}`,
            }}
          >
            About
          </Text>
        </a>
      </Link>
      <OpenAppButton />
    </Box>
    <SubNav isVisible={isSubnavOpen} />
    </>
  );
}

