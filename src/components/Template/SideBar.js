import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Manvardhan Singh Harariya</h2>
        <p>
          <a href="mailto:manvardhansingh05@gmail.com">manvardhansingh05@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Manvardhan. I am a{' '}
        <a href="https://geu.ac.in/">Graphic Era University</a> graduate.
        I&apos;ve participated in JP Morgan Chase&apos;s &apos;Code for Good&apos;
        hackathon, building solutions for underprivileged girls,
        and the Smart India Hackathon (SIH), tackling real-world challenges with innovative
        approaches.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <>
              <Link to="/resume" className="button">
                Learn More
              </Link>
              <a href="https://drive.google.com/file/d/1GVRgO68DrMJNi7kQNbNElg-bED_BQ4zP/view?usp=drive_link" className="button" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </>
          ) : (
            <>
              <Link to="/about" className="button">
                About Me
              </Link>
              <a href="https://drive.google.com/file/d/1GVRgO68DrMJNi7kQNbNElg-bED_BQ4zP/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy;  Manvardhan Singh Harariya <Link to="/">manvardhansingh05@gmail.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
