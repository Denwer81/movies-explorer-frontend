import { useLayoutEffect, useState } from 'react';

function useWindowSize() {
  const [size, setSize] = useState({});
  useLayoutEffect(() => {
    function updateSize() {
      setTimeout(() => {
        setSize({ width: window.innerWidth, heigth: window.innerHeight });
      }, 100)
    }

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export default useWindowSize;