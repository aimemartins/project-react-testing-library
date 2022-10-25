import { screen } from '@testing-library/react';
import React from 'react';
import { About } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('2. Teste o componente <About.js />. ', () => {
  test('2.1) Teste se a página contém um heading h2 com o texto About Pokédex:', () => {
    // Acessar
    renderWithRouter(<About />);
    // Agir
    const titlePokedex = screen.getByRole('heading', { name: 'About Pokédex', level: 2 });
    // Aferir
    expect(titlePokedex).toBeInTheDocument();
  });

  test('2.2) Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    // Acessar
    renderWithRouter(<About />);

    // Agir
    const textParagraph01 = screen.getByText('This application simulates a Pokédex, a digital encyclopedia containing all Pokémons');

    const textParagraph02 = screen.getByText('One can filter Pokémons by type, and see more details for each one of them');
    // Aferir

    expect(textParagraph01).toBeInTheDocument();
    expect(textParagraph02).toBeInTheDocument();
  });
  test('2.3) Teste se a página contém a seguinte imagem de uma Pokédex:', () => {
    // Acessar
    renderWithRouter(<About />);
    // Agir
    const imgAbout = screen.getByRole('img');
    // Aferir
    expect(imgAbout).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
