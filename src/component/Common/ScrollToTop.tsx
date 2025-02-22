import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollToTopProps {
  scrollContainerRef: React.RefObject<HTMLDivElement>;
}

const ScrollToTop = ({ scrollContainerRef }: ScrollToTopProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
      });
    }
  }, [pathname, scrollContainerRef]);

  return null;
};

export default ScrollToTop;
