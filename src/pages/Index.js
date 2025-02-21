import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="Lenod Wong's personal website. New York based Stanford ICME graduate"
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About me</Link>
          </h2>
          <p>
            senior fullstack web developer, blockchain developer
          </p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. I am a senior fullstack web developer and blockchain developer.
        I have +6 years of extensive experience in web development.{' '}
        {/* <Link to="/about">about me</Link>, or  */}
        You can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{' '}
        view <Link to="/stats">site statistics</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
      <p>
        {' '}
        Source available{' '}
        <a href="https://github.com/Leo-wong-crypto">here</a>.
      </p>
    </article>
  </Main>
);

export default Index;
