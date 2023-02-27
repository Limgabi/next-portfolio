import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import styled from "styled-components";

function DarkModeToggleButton() {
  const { theme, setTheme } = useTheme();

  return (
    <Toggle>
      {theme === "light" ? (
        <MdLightMode onClick={() => setTheme("dark")} />
      ) : (
        <MdDarkMode onClick={() => setTheme("light")} />
      )}
    </Toggle>
  );
}

export default DarkModeToggleButton;

const Toggle = styled.div`
  display: inline-block;
`
