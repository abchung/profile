import { createContext, useState, useEffect } from 'react';

const WindowContext = createContext();

export const WindowProvider = ({ children }) => {
  const [windowData, setWindowData] = useState(true);

  useEffect(() => {
    window.addEventListener('resize', () => {
      const width = window.innerWidth;
      if (width > 700) {
        setWindowData(true);
      } else {
        setWindowData(false);
      }
      console.log('inside useEffect:' + width);
    });
    return () => {
      window.removeEventListener('resize');
    };
  }, []);

  return (
    <WindowContext.Provider value={{ windowData }}>
      {children}
    </WindowContext.Provider>
  );
};

export default WindowContext;
