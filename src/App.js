import { Switch,Route,redirect } from "react-router-dom";
// component
import Login from "./components/Login";
import Chats from "./components/Chats";
// context
import AuthContextProvider from "./contexts/AuthContextProvider";
function App() {
  return (
  <div>
    <AuthContextProvider>
    <Switch>
      <Route path="/chats" component={Chats}/>
      <Route path="/" component={Login}/>
    </Switch>
    </AuthContextProvider>
  </div>
  );
}

export default App;
