import {
  signInWithGooglePopup,
  createUsersDocumentFromAuth,
} from "..//..//utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUsersDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In Google Popup</button>
    </div>
  );
};

export default SignIn;
