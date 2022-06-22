import { Box, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useColorMode } from "../../contexts/ColorMode";

export default function NavLogo(props) {
  const {themes, colorTheme, setColorTheme} = useColorMode();

  return (
    <Link href="/" passHref={true}>
      <a>
        <Box
          sx={{ display: `flex`, flexDirection: `row`, alignItems: `center` }}
          _hover={{ cursor: `pointer` }}
        >
          <Image
            src={`/images/swd-logo.png`}
            alt="SW DAO"
            sx={{ maxHeight: [`40px`, `80px`] }}
          />
          <Text
            sx={{
              fontSize: `1.25rem`,
              color: `${colorTheme?.foreground}`,
              padding: `0 1rem`,
              fontWeight: `700`,
              fontFamily: `'Jost', sans-serif`,
            }}
          >
            SW DAO
          </Text>
        </Box>
      </a>
    </Link>
  );
}
