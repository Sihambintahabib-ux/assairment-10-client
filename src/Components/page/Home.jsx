import React from "react";
import { useLoaderData } from "react-router";
import Main from "../Layout/Main";
import MyContainer from "../Layout/MyContainer";

const Home = () => {
  const datas = useLoaderData();
  console.log(datas);
  return (
    <MyContainer>
      <div>
        {/* <div>banner carasol</div> */}
        <div className="grid grid-cols-1 md:grid-cols-3 space-y-5">
          {datas.map((data) => (
            <Main key={data._id} data={data}></Main>
          ))}
        </div>
        {/* <div>banner carasol</div> */} {/* <div>banner carasol</div> */}
      </div>
    </MyContainer>
  );
};

export default Home;
