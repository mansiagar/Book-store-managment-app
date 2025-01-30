import "react";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Create";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // login context
  const { login } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        url: `https://equinox-power-dress.glitch.me/login`,
        method: "POST",
        data: {
          username: username,
          password: password,
        },
      });
      if (response.data.success) {
        // console.log(response.data.token);
        const token = response.data.token;
        // console.log(token, "in login");
        login(token);
      }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      {error && <h1>{error}</h1>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
