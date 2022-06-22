import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { useColorMode } from "../../contexts/ColorMode";


export default function Footer(props) {
  const { themes, colorTheme, setColorTheme } = useColorMode();

  return (
    <Box
      sx={{ backgroundColor: `${colorTheme?.background}`, paddingTop: `5rem` }}
    >
      <Box
        sx={{
          display: `flex`,
          justifyContent: `space-between`,
          alignItems: `center`,
          width: `100%`,
          color: `white`,
          paddingBottom: `2rem`,
          backgroundImage: `/images/new/FooterImage.png`,
          backgroundSize: `cover`,
          backgroundPositionY: `top`,
          backgroundPositionX: `center`,
          paddingTop: `15rem`,
          margin: `0`,
        }}
      >
        <Box
          sx={{
            display: `flex`,
            justifyContent: `space-between`,
            width: [`100%`, `80%`],
            margin: `0 auto`,
            alignItems: [`center`, `flex-end`],
            flexDirection: [`column-reverse`, `row`],
            gap: [`1rem`, `0`],
          }}
        >
          <Box sx={{ fontSize: `12.8px`, textAlign: `left` }}>
            <Text>Copyright {new Date().getFullYear()} SW DAO</Text>
            <Text>All Rights Reserved</Text>
            <a href="/admin/admin" alt="Twitter">
              <Text sx={{ textDecoration: `underline` }}>Admin Panel</Text>
            </a>
          </Box>
          <Box>
            <Image
              src="/images/swd-logo-vertical-white.png"
              sx={{ width: `5rem`, transform: [`0`, `translateX(1rem)`] }}
              alt="Logo"
            />
          </Box>
          <Box sx={{ display: `flex`, flexDirection: `column`, gap: `12px` }}>
            <Box
              sx={{
                display: `flex`,
                flexDirection: `row`,
                fontSize: `2rem`,
                gap: `12px`,
              }}
            >
              <a href="https://dsc.gg/swdao" alt="GitHub">
                <Image
                  src="/images/new/DiscordIcon.svg"
                  alt="Discord"
                  sx={{ width: `2rem` }}
                />
              </a>
              <a href="https://twitter.com/SW__DAO?s=20" alt="GitHub">
                <Image
                  src="/images/new/TwitterIcon.svg"
                  alt="Twitter"
                  sx={{ width: `2rem` }}
                />
              </a>
              <a href="https://medium.com/@sw_dao" alt="GitHub">
                <Image
                  src="/images/new/MediumIcon.svg"
                  alt="Medium"
                  sx={{ width: `2rem` }}
                />
              </a>
              <a href="https://t.me/sw_dao" alt="Twitter">
                <Image
                  src="/images/new/TelegramIcon.svg"
                  alt="Telegram"
                  sx={{ width: `2rem` }}
                />
              </a>
            </Box>
            <Box
              sx={{
                display: `flex`,
                flexDirection: `row`,
                fontSize: `2rem`,
                gap: `12px`,
              }}
            >
              <a href="https://sw-dao.gitbook.io/sw-dao/" alt="GitHub">
                <Image
                  src="/images/new/GitbookIcon.svg"
                  alt="Gitbook"
                  sx={{ width: `2rem` }}
                />
              </a>
              <a href="https://github.com/sw-dao" alt="GitHub">
                <Image
                  src="/images/new/GithubIcon.svg"
                  alt="Github"
                  sx={{ width: `2rem` }}
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCGF2DpEMPlpuZ14Nf0lxaCQ"
                alt="GitHub"
              >
                <Image
                  src="/images/new/YoutubeIcon.svg"
                  alt="Youtube"
                  sx={{ width: `2rem` }}
                />
              </a>
              <a href="https://vote.swdao.org/" alt="Twitter">
                <Image
                  src="/images/new/SnapshotIcon.svg"
                  alt="Snapshot"
                  sx={{ width: `2rem` }}
                />
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
