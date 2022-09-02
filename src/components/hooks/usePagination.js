import { useState } from "react";

export const usePagination = (data) => {
  //limite de elementos
  const [postsPag, setpostsPag] = useState(20);
  //pag
  const [currentPag, setCurrentPag] = useState(1);

  //limit de num de paginacion
  const [numberLimit, setNumberLimit] = useState(5);
  const [maxPage, setMaxPage] = useState(5);
  const [minPage, setMinPage] = useState(0);

  const lastPost = currentPag * postsPag;
  const firstPost = lastPost - postsPag;
  const currentPosts = data?.slice(firstPost, lastPost);
  //pages
  const pageNumebrs = [];

  for (let i = 1; i <= Math.ceil(data?.length / postsPag); i++) {
    pageNumebrs.push(i);
  }

  const handdlePrev = () => {
    setCurrentPag(currentPag - 1);

    if ((currentPag - 1) % numberLimit === 0) {
      setMaxPage(maxPage - numberLimit);
      setMinPage(minPage - numberLimit);
    }
  };

  const handdleNext = () => {
    setCurrentPag(currentPag + 1);

    if (currentPag + 1 > maxPage) {
      setMaxPage(maxPage + numberLimit);
      setMinPage(minPage + numberLimit);
    }
  };

  const handdlePage = (pageNumebr) => setCurrentPag(pageNumebr);

  return {
    currentPosts,
    setpostsPag,
    postsPag,
    currentPag,
    handdlePrev,
    handdleNext,
    handdlePage,
    maxPage,
    minPage,
    numberLimit,
    pageNumebrs,
  };
};
