import { FormEvent, useState } from 'react';
import { ReactComponent as Hand } from '../../assets/hand.svg';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';

import images from '../../assets';
import {
  Container,
  WelcomeTitle,
  SectionHeader,
  Banner,
  SearchBar,
} from './styles';

import { useHistory } from 'react-router-dom';

import BottomNavigation from '../../components/BottomNavigation';

function Home() {
  const [searchInput, setSearchInput] = useState('');

  const history = useHistory();
  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (searchInput.length > 0) {
      history.push(`search/${searchInput}`);
    }
    return null;
  }

  return (
    <>
      <Container>
        <section>
          <SearchBar onSubmit={handleSearch}>
            <button type="submit">
              <SearchIcon />
            </button>
            <input
              type="text"
              value={searchInput}
              placeholder="Search book"
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch}
            />
          </SearchBar>
        </section>
        <section>
          <WelcomeTitle>
            Hi, <span>Mehmed Al Fatih</span> <Hand />
          </WelcomeTitle>
        </section>
        <section>
          <SectionHeader>
            <h3>Discover new book</h3>
            <span>More</span>
          </SectionHeader>
          <a href="http://localhost:3000/book/dsz5AwAAQBAJ">
            <Banner>
              <img src={images.banner1} alt="" />
              <img src={images.banner4} alt="" />
            </Banner>
          </a>
        </section>
        <section>
          <SectionHeader
            style={{
              marginBottom: 'unset',
            }}
          >
            <h3>Currently Reading</h3>
            <span>All</span>
          </SectionHeader>
          <a href="http://localhost:3000/book/eLRhDgAAQBAJ">
            <Banner style={{ position: 'relative', left: '-20px' }}>
              <img src={images.banner2} alt="" />
            </Banner>
          </a>
        </section>
        <section>
          <SectionHeader>
            <h3>Reviews of The Days</h3>
            <span>All Video</span>
          </SectionHeader>
          <a href="http://localhost:3000/book/QlduAgAAQBAJ">
            <Banner>
              <img src={images.banner3} alt="" />
            </Banner>
          </a>
        </section>
      </Container>
      <BottomNavigation />
    </>
  );
}

export default Home;
