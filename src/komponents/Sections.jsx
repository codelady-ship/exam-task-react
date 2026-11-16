import { useState } from 'react';
import '../assets/sections.css';

const Icon = ({ d }) => (
  <svg viewBox="0 0 24 24" width="40" height="40" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

const services = [
  {
    title: 'Idea check',
    text: 'Write down the problem, who has it and how you will reach them. A short checklist shows what still needs an answer.',
    icon: 'M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z',
  },
  {
    title: 'Landing page',
    text: 'Pick a template, add your headline and a sign-up form, and publish a page to collect early interest.',
    icon: 'M3 4h18v16H3zM3 9h18M8 4v5',
  },
  {
    title: 'First version plan',
    text: 'Split the product into small tasks, choose what goes into version one and see the plan on a simple board.',
    icon: 'M4 6h16M4 12h10M4 18h6',
  },
  {
    title: 'Launch checklist',
    text: 'Set a launch date and follow a list of steps: testing, announcement texts, feedback form and follow-up.',
    icon: 'M9 11l3 3 8-8M20 12v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h11',
  },
];

const features = [
  'One workspace for notes, tasks and launch steps',
  'Ready-made templates for common startup documents',
  'Shared board so the whole team sees what is next',
  'Works in the browser on phones, tablets and desktops',
];

const plans = [
  { name: 'Starter', price: 'Free', note: 'For one person testing an idea', items: ['1 project', 'Idea checklist', 'Launch checklist'] },
  { name: 'Team', price: '$12 / month', note: 'For small teams building a first version', items: ['Unlimited projects', 'Up to 5 members', 'Landing page templates', 'Shared task board'] },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const ContactForm = () => {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
    setSent(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const found = {};
    if (values.name.trim().length < 2) found.name = 'Please enter your name.';
    if (!EMAIL_RE.test(values.email.trim())) found.email = 'Please enter a valid email address.';
    if (values.message.trim().length < 10) found.message = 'Please write at least 10 characters.';
    setErrors(found);
    if (Object.keys(found).length) return;
    setSent(true);
    setValues({ name: '', email: '', message: '' });
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      {['name', 'email'].map((field) => (
        <div key={field} className="field">
          <label htmlFor={field}>{field === 'name' ? 'Name' : 'Email'}</label>
          <input
            id={field}
            name={field}
            type={field === 'email' ? 'email' : 'text'}
            autoComplete={field}
            value={values[field]}
            onChange={onChange}
            aria-invalid={Boolean(errors[field])}
            aria-describedby={errors[field] ? `${field}-error` : undefined}
          />
          {errors[field] && <p id={`${field}-error`} className="field-error">{errors[field]}</p>}
        </div>
      ))}
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={values.message}
          onChange={onChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && <p id="message-error" className="field-error">{errors.message}</p>}
      </div>
      <button type="submit" className="btn primary">Send message</button>
      <p role="status" className="form-status">
        {sent && 'Thanks! This is a demo page, so your message was checked but not sent anywhere.'}
      </p>
    </form>
  );
};

const Sections = () => (
  <>
    <section id="about" className="section">
      <h2>About Start Up</h2>
      <p className="section-lead">
        Most ideas stall between the first note and the first user. Start Up keeps the early steps in one place:
        describe the problem, plan a small first version, publish a page and get ready to launch. No setup, no long
        manuals, just the next step on your list.
      </p>
    </section>

    <section id="services" className="section">
      <h2>Services</h2>
      <ul className="container">
        {services.map(({ title, text, icon }) => (
          <li key={title} className="item">
            <Icon d={icon} />
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </section>

    <section id="features" className="section">
      <h2>Features</h2>
      <ul className="feature-list">
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </section>

    <section id="pricing" className="section">
      <h2>Pricing</h2>
      <ul className="plans">
        {plans.map(({ name, price, note, items }) => (
          <li key={name} className="plan">
            <h3>{name}</h3>
            <p className="plan-price">{price}</p>
            <p className="plan-note">{note}</p>
            <ul>
              {items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <a href="#contact" className="btn primary">Choose {name}</a>
          </li>
        ))}
      </ul>
    </section>

    <section id="contact" className="section">
      <h2>Contact</h2>
      <p className="section-lead">Questions about plans or features? Leave a message.</p>
      <ContactForm />
    </section>
  </>
);

export default Sections;
