import Header from './komponents/Header';
import Middle from './komponents/Middle';
import Sections from './komponents/Sections';
import Footer from './komponents/Footer';
import './assets/styles.css';

const App = () => (
  <>
    <Header />
    <main>
      <Middle />
      <Sections />
    </main>
    <Footer />
  </>
);

export default App;
