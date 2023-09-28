import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./components/MainPage";
import LoginPage from "./auth/LoginPage";
import AnimeDetails from "./components/AnimeDetails";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main/:userId" element={<MainPage />} />
        <Route path="/:userId/anime/:animeId" element = {<AnimeDetails/>}/>
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>
  );
}