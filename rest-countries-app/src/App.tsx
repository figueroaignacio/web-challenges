import {BrowserRouter as Router} from "react-router-dom";
import {AppRouter} from "./components/Router.tsx";

// Components
import {Header} from "./components/Header.tsx";
import {Footer} from "./components/Footer.tsx";


function App() {
  return (
    <Router>
      <div className="grid grid-rows-[auto_1fr_auto] min-h-dvh container mx-auto my-4 px-4 max-w-6xl">
        <Header/>
        <main>
          <AppRouter/>
        </main>
        <Footer/>
      </div>
    </Router>

  );
}

export default App;
