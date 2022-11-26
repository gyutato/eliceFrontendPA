import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

type ArrowButtonContainerProps = {
  isEnd: boolean;
};

const ArrowButtonContainer = styled.button<ArrowButtonContainerProps>`
  border: none;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  color: ${(props) => (props.isEnd ? '#ccc' : '#222')};
  }
`;

type ArrowButtonProps = {
  navDirection: string;
  //   page: number;
  isEnd: boolean;
  //   onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const ArrowButton = (props: ArrowButtonProps) => {
  const { navDirection, isEnd } = props;

  return navDirection === 'left' ? (
    <ArrowButtonContainer isEnd={isEnd}>
      <FontAwesomeIcon icon={faAngleLeft} width="16px" />
    </ArrowButtonContainer>
  ) : (
    <ArrowButtonContainer isEnd={isEnd}>
      <FontAwesomeIcon icon={faAngleRight} width="16px" />
    </ArrowButtonContainer>
  );
};

export default ArrowButton;
