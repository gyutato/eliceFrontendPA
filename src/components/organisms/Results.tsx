import { courseInfo } from '../../types/apiDto';
import Card from '../atoms/Cards/Card';
import styled from '@emotion/styled';
import { useState } from 'react';

const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

type ResultsProps = {
  courses: courseInfo[] | null;
};

const Results = (props: ResultsProps) => {
  const { courses } = props;
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const renderCards = (): JSX.Element[] => {
    const cards = courses?.slice(offset, offset + limit).map((course) => {
      const { enroll_type, is_free, title, short_description, logo_file_url } =
        course;
      return (
        <Card
          enroll_type={enroll_type}
          is_free={is_free}
          title={title}
          short_description={short_description}
          logo_file_url={logo_file_url}
        />
      );
    });
    return cards ? cards : [];
  };
  return <ResultsContainer>{renderCards()}</ResultsContainer>;
};

export default Results;
