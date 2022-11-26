import styled from '@emotion/styled';

type PageButtonContainerProps = {
  isClicked: boolean;
};

const PageButtonContainer = styled.button<PageButtonContainerProps>`
  border: none;
  margin: 0 0.1rem;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  ${(props) => {
    if (props.isClicked) {
      return `
		background-color: #524fa1;
		color: white;
	  `;
    } else {
      return `
		background-color: #f0f1f3;
		color: #999;
	  `;
    }
  }}
`;

type PageButtonProps = {
  page: number;
  isClicked: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const PageButton = (props: PageButtonProps) => {
  const { page, isClicked, onClick } = props;
  return (
    <PageButtonContainer isClicked={isClicked} onClick={onClick}>
      {page}
    </PageButtonContainer>
  );
};

export default PageButton;
