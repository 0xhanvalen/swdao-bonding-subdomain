import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Box, Image, Link, Text } from "@chakra-ui/react";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import OpenAppButton from "./OpenAppButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";
import { useColorMode } from "../../contexts/ColorMode";
import { SubNav } from "./SubNav";

export default function Nav(props) {
  const { themes, colorTheme, setColorTheme } = useColorMode();

  const [rightOffset, setRightOffset] = useState("-100vw");
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const openMenu = () => {
    setRightOffset("0");
  };

  const closeMenu = () => {
    setRightOffset("-100vw");
  };

  return (
    <Box
      sx={{
        width: `100%`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
        padding: [`1rem 5%`, `1% 5%`],
        backgroundColor: `${colorTheme?.navBackground}`,
        zIndex: `1`,
        top: `0`
      }}
    >
      <Box>
        <NavLogo />
      </Box>
      <Box sx={{ display: [`none`, `block`] }}>
        <NavLinks />
      </Box>
      <Box sx={{ display: [`none`, `block`] }}>
        <NavSocialLinks />
      </Box>
      <Box
        sx={{ display: [`flex`, `none`], gap: `12px`, alignItems: `center` }}
      >
        <OpenAppButton />
        <Box
          sx={{ color: `${colorTheme?.foreground}`, fontSize: `2rem` }}
          _hover={{ cursor: `pointer` }}
          onClick={() => (!isMobileNavOpen ? openMenu() : closeMenu())}
        >
          <GiHamburgerMenu />
        </Box>
        <MobileNav rightOffset={rightOffset} closeMenu={() => closeMenu()} />
      </Box>
    </Box>
  );
}

const NavSocialLinks = (props) => {
  const { themes, colorTheme, setColorTheme } = useColorMode();
  const router = useRouter();

  return (
    <Box sx={{ display: `flex`, gap: `1rem` }}>
      {colorTheme?.name === "dark" ? (
        <Image
          sx={{ width: `2rem` }}
          _hover={{ cursor: `pointer` }}
          src="/images/ColorModeIcon-Light.svg"
          alt="Switch Color Mode"
          onClick={() => setColorTheme(themes.light)}
        />
      ) : (
        <Image
          sx={{ width: `2rem` }}
          _hover={{ cursor: `pointer` }}
          src="/images/ColorModeIcon-Dark.svg"
          alt="Switch Color Mode"
          onClick={() => setColorTheme(themes.dark)}
        />
      )}
      <a href="https://dsc.gg/swdao" target="_blank" rel="noreferrer">
      {colorTheme?.name === "dark" ? (
        <Image
          sx={{ width: `2rem` }}
          _hover={{ cursor: `pointer` }}
          src="/images/new/DiscordIcon.svg"
          alt="Discord"
        />
      ) : (
        <Image
          sx={{ width: `2rem` }}
          _hover={{ cursor: `pointer` }}
          src="/images/LM-Discord.png"
          alt="Discord"
        />
      )}
      </a>
      <a href="https://twitter.com/SW__DAO?s=20" target="_blank" rel="noreferrer">
        {colorTheme?.name === "dark" ? (
          <Image
            sx={{ width: `2rem` }}
            _hover={{ cursor: `pointer` }}
            src="/images/new/TwitterIcon.svg"
            alt="Twitter"
          />
        ) : (
          <Image
            sx={{ width: `2rem` }}
            _hover={{ cursor: `pointer` }}
            src="/images/LM-Twitter.png"
            alt="Twitter"
          />
        )}
      </a>
      <a href="https://t.me/sw_dao" target="_blank" rel="noreferrer">
        {colorTheme?.name === "dark" ? (
          <Image
            sx={{ width: `2rem` }}
            _hover={{ cursor: `pointer` }}
            src="/images/new/TelegramIcon.svg"
            alt="Telegram"
          />
        ) : (
          <Image
            sx={{ width: `2rem` }}
            _hover={{ cursor: `pointer` }}
            src="/images/LM-Telegram.png"
            alt="Telegram"
          />
        )}
      </a>
    </Box>
  );
};

const MobileNav = (props) => {
  const { themes, colorTheme, setColorTheme } = useColorMode();
  const [isSubnavOpen, setIsSubNavOpen] = useState();

  return (
    <>
      <Box
        sx={{
          position: `fixed`,
          right: `${props.rightOffset}`,
          backgroundColor:
            colorTheme?.name === "dark"
              ? `rgba(60,0,60,1)`
              : `rgba(255,255,255,1)`,
          top: [`10vh`, `5vh`],
          width: `80vw`,
          height: `100vh`,
          zIndex: `1`,
          display: `flex`,
          flexDirection: `column`,
          padding: `5vh 5vw`,
          gap: `1rem`,
          transition: `all 0.5s`,
          overflowY: `scroll`,
        }}
      >
        <Box sx={{ display: `flex`, flexDirection: `row-reverse` }}>
          <Box
            sx={{
              color: `${colorTheme?.foreground}`,
              fontSize: `2rem`,
              position: `absolute`,
            }}
            _hover={{ cursor: `pointer` }}
            onClick={() => props.closeMenu()}
          >
            <RiCloseFill />
          </Box>
        </Box>
        {["Education", "News"].map((item) => {
          return (
            <a href={`/${item.toLocaleLowerCase()}`} key={item}>
              <Text
                sx={{
                  color: `${colorTheme?.foreground}`,
                  textTransform: `uppercase`,
                  fontFamily: `Jost`,
                  fontSize: `3vmax`,
                  transition: `all 0.25s`,
                  textAlign: `center`,
                }}
                _hover={{
                  cursor: `pointer`,
                  color: `${colorTheme?.foreground}`,
                }}
              >
                {item}
              </Text>
            </a>
          );
        })}
        <Link href="/about" rel="noreferrer">
          <Text
            sx={{
              color: `${colorTheme?.foreground}`,
              textTransform: `uppercase`,
              fontFamily: `Jost`,
              fontSize: `3vmax`,
              transition: `all 0.25s`,
              textAlign: `center`,
            }}
            _hover={{
              cursor: `pointer`,
              color: `${colorTheme?.foreground}`,
            }}
          >
            About
          </Text>
        </Link>
        <Text
          sx={{
            color: `${colorTheme?.foreground}`,
            textTransform: `uppercase`,
            fontFamily: `Jost`,
            fontSize: `3vmax`,
            transition: `all 0.25s`,
            textAlign: `center`,
          }}
          _hover={{
            cursor: `pointer`,
            color: `${colorTheme?.foreground}`,
          }}
          onClick={() => setIsSubNavOpen((v) => !v)}
        >
          Products
        </Text>
        <Box
          sx={{
            display: `flex`,
            alignItems: `center`,
            flexDirection: `column`,
          }}
        >
          <NavSocialLinks />
        </Box>
        <SubNav isVisible={isSubnavOpen} />
        <Box sx={{ minHeight: `20vh` }}></Box>
      </Box>
    </>
  );
};
