import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import BottomNavigation from '../../components/BottomNavigation';
import Book from '../../components/Book';
import api from '../../services/api';
import { BookProps } from '../../types/book';
import { Container, SearchBar } from './styles';

function Search() {
  const [books, setBooks] = useState<BookProps[]>([]);

  const { param }: { param: string } = useParams();
  const history = useHistory();


  useEffect(() => {
    api
      .get(`${param}`)
      .then((response) => {
        setBooks(response.data.items);
      })
      .catch((error) => {
        <h2>Algo deu errado...</h2>;
      });
  }, [param]);

  function handleSearch() {}
  function setBookDetails() {

  }
  

  return (
    <>
      <Container>
        <section>
          <SearchBar>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handleSearch();
              }}
            >
              <Search />
            </button>
            <input
              type="text"
              // value={book}
              placeholder="Search book"
              // onChange={(e) => setBooks(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
          </SearchBar>
        </section>
        {books.map((book, index) => (
          <Book
            key={index}
            image={book.volumeInfo.imageLinks?.thumbnail}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors} handleBook={setBookDetails}
          />
        ))}
      </Container>
      <BottomNavigation />
    </>
  );
}

export default Search;
