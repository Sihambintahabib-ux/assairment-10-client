import React from "react";
import { useLoaderData } from "react-router";
import Main from "../Layout/Main";
import MyContainer from "../Layout/MyContainer";
import Slider from "../Layout/Slider";
import Tips from "../Layout/Tips";
import Count from "../Layout/Count";

const Home = () => {
  const datas = useLoaderData();
  console.log(datas);
  return (
    <MyContainer>
      <div>
        <title> Products - Home</title>
        {/*banner carasol */}
        <Slider datas={datas}></Slider>

        <div className="grid grid-cols-1 md:grid-cols-3 space-y-5">
          {datas.map((data) => (
            <Main key={data._id} data={data}></Main>
          ))}
        </div>
        {/* <div>banner carasol</div> */}
        <Count></Count>
        <Tips></Tips>
        {/* <div>banner carasol</div> */}
      </div>
    </MyContainer>
  );
};

export default Home;
