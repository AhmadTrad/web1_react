import "./login.scss";

const Login = () => {
  return (
    <form action="/login" method="POST">
      <h3>Login</h3>
      <div className="input-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter username"
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
          required
        />
      </div>
      <button type="submit" className="login-btn">
        Login
      </button>
      <div className="form-footer">
        <a href="#">Forgot password?</a>
        <span>
          Don't have an account? <a href="#">Sign up</a>
        </span>
      </div>
    </form>
  );
};

export default Login;
