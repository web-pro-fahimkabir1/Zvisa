import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const ForgotPassword = () => {
  const { handleSendPasswordResetEmail, user } = useContext(AuthContext);

  //   const navigate = useNavigate();

  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    // console.log(email);
    // navigate("https://mail.google.com/mail");

    handleSendPasswordResetEmail(email)
      .then(() => {
        window.open("https://mail.google.com/", "_blank");
      })
      .catch((error) => {});
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="card w-full max-w-md shadow-lg bg-white rounded-lg p-6">
        <form onSubmit={handleResetPassword} className="card-body pb-2">
          <h2 className="text-center font-semibold text-lg">Reset Password</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              name="email"
              value={user?.email}
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Reset Password</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
