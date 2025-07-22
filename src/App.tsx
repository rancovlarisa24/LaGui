import './App.css'
import Navbar from "./components/NavBar.tsx";
import hero from "./assets/home.jpeg";

function App() {

  return (
    <>
        <Navbar />
        <main className="home">
            <img src={hero} alt="Hero" className="home__hero" />
        </main>

    </>
  )
}

export default App
