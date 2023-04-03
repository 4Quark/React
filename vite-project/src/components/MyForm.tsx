import React, { useState } from 'react';
import FormCard from './FormCard';
import '../styles/Form.css';
import { SubmitHandler, useForm } from 'react-hook-form';

interface ICard {
  id: number;
  name: string;
  date: string;
  country: string;
  email: string;
  mobile: string;
  gender: boolean;
  skills: string;
  checkbox: boolean;
  file: string;
}

type Inputs = {
  userID: number;
  userName: string;
  userDate: string;
  userCountry: string;
  userEmail: string;
  userMobile: string;
  userGender: boolean;
  userSkills: string;
  checkbox: boolean;
  file: FileList;
};

const MyForm = () => {
  const [cards, setCards] = useState<ICard[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<Inputs>({ mode: 'onBlur' });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const newID = cards.length + 1;
    const newCard = {
      id: newID,
      name: data.userName,
      date: data.userDate,
      country: data.userCountry,
      email: data.userEmail,
      mobile: data.userMobile,
      gender: data.userGender,
      skills: data.userSkills,
      checkbox: data.checkbox,
      file: data.file ? URL.createObjectURL(data.file[0] as Blob) : '',
    };
    setCards([...cards, newCard]);
    reset();
  };

  const removeCard = (id: number) => {
    cards.forEach((el, i) => {
      if (el.id == id) cards.splice(i, 1);
    });
  };

  return (
    <div className="form_content">
      <fieldset className="form_fieldset">
        <legend>User info</legend>
        <form className="form_container" onSubmit={handleSubmit(onSubmit)}>
          <label>
            Name:
            <input
              type="text"
              placeholder="Name"
              {...register('userName', {
                required: true,
                minLength: { value: 3, message: 'Enter at least 3 characters' },
              })}
            />
          </label>
          {errors.userName && <span>{errors.userName.message}</span>}

          <label>
            Birthday:
            <input type="date" {...register('userDate', { required: true })} />
          </label>
          {errors.userDate && <span>This field is required</span>}

          <label>
            Country
            <select {...register('userCountry', { required: true })}>
              <option value="Belarus">Belarus</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Russia">Russia</option>
              <option value="Ukraine">Ukraine</option>
              <option value="Uzbekistan">Uzbekistan</option>
            </select>
          </label>
          {errors.userCountry && <span>This field is required</span>}

          <label>
            Email
            <input
              type="email"
              placeholder="rss@react.com"
              {...register('userEmail', { required: true, pattern: /^\S+@\S+$/i })}
            />
          </label>
          {errors.userEmail && <span>This field is required</span>}

          <label>
            Mobile number
            <input
              type="tel"
              placeholder="0123456"
              {...register('userMobile', { required: true, minLength: 6, maxLength: 12 })}
            />
          </label>
          {errors.userMobile && <span>From 6 to 12 symbols</span>}

          <div>
            Gender:
            <label>
              <input {...register('userGender', { required: true })} type="radio" value="male" />
              male
            </label>
            <label>
              <input {...register('userGender', { required: true })} type="radio" value="female" />
              female
            </label>
          </div>
          {errors.userDate && <span>{errors.userDate.message}</span>}

          <div>
            Skills:
            <label>
              <input {...register('userSkills', { required: true })} type="checkbox" value="HTML" />
              HTML
            </label>
            <label>
              <input {...register('userSkills', { required: true })} type="checkbox" value="CSS" />
              CSS
            </label>
            <label>
              <input
                {...register('userSkills', { required: true })}
                type="checkbox"
                value="JavaScript"
              />
              JavaScript
            </label>
          </div>

          <label>
            Upload profile picture:
            <input {...register('file', { required: true })} type="file" />
          </label>

          <label>
            <input {...register('checkbox', { required: true })} type="checkbox" /> I consent to my
            personal data
          </label>

          <input type="submit" disabled={!isValid} />
        </form>
      </fieldset>

      <div className="form_cards_content">
        {cards.length !== 0 ? (
          cards?.map((card, i) => (
            <FormCard
              key={i}
              remove={removeCard}
              id={card.id}
              name={card.name}
              date={card.date}
              select={card.country}
              email={card.email}
              mobile={card.mobile}
              switcher={card.gender}
              skills={card.skills}
              checkbox={card.checkbox}
              file={card.file}
            />
          ))
        ) : (
          <h2>Nothing found </h2>
        )}
      </div>
    </div>
  );
};

export default MyForm;
