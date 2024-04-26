import { useState } from "react";
import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";
import "./App.css";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;