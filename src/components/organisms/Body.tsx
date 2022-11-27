import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { axiosGetCourseList } from '../../api/axios.custom';
import { courseInfo } from '../../types/apiDto';
import useCourses from '../../hooks/useCourses';
import Results from './Results';
import Pagination from './Pagination';
import EmptyResult from '../../pages/EmptyResult';

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;
const TotalResult = styled.div`
  padding: 0.75rem 0;
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  border-bottom: 1px solid #e5e5e5;
`;

const Body = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [offset, setOffset] = useState(0);
  const search = searchParams.toString();
  const { courses, setCourses, course_count, status } = useCourses(
    search,
    offset,
  );
  console.log(status);

  useEffect(() => {
    setOffset(0);
  }, [search]);

  return (
    <ResultContainer>
      <TotalResult>전체 {course_count}개</TotalResult>
      {status === 'ok' ? (
        course_count > 0 ? (
          <>
            <Results courses={courses} />
            <Pagination
              offset={offset}
              setOffset={setOffset}
              course_count={course_count}
            />
          </>
        ) : (
          <EmptyResult text="검색 결과가 없습니다." />
        )
      ) : status === 'loading' ? (
        <EmptyResult text="로딩 중입니다." />
      ) : (
        <EmptyResult text="에러가 발생했습니다." />
      )}

      {/* {course_count > 0 ? (
        <>
          <Results courses={courses} />
          <Pagination
            offset={offset}
            setOffset={setOffset}
            course_count={course_count}
          />
        </>
      ) : status === 'ok' ? (
        <EmptyResult text="검색 결과가 없습니다." />
      ) : (
        <EmptyResult text="에러가 발생했습니다." />
      )} */}
    </ResultContainer>
  );
};

export default Body;
