import instance from './axios.instance';

const getCourseListURL = 'course/list/';
export const axiosGetCourseList = async (
  filter_conditions: ReturnType<typeof JSON.stringify>,
  offset: number,
) => {
  try {
    const response = await instance.get(
      `${getCourseListURL}?filter_conditions=${filter_conditions}&offset=${offset}&count=20`,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
