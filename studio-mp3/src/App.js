import "./App.css";
import Header from "./components/Header/Header";
import Set from "./components/Set/Set";
import Forms from "./components/Forms/Forms";
import Navegador from "./components/Navegador/Navegador";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <body className="App-body">
          <Set />
        </body>
        <section className="App-forms">
          <Forms />
          <Navegador />
        </section>
      </main>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
