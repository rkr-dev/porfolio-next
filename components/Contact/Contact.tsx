import emailjs from '@emailjs/browser';
import cx from 'classNames';
import { useState,useRef } from 'react';
import styles from './Contact.module.css';

interface IFormData {
  username: string;
  email: string;
  message: string;
}

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';


export const Contact = () => {
  const [formData, setFormData] = useState<IFormData>({
    username: '',
    email: '',
    message: '',
  });
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const { username, email, message } = formData;

  const formInfo = form.current || ''

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.username === '' || formData.message === '' || formData.email === '') {
      setError('Fields cannot be blank!')
      setTimeout(() => {
        setError('')
      }, 8000);
      return
    }
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formInfo, PUBLIC_KEY).then(
      (result) => {
        setFormData({
          username: '',
          email: '',
          message: '',
        });
        setSuccess('Email sent successfully')
        setTimeout(() => {
          setSuccess('')
        }, 8000);
      },
      (error) => {
        setError('Some Error Occured! Please try again')
        setTimeout(() => {
          setError('')
        }, 8000);
      }
    );
  };

  return (
    <section className={styles.contactPage}>
      <article className={styles.contactForm}>
        <h3>Get in touch</h3>
        <form ref={form} onSubmit={sendEmail}>
          <div className={styles.formGroup}>
            {error && <div className={styles.Error}>{error}</div>}
            {success && <div className={styles.Success}>{success}</div>}
            <input
              type='text'
              placeholder='name'
              name='username'
              value={username}
              onChange={handleChange}
              aria-label='Name'
              className={styles.formControl}
            />
            <input
              type='email'
              name='email'
              value={email}
              onChange={handleChange}
              placeholder='email'
              aria-label='Email'
              className={styles.formControl}
            />
            <textarea
              name='message'
              value={message}
              onChange={handleChange}
              id=''
              cols={30}
              rows={5}
              placeholder='please enter a message'
              aria-label='Please Enter a Message'
              className={styles.formControl}
            />
            <button
              type='submit'
              value='Send'
              className={cx(styles.submitBtn, 'btn')}
            >
              Submit
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};
