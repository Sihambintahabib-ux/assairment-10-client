import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
// import { toast } from "react-toastify";
import Main from "../Layout/Main";
import MyContainer from "../Layout/MyContainer";
import NewMain from "../Layout/NewMain";
// Exports;
const Exports = () => {
  const { user } = use(AuthContext);
  const [exportProducts, setexportProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/my-export?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        // toast.success("Signup successful");
        setexportProducts(data);
        console.log(data, "user after save");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);
  return (
    <MyContainer>
      <div>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 space-y-5"> */}
        <div>
          {exportProducts.map((data) => (
            <NewMain key={data._id} data={data}></NewMain>
          ))}
        </div>
      </div>
    </MyContainer>
  );
};

export default Exports;
