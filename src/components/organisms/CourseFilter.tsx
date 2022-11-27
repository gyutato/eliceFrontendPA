import styled from '@emotion/styled';
import SearchArea from '../atoms/searchAreas/SearchArea';
import ChipsFilter from '../atoms/filters/ChipsFilter';
import { useSearchParams } from 'react-router-dom';
import * as filterOptions from '../../types/filterOptions';

const CourseFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CourseFilter = (): JSX.Element => {
  // 컴포넌트 리턴
  return (
    <CourseFilterContainer>
      <>
        <SearchArea />
        <ChipsFilter
          category="price"
          filterOption={filterOptions.priceFilterOptions}
        />
      </>
    </CourseFilterContainer>
  );
};

export default CourseFilter;
