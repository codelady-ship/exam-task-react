import '../assets/middle.css';

const VIDEO_URL = 'https://www.youtube.com/watch?v=CBYhVcO4WgI';

const Middle = () => (
  <section id="home" className="hero">
    <div className="left">
      <h1>Start Up</h1>
      <p>
        Turn an idea into a launched product. Start Up gives small teams one simple workspace to test an idea, plan the
        first version and prepare the launch, step by step.
      </p>
      <div className="actions">
        <a href="#pricing" className="btn primary">Get started</a>
        <a href={VIDEO_URL} className="btn" target="_blank" rel="noopener noreferrer">
          <span aria-hidden="true">▶</span> Watch video
          <span className="sr-only"> (Y Combinator lecture &ldquo;How to Start a Startup&rdquo;, opens YouTube in a new tab)</span>
        </a>
      </div>
    </div>
    <img
      src={`${import.meta.env.BASE_URL}foto.avif`}
      alt="Illustration of a rocket launching from a light bulb"
      width="640"
      height="640"
    />
  </section>
);

export default Middle;
