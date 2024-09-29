import "./App.css";
import Header from "./components/Header/Header";
import Set from "./components/Set/Set";
import Forms from "./components/Forms/Forms";

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
        <section className='App-forms'>
          <Forms />
        </section>
      </main>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
