import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { axiosGetCourseList } from '../../api/axios.custom';
import { courseInfo } from '../../types/apiDto';
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
  const [title, settitle] = useState(searchParams.get('keyword'));
  const [price, setprice] = useState(
    searchParams.getAll('price').map((param) => {
      return { enroll_type: 0, is_free: param === 'free' ? true : false };
    }),
  );
  const [courses, setCourses] = useState<courseInfo[] | null>(null);

  useEffect(() => {
    console.log('change detected');
    settitle(searchParams.get('keyword'));
    setprice(
      searchParams.getAll('price').map((param) => {
        return { enroll_type: 0, is_free: param === 'free' ? true : false };
      }),
    );
    axiosGetCourseList(filter_conditions, 0)
      .then((res) => {
        setCourses(
          res.courses.map((course: any) => {
            const {
              enroll_type,
              is_free,
              title,
              short_description,
              logo_file_url,
            } = course;
            return {
              enroll_type,
              is_free,
              title,
              short_description,
              logo_file_url,
            };
          }),
        );
      })
      .then(() => {});
  }, [searchParams]);

  const filter_conditions = JSON.stringify({
    $and: [{ title: `%${title ? title : ''}%` }, { $or: price }],
  });

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
