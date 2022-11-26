import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { axiosGetCourseList } from '../../api/axios.custom';
import { courseInfo } from '../../types/apiDto';
import useCourses from '../../hooks/useCourses';
import Results from './Results';
import Pagination from './Pagination';

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  border: 1px solid red;
`;

const Body = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.toString();
  const { courses, setCourses } = useCourses(search);

  return (
    <ResultContainer>
      <div className="totalNum">totalNum</div>
      <div className="cards">
        <Results courses={courses} />
      </div>
      <Pagination />
    </ResultContainer>
  );
};

export default Body;
