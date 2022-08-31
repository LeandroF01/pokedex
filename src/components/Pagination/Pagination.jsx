import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import "./stylePagination.css";

export const Pagination = ({
  postsPag,
  totalPosts,
  handdlePage,
  currentPag,
  setCurrentPag,
}) => {
  const [numberLimit, setNumberLimit] = useState(5);
  const [maxPage, setMaxPage] = useState(5);
  const [minPage, setMinPage] = useState(0);

  const pageNumebrs = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPag); i++) {
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

  const numbersPage = pageNumebrs.map((num) => {
    if (num < maxPage + 1 && num > minPage) {
      return (
        <li className="pagination__num" key={num}>
          <a
            onClick={() => handdlePage(num)}
            className={`pagination__link ${
              currentPag == num ? "active" : null
            }`}>
            {num}
          </a>
        </li>
      );
    }
    return null;
  });

  let incrementBtn = null;
  if (pageNumebrs.length > maxPage) {
    incrementBtn = (
      <button
        onClick={handdleNext}
        disabled={
          currentPag == pageNumebrs[pageNumebrs.length - 1] ? true : false
        }
        className="direct_pag">
        &hellip;
      </button>
    );
  }

  let decrementtBtn = null;
  if (pageNumebrs.length > minPage) {
    decrementtBtn = (
      <button
        onClick={handdlePrev}
        className={`direct_pag ${currentPag < 6 ? "diplaynone" : null}`}>
        &hellip;
      </button>
    );
  }

  return (
    <nav>
      <ul className="pagination">
        <li>
          <button
            onClick={handdlePrev}
            disabled={currentPag == pageNumebrs[0] ? true : false}
            className="direct_pag">
            <LeftOutlined />
          </button>
        </li>
        {decrementtBtn}
        {numbersPage}
        {incrementBtn}

        <li>
          <button
            onClick={handdleNext}
            disabled={
              currentPag == pageNumebrs[pageNumebrs.length - 1] ? true : false
            }
            className="direct_pag">
            <RightOutlined />
          </button>
        </li>
      </ul>
    </nav>
  );
};
