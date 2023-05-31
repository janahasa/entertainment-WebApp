import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { styled } from '@mui/material';

const DarkMode = styled('div')({
  width: '80px',
  height: '40px',
  marginBottom: '22px',
});

const DarkModeLabel = styled('label')({
  width: '100%',
  height: '100%',
  position: 'relative',
  display: 'block',
  backgroundColor: 'var(--bgContainer)',
  borderRadius: '20px',
  boxShadow: 'inset 0px 3px 7px rgba(0, 0, 0, 0.4), inset 0px -3px 7px rgba(255, 255, 255, 0.4)',
  cursor: 'pointer',
  transition: '0.3s',
  "&::after": {
    transition: '0.3s',
    content: '""',
    position: 'absolute',
    top: '10px',
    left: '10px',
    width: '20px',
    height: '20px',
    background: 'linear-gradient(180deg, #ffcc89, #d8860b)',
    borderRadius: '20px',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
  },
});

const DarkModeInput = styled('input')({
  width: '0',
  height: '0',
  visibility: 'hidden',
  "&:checked + label": {
    background: 'var(--bgContainer)',
  },
  "&:checked + label::after": {
    left: '43px',
    background: 'linear-gradient(180deg, #777, #3a3a3a)',
  },
});

const Moon = styled('i')({
  width: '18px',
  height: '18px',
  position: 'absolute',
  top: '13px',
  left: '47px',
  color: '#7e7e7e',
  transition: '0.3s',
  zIndex: '100',
});

const Sun = styled('i')({
  width: '18px',
  height: '18px',
  position: 'absolute',
  top: '13px',
  left: '13px',
  color: '#fff',
  transition: '0.3s',
  zIndex: '100',
});

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <DarkMode >
      <DarkModeInput type="checkbox" id="dark-mode" onChange={toggleTheme} checked={theme === "dark"} />
      <DarkModeLabel htmlFor="dark-mode">
        <Moon className="fas fa-moon"></Moon>
        <Sun className="fas fa-sun"></Sun>
      </DarkModeLabel>
    </DarkMode>
  );
};

export default DarkModeToggle;
