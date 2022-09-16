import "./App.css";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import LoginForm from "./components/LoginForm/LoginForm";
import { TwoFactorVerification } from "./components/TwoFactorVerification/TwoFactorVerification";
import FrogotPassword from "./components/FrogotPassword/FrogotPassword";
import { CreatePassword } from "./components/Createpassword/CreatePassword";

function App() {
  return (
    <div className="App">
      <RegistrationForm />
    </div>
  );
}

export default App;
