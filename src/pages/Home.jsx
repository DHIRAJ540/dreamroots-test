import React from "react";

import headerImg from "../assets/header.svg";
import sampleImg from "../assets/sample.png";

import "./home.css";

const Home = () => {
  return (
    <div className="max-w-[430px] mx-auto  ">
      <div className="bg-primary p-[25px] pt-16  rounded-br-[40px]">
        <div className="flex items-center">
          <div className="flex items-center justify-center p-2 rounded-[30px] w-[98px] h-[98px] custom_shadow">
            <img src={headerImg} alt="header" />
          </div>
          <h1 className="text-[32px] font-[800] custom_gradient ml-[25px]  ">
            Dental Crown
          </h1>
        </div>
        <p className="font-normal text-[#fff] text-[13px] leading-[15px] mt-[25px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,
          mattis tellus. Sed dignissim, metus nec fringilla accumsan. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
          molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus.
        </p>
      </div>
      <div className="mt-[25px] flex items-center justify-between px-[25px]">
        <img
          src={sampleImg}
          alt="sample"
          className="w-[179px] h-[145px] rounded-[30px] "
        />
        <div className="ml-[20px]">
          <h2 className="text-[20px] font-bold text-primary leading-[18px]">
            Why would I need a dental crown?
          </h2>
          <p className="mt-[10px] text-primary text-[15px] leading-[17px] font-[500] ">
            You may need a dental crown for several reasons, including:
          </p>
        </div>
      </div>
      <div className="mt-[25px] mx-[25px] px-[35px] py-[20px] text-primary bg-[#E7C985] rounded-[30px] text-[13px]  leading-[15px] font-normal ">
        <ul className="list-disc">
          <li>
            Protecting a weak tooth (possibly from decay) from breaking or to
            keep the weak tooth together if parts of it are cracked.
          </li>
          <li>Restoring a broken tooth or a severely worn down tooth.</li>
          <li>
            Covering and supporting a tooth with a large filling and not much
            tooth remaining.
          </li>
          <li>Holding a dental bridge in place.</li>
          <li>Covering misshapen or severely discolored teeth.</li>
          <li>Covering a dental implant.</li>
          <li>Covering a tooth that’s been treated with a root canal.</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
