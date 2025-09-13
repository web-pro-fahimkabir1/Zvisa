import { useContext } from "react";
import Navbar from "./Navbar";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  // console.log("user============> ",user);
  // const user = {
  //   email: "faruk@gmail.com",
  //   displayName: "faruk(dummy)",
  // };

  return (
    <div>
      {/* <div className="flex justify-center">
        {user?.email ? (
          <p>
            Welcome!{" "}
            <span className="text-[#B59F78] font-medium">
              {user?.email}
            </span>
          </p>
        ) : (
          ""
        )}
      </div> */}
      <Navbar></Navbar>
    </div>
  );
};

export default Header;
