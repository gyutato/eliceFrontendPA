import styled from '@emotion/styled';
import React from 'react';
import ArrowButton from '../atoms/Buttons/ArrowButton';
import PageButton from '../atoms/Buttons/PageButton';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
`;
type PaginationProps = {
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  course_count: number;
};

const Pagination = (props: PaginationProps) => {
  const { offset, setOffset, course_count } = props;
  const currentPage: number = Math.floor(offset / 20) + 1;
  const totalPage: number = Math.ceil(course_count / 20);

  const onPageButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setOffset(target.textContent ? (parseInt(target.textContent) - 1) * 20 : 0);
  };

  const renderPageButtons = (
    currentPage: number,
    totalPages: number,
  ): JSX.Element[] => {
    const pageButtons = [];
    if (currentPage < 5) {
      for (let i = 1; i <= Math.min(currentPage + 4, totalPages); i++) {
        pageButtons.push(
          <PageButton
            page={i}
            isClicked={i === currentPage}
            key={i}
            onClick={onPageButtonClick}
          />,
        );
      }
    } else {
      for (
        let i = currentPage - 4;
        i <= Math.min(currentPage + 4, totalPages);
        i++
      ) {
        pageButtons.push(
          <PageButton
            page={i}
            isClicked={i === currentPage}
            key={i}
            onClick={onPageButtonClick}
          />,
        );
      }
    }
    return pageButtons;
  };

  return (
    <PaginationContainer>
      <ArrowButton navDirection="left" isEnd={currentPage === 1} />
      {renderPageButtons(currentPage, totalPage)}
      <ArrowButton navDirection="right" isEnd={currentPage === totalPage} />
    </PaginationContainer>
  );
};

export default Pagination;
