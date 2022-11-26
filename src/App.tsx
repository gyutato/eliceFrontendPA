import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Global } from '@emotion/react';
import globalStyle from './styles/globalStyle';
import Header from './components/atoms/headers/Header';
import Layout from './layout/Layout';
import Results from './components/organisms/Body';

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
          {/*<Route path="*" element={<NotFound />} />*/}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
