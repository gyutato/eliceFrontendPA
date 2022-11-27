import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Global } from '@emotion/react';
import globalStyle from './styles/globalStyle';
import Header from './components/atoms/headers/Header';
import Layout from './components/templates/Layout';
import Results from './pages/Body';
import EmptyResult from './components/organisms/EmptyResult';

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Results />} />
          </Route>
          <Route
            path="*"
            element={<EmptyResult text="존재하지 않는 페이지입니다." />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
