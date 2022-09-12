import Home from "./routers/home/home.component";
import { Routers, Router } from "react-router-dom";
import Navigation from "./routers/navigation/navigation.component";
import SignIn from "./routers/sign-in/sign-in.component";

const App = () => {
  return (
    <Routers>
      <Router path="/" element={<Navigation />}>
        <Router index element={<Home />} />
        <Router path="/shop" element={<Home />} />
        <Router path="/sign-in" element={<SignIn />} />
      </Router>
    </Routers>
  );
};

export default App;
