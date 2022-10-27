import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('6. Teste o componente <Pokemon.js />', () => {
  test('6.1) Teste se o card do pokémon indicado na Pokédex contém um link de navegação: ', () => {
    // Acessar
    renderWithRouter(<App />);
    // Agir
    const linkDetails = screen.getByRole('link', { name: /More details/i });
    // Aferir
    expect(linkDetails).toBeInTheDocument();
  });
  test('6.2) Teste se ao clicar no link de navegação do pokémon, é feito o redirecionamento da aplicação para a página de detalhes de pokémon: ', () => {
    // Acessar
    const { history } = renderWithRouter(<App />);
    // Agir
    const linkDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(linkDetails);
    // Aferir
    const { location: { pathname } } = history;
    expect(pathname).toBe('/pokemons/25');
  });
  test('6.3) Teste se a imagem do pokemon possui o src correto: ', () => {
    // Acessar
    renderWithRouter(<App />);
    // Agir
    const imgPikachu = screen.getByRole('img');
    // Aferir
    expect(imgPikachu).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  test('6.4) Teste se a imagem do pokemon possui o alt <name> sprite: ', () => {
    // Acessar
    renderWithRouter(<App />);
    // Agir
    const imgPikachu = screen.getByRole('img');
    // Aferir
    expect(imgPikachu).toHaveAttribute('alt', 'Pikachu sprite');
  });

  test('6.5) Teste se existe um ícone de estrela nos pokémons favoritados com uma imagem com o atributo src contendo o caminho /star-icon.svg:', () => {
    // Acessar
    renderWithRouter(<App />);
    // Agir
    const linkDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(linkDetails);
    // Agir
    const checkFavorite = screen.getByRole('checkbox');
    userEvent.click(checkFavorite);
    // Agir
    const imgFavorite = screen.getByRole('img', { name: 'Pikachu is marked as favorite' });
    // Aferir
    expect(imgFavorite).toHaveAttribute('src', '/star-icon.svg');
  });
  test('6.6) Teste se o tipo correto do pokemon é mostrado na tela com data testid', () => {
    // Acessar
    renderWithRouter(<App />);
    // Agir
    const typePokemon = screen.getByTestId('pokemon-type');
    // Aferir
    expect(typePokemon).toHaveTextContent('Electric');
  });
});
