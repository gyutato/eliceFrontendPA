import styled from '@emotion/styled';

const EmptyResultContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 24px;
  width: 100%;
  height: 50vh;
  max-width: 1280px;
  box-sizing: border-box;
`;

const EmptyResultImg = styled.img`
  display: block;
  width: 4rem;
`;

const EmptyResultText = styled.p`
  margin-top: 1.5rem;
  font-size: 1rem;
  color: #7d7e80;
  line-height: 1rem;
  vertical-align: middle;
`;

type EmptyResultProps = {
  text: string;
};

const EmptyResult = (props: EmptyResultProps): JSX.Element => {
  const { text } = props;
  return (
    <EmptyResultContainer>
      <EmptyResultImg src="empty_icon.png" />
      <EmptyResultText>{text}</EmptyResultText>
    </EmptyResultContainer>
  );
};

export default EmptyResult;
