import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartColumn,
  faLaptop,
  faCalendarWeek,
} from '@fortawesome/free-solid-svg-icons';

const IconTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;

const IconText = styled.div`
  display: flex;
  gap: 0.25rem;
  height: 1rem;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  > * {
    margin-right: 0.5rem;
    margin-bottom: 0.25rem;
  }
  > p {
    line-height: 1rem;
    vertical-align: middle;
  }
`;

const CardInfo = () => {
  return (
    <IconTextContainer>
      <IconText>
        <FontAwesomeIcon icon={faChartColumn} width="16px" />
        <p>난이도: 미설정</p>
      </IconText>
      <IconText>
        <FontAwesomeIcon icon={faLaptop} width="16px" />
        <p>수업: 온라인</p>
      </IconText>
      <IconText>
        <FontAwesomeIcon icon={faCalendarWeek} width="16px" />
        <p>기간: 무제한</p>
      </IconText>
    </IconTextContainer>
  );
};

export default CardInfo;
