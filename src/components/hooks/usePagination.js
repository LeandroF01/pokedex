import { useCallback, useState } from "react";

export const usePagination = (data) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  let pages = [];

  for (let i = 1; i <= Math.ceil(data.length / postsPerPage); i++) {
    pages.push(i);
  }

  //   const handlePag = useCallback(() => {});

  //   const button = () => {
  //     return (
  //       <div className="pagination">
  //         {pages.map((page, index) => {
  //           return (
  //             <button
  //               key={index}
  //               onClick={() => setCurrentPage(page)}
  //               className={page == currentPage ? "active" : ""}>
  //               {page}
  //             </button>
  //           );
  //         })}
  //       </div>
  //     );
  //   };

  return { pages, setCurrentPage, setPostsPerPage, currentPage };
};
