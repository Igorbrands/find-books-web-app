import { useState } from 'react';
import { ReactComponent as Hand } from '../../assets/hand.svg';
import { ReactComponent as Search } from '../../assets/search.svg';

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

  function handleSearch() {
    history.push(`search/${searchInput}`);
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
              value={searchInput}
              placeholder="Search book"
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
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
          <Banner>
            <img src={images.banner1} alt="" />
            <img src={images.banner4} alt="" />
          </Banner>
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
          <Banner style={{ position: 'relative', left: '-20px' }}>
            <img src={images.banner2} alt="" />
          </Banner>
        </section>
        <section>
          <SectionHeader>
            <h3>Reviews of The Days</h3>
            <span>All Video</span>
          </SectionHeader>
          <Banner>
            <img src={images.banner3} alt="" />
          </Banner>
        </section>
      </Container>
      <BottomNavigation />
    </>
  );
}

export default Home;
