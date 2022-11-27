import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { courseInfo } from '../types/apiDto';
import { axiosGetCourseList } from '../api/axios.custom';

const useCourses = (offset: number) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [courses, setCourses] = useState<courseInfo[] | null>(null);
  const [course_count, setCourse_count] = useState<number>(0);
  const [status, setStatus] = useState<string>('loading');

  useEffect(() => {
    const title = searchParams.get('keyword');
    const price = searchParams.getAll('price').map((param) => {
      return { enroll_type: 0, is_free: param === 'free' ? true : false };
    });
    const filter_conditions = JSON.stringify({
      $and: [{ title: `%${title ? title : ''}%` }, { $or: price }],
    });
    axiosGetCourseList(filter_conditions, offset)
      .then((res) => {
        const { courses, course_count, _result } = res;
        setStatus(_result.status);
        setCourses(courses);
        setCourse_count(course_count);
      })
      .catch((error) => {
        setStatus('error');
        console.error(error);
      });
  }, [searchParams, offset]);

  return { courses, setCourses, course_count, status };
};

export default useCourses;
