import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React from "react";
import "./stylePagination.css";

const Pagination = ({
  handdlePrev,
  handdleNext,
  handdlePage,
  maxPage,
  minPage,
  pageNumebrs,
  currentPag,
}) => {
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

export default Pagination;
