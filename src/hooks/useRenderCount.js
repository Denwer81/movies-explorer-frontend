import { useState, useEffect } from "react";
import useWindowSize from './useWindowSize';
import { desktopRender, tabletRender, mobileRender } from '../utils/constants'

export function useRenderCount() {
  const [count, setCount] = useState(0);
  const [moreCards, setMoreCards] = useState(0);
  const { width } = useWindowSize();

  const countOfCards = () => {
    if (width >= desktopRender.widthSize) {
      setCount(desktopRender.column * desktopRender.row);
      setMoreCards(desktopRender.column);
    } else if (width >= tabletRender.widthSize) {
      setCount(tabletRender.column * tabletRender.row);
      setMoreCards(tabletRender.column);
    } else {
      setCount(mobileRender.column * mobileRender.row);
      setMoreCards(mobileRender.column);
    }
  };

  useEffect(() => {
    countOfCards();
  }, [width]);

  function handleOpenMore() {
    setCount((...prev) => +prev + moreCards);
  }
  return {
    count,
    handleOpenMore,
  }
}
