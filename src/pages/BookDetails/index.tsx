import { useEffect, useState } from 'react';
import { ReactComponent as DetailsBackground } from '../../assets/details-bg.svg';
import { ReactComponent as Back } from '../../assets/back.svg';
import { ReactComponent as Read } from '../../assets/book-open.svg';
import { ReactComponent as Listen } from '../../assets/headphones.svg';
import { ReactComponent as Share } from '../../assets/share.svg';
import {
  Container,
  ContainerTop,
  BookDescription,
  NavMenu,
  BookImage,
} from './styles';
import { useHistory, useRouteMatch } from 'react-router-dom';
import api from '../../services/api';
import { removeTags } from '../../utils';
interface BookParams {
  book: string;
}

interface DetailsProps {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string;
    description: string;
    imageLinks: {
      thumbnail: string;
    };
  };
}

function BookDetails() {
  const history = useHistory();
  const { params } = useRouteMatch<BookParams>();
  const [bookDetails, setBookDetails] = useState<DetailsProps>();

  const description = removeTags(bookDetails?.volumeInfo.description);

  useEffect(() => {
    api
      .get(`/${params.book}`)
      .then((res) => {
        setBookDetails(res.data);
      })
      .catch((error) => {
      });
  }, [params.book]);

  return (
    <Container>
      <ContainerTop>
        <DetailsBackground />
        <Back
          onClick={() => history.goBack()}
          style={{ top: '55px', left: '33px' }}
        />
        <BookImage src={bookDetails?.volumeInfo.imageLinks.thumbnail} />
      </ContainerTop>
      <BookDescription>
        <b>{bookDetails?.volumeInfo.title}: </b>
        {bookDetails?.volumeInfo.subtitle}
        <br />
        <span>{bookDetails?.volumeInfo.authors}</span>
        <p>{description}</p>
      </BookDescription>

      <NavMenu>
        <li>
          <Read />
          <span>Read</span>
        </li>
        <li>
          <Listen />
          <span>Listen</span>
        </li>
        <li>
          <Share />
          <span>Share</span>
        </li>
      </NavMenu>
    </Container>
  );
}

export default BookDetails;
