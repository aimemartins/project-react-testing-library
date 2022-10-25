import { screen } from '@testing-library/react';
import React from 'react';
import { NotFound } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('4. Teste o componente <NotFound.js />', () => {
  test('4.1) Teste se a página contém um heading h2 com o texto Page requested not found: ', () => {
    // Acessar
    renderWithRouter(<NotFound />);
    // Agir
    const titleNotFound = screen.getByRole('heading', { name: 'Page requested not found', level: 2 });
    // Aferir
    expect(titleNotFound).toBeInTheDocument();
  });

  test('4.2) Teste se a página mostra a imagem:', () => {
    // Acessar
    renderWithRouter(<NotFound />);
    // Agir
    const imgNotFound = screen.getByRole('img');
    // Aferir
    expect(imgNotFound).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
