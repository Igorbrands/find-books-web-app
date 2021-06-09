import { Container, Title, Author } from './styles';

interface BookListProps {
  image?: string;
  title: string;
  authors: string[];
  handleBook: () => void;
}

function Book({ image, title, authors, handleBook }: BookListProps) {
  let authorDisplay = '';
  if (authors?.length) {
    authorDisplay = authors?.join('; ');
  }

  return (
    <>
      <Container onClick={handleBook}>
        {image && <img src={image} alt={title} />}
        <div>
          <Title>{title}</Title>
          <br />
          <Author>
            by{' '}
            {authorDisplay.length > 48
              ? authorDisplay.substr(0, 50).concat('...')
              : authorDisplay}
          </Author>
        </div>
      </Container>
    </>
  );
}

export default Book;
