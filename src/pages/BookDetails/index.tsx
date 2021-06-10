import { ReactComponent as DetailsBackground } from '../../assets/details-bg.svg';
import { ReactComponent as Back } from '../../assets/back.svg';
import { ReactComponent as Read } from '../../assets/book-open.svg';
import { ReactComponent as Listen } from '../../assets/headphones.svg';
import { ReactComponent as Share } from '../../assets/share.svg';

import { Container, ContainerTop, BookDescription, NavMenu } from './styles';
import { useHistory } from 'react-router-dom';

function BookDetails() {
  const history = useHistory();

  return (
    <Container>
      <ContainerTop>
        <button onClick={() => history.goBack()}>
          <Back style={{ position: 'relative', top: '55px', left: '33px' }} />
        </button>
        <DetailsBackground />
        imgem do livro
      </ContainerTop>
      <BookDescription>
        <h4>
          <b>Title: </b>Subtitle
        </h4>
        <span>Author name</span>
        <p>
          How do successful companies create products people can’t put down? Why
          do some products capture widespread attention while others flop?Why do
          some products capture widespread attention while others flop?Why do
          some products capture widespread attention while others flop?
        </p>
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
