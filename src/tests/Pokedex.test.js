import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('5. Teste o componente <Pokedex.js />', () => {
  test('5.1) Teste se a página contém um heading h2 com o texto Encountered pokémons', () => {
    // Acessar
    renderWithRouter(<App />);
    // Agir
    const titlePokedex = screen.getByRole('heading', { name: 'Encountered pokémons', level: 2 });
    // Aferir
    expect(titlePokedex).toBeInTheDocument();
  });
  test('5.2) Teste se é exibido o próximo pokémon da lista quando o botão Próximo pokémon é clicado:', () => {
    // Acessar
    renderWithRouter(<App />);
    // Agir
    const buttonNextPokemon = screen.getByRole('button', { name: 'Próximo pokémon' });
    userEvent.click(buttonNextPokemon);
    // Aferir
    expect(buttonNextPokemon).toBeInTheDocument();
  });
  test('5.3) Teste se a Pokédex tem os botões de filtro:', () => {
    // Acessar
    renderWithRouter(<App />);
    // Agir
    const filterButtons = screen.getAllByTestId('pokemon-type-button');
    // Aferir
    expect(filterButtons.length).toEqual(7);
  });

  test('5.4) Testa se os botões de filtragem por tipo possuem o nome correto:', () => {
    // Acessar
    renderWithRouter(<App />);
    // Agir
    const buttonElectric = screen.getByRole('button', { name: 'Electric' });
    const buttonFire = screen.getByRole('button', { name: 'Fire' });
    // Aferir
    expect(buttonElectric).toBeInTheDocument();
    expect(buttonFire).toBeInTheDocument();
  });

  test('5.5)  Teste se a Pokédex contém um botão para resetar o filtro:', () => {
    // Acessar
    renderWithRouter(<App />);
    // Agir
    const buttonAll = screen.getByRole('button', { name: 'All' });
    userEvent.click(buttonAll);
    // Aferir
    expect(buttonAll).toBeInTheDocument();
  });
});
