import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import BottomNavigation from '../../components/BottomNavigation';
import Book from '../../components/Book';
import api from '../../services/api';
import { BookProps } from '../../types/book';
import { Container, SearchBar } from './styles';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';

function Search() {
  const [books, setBooks] = useState<BookProps[] | null>([]);

  const { param }: { param: string } = useParams();
  const history = useHistory();

  useEffect(() => {
    api
      .get(`${param}`)
      .then((response) => {
        setBooks(response.data.items);
      })
      .catch((error) => {
        setBooks(null);
      });
  }, [param]);
  console.log(param);

  function handleSearch() {}
  function setBookDetails() {
    history.push(`/book/:id`);
  }

  function showMore() {
    api.get('&maxResults=20');
  }

  return (
    <>
      <Container>
        <section>
          <SearchBar>
            <button type="button">
              <SearchIcon />
            </button>
            <input type="text" onClick={handleSearch} />
          </SearchBar>
        </section>
        {books?.map((book, index) => (
          <Book
            key={index}
            image={book.volumeInfo.imageLinks?.thumbnail}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            handleBook={setBookDetails}
          />
        ))}
        <button onClick={showMore}>Load More</button>
      </Container>
      <BottomNavigation />
    </>
  );
}

export default Search;
