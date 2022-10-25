import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('1. Teste o componente <App.js />', () => {
  test('1.1) Teste se o link Home possui o texto Home e se a aplicação é redirecionada para a página inicial, na URL / ao clicar: ', () => {
    // Acessar
    const { history } = renderWithRouter(<App />);
    // Agir ou interagir
    const linkHome = screen.getByRole('link', { name: 'Home' });
    expect(linkHome).toBeInTheDocument();
    userEvent.click(linkHome);
    // Aferir ou testar
    const { location: { pathname } } = history;
    expect(pathname).toBe('/');
  });

  test('1.2) Teste se o link About possui o texto About e se a aplicação é redirecionada para About, na URL clicada:', () => {
    // Acessar
    const { history } = renderWithRouter(<App />);
    // Agir ou interagir
    const linkAbout = screen.getByRole('link', { name: 'About' });
    expect(linkAbout).toBeInTheDocument();
    userEvent.click(linkAbout);
    // Aferir ou testar
    const { location: { pathname } } = history;
    expect(pathname).toBe('/about');
  });
  test('1.3) Teste se o link  possui o texto Favorite Pokémons e se a aplicação é redirecionada para Favorite Pokémons, na URL clicada: ', () => {
    // Acessar
    const { history } = renderWithRouter(<App />);
    // Agir ou interagir
    const linkFavorite = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(linkFavorite).toBeInTheDocument();
    userEvent.click(linkFavorite);
    // Aferir ou testar
    const { location: { pathname } } = history;
    expect(pathname).toBe('/favorites');
  });
  test('Teste se a aplicação é redirecionada para a página Not Found ao entrar em uma URL desconhecida:', () => {
    // Acessar
    const { history } = renderWithRouter(<App />);
    // Agir ou interagir
    act(() => {
      history.push('/iuwetgw');
    });
    const pageNotFound = screen.getByRole('heading', { name: 'Page requested not found', level: 2 });
    // Aferir ou testar
    expect(pageNotFound).toBeInTheDocument();
  });
});
