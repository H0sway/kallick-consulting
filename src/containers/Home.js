import React from 'react';

// Bootstrap components
import Container from 'react-bootstrap/Container';

// Stylesheet
import './Home.scss';

const Home = () => {
  return (
    <div className="Home">
      <header className="homepage-header">
        <Container className="text-center">
          <h1>Kallick Consulting</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </Container>
      </header>

      <section className="about">
        <Container>
          <h2>About Kallick Consulting</h2>
          <p className="about">I was thinking you could use this section to give a brief description of the kind of work you do as Kallick Consulting. Underneath you could list a few accomplishments you're looking to highlight. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat commodo sed egestas egestas fringilla phasellus. Et netus et malesuada fames ac turpis egestas integer eget.</p>
          <ul>
            <li>Generic accomplishment #1</li>
            <li>Generic accomplishment #2</li>
            <li>And so forth</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
        </Container>
      </section>
    </div>
  )
}

export default Home;
