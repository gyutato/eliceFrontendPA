export type getCourseListDto = {
  courses: Array<object>;
  course_count: number;
  _result: object;
};

export type courseInfo = {
  enroll_type: number;
  is_free: boolean;
  title: string;
  short_description: string;
  logo_file_url: string;
};
