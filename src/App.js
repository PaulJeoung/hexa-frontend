import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage';
import IndexPage from './pages/todo/IndexPage'
import ListPage from './pages/todo/ListPage';
import ReadPage from './pages/todo/ReadPage';
import AddPage from './pages/todo/AddPage';
import ModifyPage from './pages/todo/ModifyPage';
import ProductIndexPage from './pages/products/ProductIndexPage';
import ProductAddPage from './pages/products/ProductAddPage';
import ProductReadPage from './pages/products/ProductReadPage';
import ProductListPage from './pages/products/ProductListPage';
import ProductModifyPage from './pages/products/ProductModifyPage';
import NotFoundPage from './pages/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/member/LoginPage';
import LogOutPage from './pages/member/LogOutPage';
import HexaJoinPage from './pages/member/HexaJoinPage';
import HexaSigninPage from './pages/member/HexaSigninPage';

function App() {
  //     /todo/list, /todo/add, /todo/read/번호, /todo/modify/번호
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<MainPage />}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/todo/">
          <Route index element={<IndexPage />}/>
          <Route path="add" element={<AddPage />} />
          <Route path="list" element={<ListPage />} />
          <Route path="read/:tno" element={<ReadPage />} />
          <Route path="modify/:tno" element={<ModifyPage />} />
        </Route>
        <Route path="/products/">
          <Route index element={<ProductIndexPage />} />
          <Route path="add" element={<ProductAddPage />} />
          <Route path="list" element={<ProductListPage />} />
          <Route path="read/:pno" element={<ProductReadPage />} />
          <Route path="modify/:pno" element={<ProductModifyPage />} />
        </Route>
        <Route path="/member/">
          <Route path="login" element={<LoginPage />} />
          <Route path="logout" element={<LogOutPage />} />
          <Route path="join" element={<HexaJoinPage />} />
          <Route path='signin' element={<HexaSigninPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
