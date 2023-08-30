import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PhotoPage from "./pages/PhotoPage";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>

      <Route path="/picture/:id">
        <PhotoPage />
      </Route>

      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default App;