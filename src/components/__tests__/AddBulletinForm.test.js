import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddBulletinForm from '../AddBulletinForm';

test('renders Add Bulletin Form correctly', () => {
  const { getByPlaceholderText, getByText } = render(<AddBulletinForm />);
  
  // Проверяем наличие элементов формы
  const titleInput = getByPlaceholderText('Title');
  const contentInput = getByPlaceholderText('Content');
  const addButton = getByText('Add Bulletin');

  expect(titleInput).toBeInTheDocument();
  expect(contentInput).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
});

// Добавляем другие тесты, например, для проверки добавления нового объявления
