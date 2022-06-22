import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { useColorMode } from "../../contexts/ColorMode";
import Link from "next/link";

export const SubNav = (props) => {
  const { themes, colorTheme, setColorTheme } = useColorMode();
  return props?.isVisible ? (
    <Box
      sx={{
        position: [`relative`, `absolute`],
        display: `grid`,
        gridTemplateColumns: [`1fr`, `1fr 1fr 1fr 1fr`],
        border: `1px solid ${colorTheme?.accent1}`,
        borderRadius: `3rem 0 3rem 0`,
        padding: `2rem 3rem`,
        backgroundColor: `${colorTheme?.cardBackground}`,
        left: `50%`,
        transform: `translateX(-50%)`,
        gap: `2rem`,
        color: `${colorTheme?.foreground}`,
        marginTop: `2rem`,
        width: [`100%`, `980px`],
      }}
    >
      <Box sx={{ display: `flex`, flexDirection: `column` }}>
        <Box sx={{ display: `flex`, alignItems: `center`, gap: `1rem` }}>
          <Heading
            sx={{ fontSize: `1.45rem`, color: `${colorTheme?.accent1}` }}
          >
            Indices
          </Heading>
          <Image
            src="/images/purple-gem.png"
            alt="Indices Logo"
            sx={{ height: `3rem` }}
          />
        </Box>

        <Text sx={{ fontSize: `0.8rem`, padding: `.5ex 0` }}>
          DeFi Value Index (Coming Soon)
        </Text>

        <Text sx={{ fontSize: `0.8rem`, padding: `.5ex 0` }}>
          Momentum Indices (Coming Soon)
        </Text>

        <Text sx={{ fontSize: `0.8rem`, padding: `.5ex 0` }}>
          Thematic Indices (Coming Soon)
        </Text>
      </Box>
      <Box sx={{ display: `flex`, flexDirection: `column` }}>
        <Box sx={{ display: `flex`, alignItems: `center`, gap: `1rem` }}>
          <Heading
            sx={{ fontSize: `1.45rem`, color: `${colorTheme?.accent1}` }}
          >
            Strategies
          </Heading>
          <Image
            src="/images/token-swap.png"
            alt="Strategies Logo"
            sx={{ height: `3rem` }}
          />
        </Box>
        <Link href="/products/alpha-portfolio">
          <a>
            <Text
              sx={{ fontSize: `0.8rem`, padding: `.5ex 0`, fontWeight: `700` }}
              _hover={{ textDecoration: `underline`, cursor: `pointer` }}
            >
              Alpha Portfolio
            </Text>
          </a>
        </Link>
        <Link href="/products/quantum-momentum">
          <a>
            <Text
              sx={{ fontSize: `0.8rem`, padding: `.5ex 0`, fontWeight: `700` }}
              _hover={{ textDecoration: `underline`, cursor: `pointer` }}
            >
              Quantum Momentum
            </Text>
          </a>
        </Link>
        <Link href="/products/buy-the-dip">
          <a>
            <Text
              sx={{ fontSize: `0.8rem`, padding: `.5ex 0`, fontWeight: `700` }}
              _hover={{ textDecoration: `underline`, cursor: `pointer` }}
            >
              Buy The Dip
            </Text>
          </a>
        </Link>

        {/* <Text sx={{ fontSize: `0.8rem`, padding: `.5ex 0` }}>
          Discretionary Alpha (Coming Soon)
        </Text>

        <Text sx={{ fontSize: `0.8rem`, padding: `.5ex 0` }}>
          Macro Trend (Coming Soon)
        </Text> */}
      </Box>
      <Box sx={{ display: `flex`, flexDirection: `column` }}>
        <Box sx={{ display: `flex`, alignItems: `center`, gap: `1rem` }}>
          <Heading
            sx={{ fontSize: `1.45rem`, color: `${colorTheme?.accent1}` }}
          >
            Yield Generation
          </Heading>
          <Image
            src="/images/blue-gem.png"
            alt="Yield Funds Logo"
            sx={{ height: `3rem` }}
          />
        </Box>
        <Link href="/products/yield-fund">
          <a>
            <Text
              sx={{ fontSize: `0.8rem`, padding: `.5ex 0`, fontWeight: `700` }}
              _hover={{ textDecoration: `underline`, cursor: `pointer` }}
            >
              Yield Funds
            </Text>
          </a>
        </Link>
        {/* <Link href="/products/bonds">
          <a>
            <Text
              sx={{ fontSize: `0.8rem`, padding: `.5ex 0`, fontWeight: `700` }}
              _hover={{ textDecoration: `underline`, cursor: `pointer` }}
            >
              Bonds →
            </Text>
          </a>
        </Link> */}
        <Text
          sx={{ fontSize: `0.8rem`, padding: `.5ex 0` }}
        >
          Bonds (Coming Soon)
        </Text>
        <Text sx={{ fontSize: `0.8rem`, padding: `.5ex 0` }}>
          Loans (Coming Soon)
        </Text>
      </Box>
      <Box sx={{ display: `flex`, flexDirection: `column` }}>
        <Box sx={{ display: `flex`, alignItems: `center`, gap: `1rem` }}>
          <Heading
            sx={{ fontSize: `1.45rem`, color: `${colorTheme?.accent1}` }}
          >
            SW DAO
          </Heading>
          <Image
            src="/images/token-swd.png"
            alt="swd logo"
            sx={{ height: `3rem` }}
          />
        </Box>
        <Link href="/products/swd-token">
          <a>
            <Text
              sx={{ fontSize: `0.8rem`, padding: `.5ex 0`, fontWeight: `700` }}
              _hover={{ textDecoration: `underline`, cursor: `pointer` }}
            >
              SWD Token
            </Text>
          </a>
        </Link>
        <Link href="/products/sun-wallet">
          <a>
            <Text
              sx={{ fontSize: `0.8rem`, padding: `.5ex 0`, fontWeight: `700` }}
              _hover={{ textDecoration: `underline`, cursor: `pointer` }}
            >
              Sun Wallet
            </Text>
          </a>
        </Link>
        <Link href="/products/sw-ventures">
          <a>
            <Text
              sx={{ fontSize: `0.8rem`, padding: `.5ex 0`, fontWeight: `700` }}
              _hover={{ textDecoration: `underline`, cursor: `pointer` }}
            >
              SW Ventures
            </Text>
          </a>
        </Link>
      </Box>
    </Box>
  ) : null;
};
