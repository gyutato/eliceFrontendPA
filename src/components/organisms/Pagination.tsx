import styled from '@emotion/styled';
import ArrowButton from '../atoms/Buttons/ArrowButton';
import PageButton from '../atoms/Buttons/PageButton';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;
type PaginationProps = {};

const renderPageButtons = (
  currentPage: number,
  totalPages: number,
): JSX.Element[] => {
  const pageButtons = [];
  if (currentPage < 5) {
    for (let i = 1; i <= Math.min(currentPage + 4, totalPages); i++) {
      pageButtons.push(<PageButton page={i} isClicked={i === currentPage} />);
    }
  } else {
    for (
      let i = currentPage - 4;
      i <= Math.min(currentPage + 4, totalPages);
      i++
    ) {
      pageButtons.push(<PageButton page={i} isClicked={i === currentPage} />);
    }
  }
  return pageButtons;
};

const Pagination = (props: PaginationProps) => {
  const currentPage = 7;
  const totalPage = 8;
  return (
    <PaginationContainer>
      <ArrowButton navDirection="left" isEnd={true} />
      {renderPageButtons(currentPage, totalPage)}
      <ArrowButton navDirection="right" isEnd={false} />
    </PaginationContainer>
  );
};

export default Pagination;
