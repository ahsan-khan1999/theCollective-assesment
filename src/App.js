import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import UserGistDetail from "./views/gist-details/UserGistDetail";
import Search from "./views/search/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />}></Route>
        <Route path="/:id" element={<UserGistDetail />} />
      </Routes>
    </BrowserRouter>
    // <Router>
    //   <div>
    //     <Routes>
    //       <Route path="/" exact={true} render={() => <SplashScreen />} />
    //       {/* <Route path="/:id" component={GistDetails} /> */}
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
