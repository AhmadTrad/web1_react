import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import { Routes, Route } from "react-router-dom";

const App = () => {
  let isLoggedIn: boolean = true;
  if (isLoggedIn) {
    return (
      <MainLayout>
        {/* {
        if dashboar => open dashbpard here
        if uses => open children => users} */}
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="*" element={<h1>Not Found</h1>} />{" "}
          {/* Catch-all for 404s */}
        </Routes>
      </MainLayout>
    );
  } else {
    return <AuthLayout />;
  }
};

export default App;
