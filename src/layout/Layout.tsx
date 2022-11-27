import styled from '@emotion/styled';
import CourseFilter from '../components/organisms/CourseFilter';
import { Outlet } from 'react-router-dom';

const LayoutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 4rem;
  margin-left: auto;
  margin-right: auto;
  padding: 24px;
  width: 100%;
  max-width: 1280px;
  box-sizing: border-box;
`;

const Layout = (): JSX.Element => {
  return (
    <LayoutContainer className="Layout">
      <CourseFilter />
      <Outlet />
    </LayoutContainer>
  );
};

export default Layout;
