import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { FavoritePokemons } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('3. Teste o componente <FavoritePokemons.js />', () => {
  test('3.1) Teste se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha pokémons favoritos ', () => {
    // Acessar
    renderWithRouter(<FavoritePokemons />);
    // Agir
    const noFavorite = screen.getByText(/No favorite pokemon found/i);
    // Aferir
    expect(noFavorite).toBeInTheDocument();
  });
});
