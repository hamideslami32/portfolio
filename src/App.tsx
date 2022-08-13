import styles from "./app.module.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Resume from "./pages/resume/Resume";
import Contact from "./pages/contact/Contact";

import Header from "./components/layouts/header/Header";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
