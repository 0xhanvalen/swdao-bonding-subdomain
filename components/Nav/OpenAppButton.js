import { Box, Button, Tooltip, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function OpenAppButton(props) {
  const href = props?.href || "https://app.swdao.org";
  return (
    <Link href={href} isExternal>
      <a>
        <Button
          sx={{
            background: `linear-gradient(rgb(31, 140, 253), rgb(114, 0, 230))`,
            color: `white`,
            fontFamily: `'Jost', sans-serif`,
            fontWeight: `500`,
            transition: `all 0.25s`,
            padding: [`0 1rem`, `3ex 2rem`],
            borderRadius: `2em`,
            border: `2px solid rgb(117,93,242)`,
          }}
          _hover={{
            color: `white`,
            transform: `translateY(-2px)`,
          }}
        >
          <Box>
            <Image
              src="/images/swd-logo-sm-white.png"
              alt="SWD Logo "
              sx={{ maxHeight: `1.5rem`, padding: `0 1rem 0 0` }}
            ></Image>
          </Box>
          Open App
        </Button>
      </a>
    </Link>
  );
}
