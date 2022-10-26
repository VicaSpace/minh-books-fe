import { ChakraProvider, Container } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FooterNavbar from './components/FooterNavbar';
import HomePage from './pages/home';
import MyBooksPage from './pages/mybooks';
import NotFoundPage from './pages/notfound';
import SearchPage from './pages/search';
import theme from './theme';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Container className="app-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/my-books" element={<MyBooksPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <FooterNavbar />
        </Container>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
