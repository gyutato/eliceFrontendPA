import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartColumn,
  faLaptop,
  faCalendarWeek,
} from '@fortawesome/free-solid-svg-icons';

const IconTextContainer = styled.div`
  display: flex;
  height: 4rem;
  flex-direction: column;
  justify-content: space-between;
  > * {
    margin: 0;
  }
`;

const IconText = styled.div`
  display: flex;
  height: 1rem;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.75rem;
`;

const IconContainer = styled.div`
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
`;

const TextContainer = styled.p`
  font-size: 0.75rem;
  color: #7d7e80;
  line-height: 1rem;
  vertical-align: middle;
`;

const CardInfo = () => {
  return (
    <IconTextContainer className="IconTextContainer">
      <IconText className="IconText">
        <IconContainer>
          <FontAwesomeIcon icon={faChartColumn} />
        </IconContainer>
        <TextContainer>난이도: 미설정</TextContainer>
      </IconText>
      <IconText>
        <IconContainer>
          <FontAwesomeIcon icon={faLaptop} />
        </IconContainer>
        <TextContainer>수업: 온라인</TextContainer>
      </IconText>
      <IconText>
        <IconContainer>
          <FontAwesomeIcon icon={faCalendarWeek} />
        </IconContainer>
        <TextContainer>기간: 무제한</TextContainer>
      </IconText>
    </IconTextContainer>
  );
};

export default CardInfo;
