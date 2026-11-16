import '../assets/footer.css';
import { navLinks } from './navLinks';

const Footer = () => (
  <footer className="footer">
    <nav aria-label="Footer" className="footer-links">
      {navLinks.map(({ href, label }) => (
        <a key={href} href={href}>{label}</a>
      ))}
    </nav>
    <p>
      © {new Date().getFullYear()} Start Up · A demo landing page built with React as a practice project.{' '}
      <a href="https://github.com/codelady-ship/exam-task-react" target="_blank" rel="noreferrer">Source on GitHub</a>
    </p>
  </footer>
);

export default Footer;
