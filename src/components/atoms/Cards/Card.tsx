import styled from '@emotion/styled';
import CardInfo from './CardInfo';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 18.5rem;
  height: 21.125rem;
  border-radius: 0.5rem;
  padding: 1.75rem 1.5rem;
  margin-right: 1rem;
  &:nth-of-type(4n) {
    margin-right: 0;
  }
  box-sizing: border-box;
  margin-bottom: 1rem;
  &:nth-last-of-type(-n + 4) {
    margin-bottom: 0;
  }
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 0.5rem;
  }
`;

const Label = styled.p`
  display: inline-block;
  font-size: 0.75rem;
  color: #524fa1;
  font-weight: bold;
`;
const Title = styled.p`
  display: inline-block;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 3.5rem;
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 1.6;
`;
const Description = styled.p`
  display: inline-block;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 0.875rem;
  color: #5e5f61;
  line-height: 1.6;
  height: 3rem;
  margin-bottom: 1rem;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CourseImg = styled.img`
  width: 52px;
  height: 52px;
  object-fit: cover;
`;

type CardProps = {
  enroll_type: number;
  is_free: boolean;
  title: string;
  short_description: string;
  logo_file_url: string;
};
const Card = (props: CardProps) => {
  const { enroll_type, is_free, title, short_description, logo_file_url } =
    props;
  const label = enroll_type === 0 ? (is_free ? '무료' : '유료') : '구독';
  return (
    <CardContainer>
      <TextArea>
        <Label>{label}</Label>
        <Title>{title}</Title>
        <Description>{short_description}</Description>
      </TextArea>
      <Details>
        <CardInfo />
        <CourseImg src={logo_file_url} alt="eliceAcademy" />
      </Details>
    </CardContainer>
  );
};

export default Card;
