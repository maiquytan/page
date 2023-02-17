import { useEffect, useState } from 'react'

const useViewport = () => {
  const [size, setSize] = useState([0, 0]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleWindowResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', handleWindowResize);
    handleWindowResize();
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [typeof window]);

  return size;
};

export default useViewport;
