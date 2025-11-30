import React, { use, useEffect, useState } from "react";
import MyContainer from "../Layout/MyContainer";
import { AuthContext } from "../../Context/AuthContext";
// import { toast } from "react-toastify";
import Main from "../Layout/Main";
import { Link } from "react-router";
import ExportMain from "../Layout/ExportMain";
import ImportMain from "../Layout/ImportMain";

const Imports = () => {
  const { user } = use(AuthContext);
  const [importProducts, setimportProducts] = useState([]);

  useEffect(() => {
    // if (!user?.email) {
    //   console.log("⚠️ No user logged in");
    //   return;
    // }
    document.title = "Import - Import Export Hub";
    fetch(`https://assairment10.vercel.app/my-import?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // toast.success("import successful");
        console.log(data, "user after save");
        setimportProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user?.email]);

  console.log(importProducts);
  return (
    <MyContainer>
      <div>
        {importProducts.price}
        <div>
          {importProducts.map((data, _id) => (
            <ImportMain key={_id} data={data}></ImportMain>
          ))}
        </div>
      </div>
    </MyContainer>
  );
};

export default Imports;

// import React, { use, useEffect, useState } from "react";
// import { AuthContext } from "../../Context/AuthContext";
// import { toast } from "react-toastify";
// import Main from "../Layout/Main";
// // Exports;
// const Imports = () => {
//   const { user } = use(AuthContext);
//   const [importProducts, setimportProducts] = useState([]);
//   useEffect(() => {
//     fetch(`https://assairment10.vercel.app/my-import?email=${user.email}`)
//       .then((res) => res.json())
//       .then((data) => {
//         toast.success("Signup successful");
//         setimportProducts(data);
//         console.log(data, "user after save");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   return (
//     <div>
//       <div className="grid grid-cols-1 md:grid-cols-3 space-y-5">
//         {importProducts.map((data) => (
//           <Main key={data._id} data={data}></Main>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Imports;
