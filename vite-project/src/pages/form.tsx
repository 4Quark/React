import React from 'react';
import MyForm from '../components/MyForm';

const FormPage = () => {
  const cards = [];
  for (let i = 0; i < 30; i++) {
    cards.push('card');
  }

  return (
    <div className="form_container">
      <h1>Form</h1>
      <MyForm />
    </div>
  );
};

export default FormPage;
