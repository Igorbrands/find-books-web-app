import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import BottomNavigation from '../../components/BottomNavigation';
import Book from '../../components/Book';
import api from '../../services/api';
import { BookProps } from '../../types/book';
import {
  Container,
  SearchBar,
  Content,
  LoadMore,
  Error,
} from './styles';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';

function Search() {
  const [books, setBooks] = useState<BookProps[] | null>([]);
  const [inputError, setInputError] = useState(false);
  const [maxResults, setMaxResults] = useState(10);

  const { param }: { param: string } = useParams();

  useEffect(() => {
    try {
      api.get(`?q=${param}&maxResults=${maxResults}`).then((response) => {
        setBooks(response.data.items);
        return;
      });
    } catch (error) {
      setBooks(null);
      setInputError(true);
    }
  }, [param, maxResults]);

  function showMore() {
    setMaxResults(maxResults + 10);
  }

  return (
    <>
      <Container>
        <SearchBar>
          <button type="button" onClick={() => {}}>
            <SearchIcon />
          </button>
          <input type="text" />
        </SearchBar>
        <Content>
          {(inputError || !books) && <Error>Something went wrong...</Error>}
          {books?.map((book) => (
            <Link key={book.id} to={`/book/${book.id}`}>
              <Book
                image={book.volumeInfo.imageLinks?.thumbnail}
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors}
              />
            </Link>
          ))}
        </Content>
        <LoadMore>
          <button onClick={showMore}>Load More</button>
        </LoadMore>
      </Container>
      <BottomNavigation />
    </>
  );
}

export default Search;
