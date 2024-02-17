import React, { createContext, useContext } from 'react';
import { theme } from '../styles/theme';

const ThemeContext = createContext(theme);

export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;