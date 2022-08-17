import { useLayoutEffect, useState } from 'react';

function useWindowSize() {
  const [size, setSize] = useState({});
  useLayoutEffect(() => {
    function updateSize() {
      setSize({ width: window.innerWidth, heigth: window.innerHeight });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export default useWindowSize;