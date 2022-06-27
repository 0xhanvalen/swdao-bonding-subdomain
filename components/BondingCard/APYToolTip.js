import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { useColorMode } from "../../contexts/ColorMode";

export default function APYToolTip(props) {
  const { themes, colorTheme, setColorTheme } = useColorMode();

  const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
      console.log(ev.clientX, ev.clientY);
    };

    useEffect(() => {
      window.addEventListener("mousemove", updateMousePosition);

      return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return mousePosition;
  };

  const { x, y } = useMousePosition();

  return (
    <>
      {props?.isShown && (
        <Box
          sx={{
            position: `fixed`,
            left: `${x - 50}px`,
            top: `${y + 10}px`,
            transform: `translateX(-calc(${x}px + 50px))`,
            backgroundColor: `${colorTheme?.background}`,
            color: `${colorTheme?.foreground}`,
            padding: `1em`,
          }}
        >
          <p>Annual: {props.APY}%</p>
          <p>Monthly: {props.MPY}%</p>
          <p>Weekly: {props.WPY}%</p>
        </Box>
      )}
    </>
  );
}
