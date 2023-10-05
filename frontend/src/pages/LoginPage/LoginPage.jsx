import { Helmet } from "react-helmet";
import img from "../../assets/temporary/loginpage.jpg";

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      {/* HERE PUT YOUR COMPONENTS  */}

      {/* YOU CAN DELETE CODE BELOW LATER */}
      <ul>
        This is <b>Login Page</b>. Please import and use here <b>componets </b>
        like:
        <hr />
        <li>LoginForm</li>
      </ul>

      <img src={img} alt="Loginpage" />
    </>
  );
};

export default LoginPage;
