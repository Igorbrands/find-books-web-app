import React from 'react';
import { ReactComponent as Home } from '../../assets/home.svg';
import { ReactComponent as Book } from '../../assets/book.svg';
import { ReactComponent as User } from '../../assets/user.svg';
import { Container, Item } from './styles';

export default function BottomNavigation() {
  return (
    <Container>
      <Item>
        <Home />
        <span>Home</span>
      </Item>
      <Item>
        <Book />
        <span>Libraries</span>
      </Item>
      <Item>
        <User />
        <span>Profile</span>
      </Item>
    </Container>
  );
}
