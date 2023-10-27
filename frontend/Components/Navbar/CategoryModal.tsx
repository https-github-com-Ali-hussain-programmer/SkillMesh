import React from "react";
import ActiveLinks from "../Shared/ActiveLinks";
import { usePathname } from "next/navigation";

function CategoryModal() {
  const pathname = usePathname();
  return (
    <>
      <div className="container mx-auto  bg-white  text-black p-6 py-4 rounded-md shadow-lg">
        <div className=" sm:flex   lg:gap:0  flex-wrap lg:gap-14 md:gap-5 hidden">
          <div className="item flex gap-5 flex-col">
            <h2 className="text-md font-bold">Web Development</h2>
            <span className="text-lightGrey">
              {" "}
              <ActiveLinks
                pathname={pathname}
                url={"/category/Graphics&Design"}
              >
                Front-End Development
              </ActiveLinks>
            </span>{" "}
            <span className="text-lightGrey">
              {" "}
              <ActiveLinks
                pathname={pathname}
                url={"/category/digitalmarketing"}
              >
                Back-End Development
              </ActiveLinks>
            </span>{" "}
            <span className="text-lightGrey">
              {" "}
              <ActiveLinks
                pathname={pathname}
                url={"/category/writing&translation"}
              >
                UI/UX Design{" "}
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              {" "}
              <ActiveLinks
                pathname={pathname}
                url={"/category/video&animation"}
              >
                E-Commerce Development{" "}
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/category/music&audio"}>
                WordPress Development
              </ActiveLinks>
            </span>{" "}
          </div>
          <div className="item flex gap-5 flex-col">
            <h2 className="text-md font-bold">Graphics Design</h2>{" "}
            <span className="text-lightGrey ">
              {" "}
              <ActiveLinks pathname={pathname} url={"/Press&News"}>
                Typography & Illustration
              </ActiveLinks>
            </span>{" "}
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/Partnerships"}>
                Web Design
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/TermOfServices"}>
                Logo Designs
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/ProperyClaim"}>
                Social Media Graphics
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/ContactSales"}>
                3D Modeling and Rendering
              </ActiveLinks>
            </span>
          </div>
          <div className="item flex gap-5 flex-col">
            <h2 className="text-md font-bold">Digital Marketing</h2>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/HelpSupport"}>
                Search Engine Optimization (SEO)
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/Trust&Safety"}>
                Content Marketing
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/Selling"}>
                Pay-Per-Click (PPC) Advertising
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/Buying"}>
                Marketing Automation
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/Buying"}>
                Social Media Marketing
              </ActiveLinks>
            </span>
          </div>
          <div className="item flex gap-5 flex-col">
            <h2 className="text-md font-bold">Writing & Translation</h2>

            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                Technical Writing
              </ActiveLinks>
            </span>

            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                Ghost Writing
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                Content Writing
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                Creative Writing
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                Copy Writing
              </ActiveLinks>
            </span>
          </div>
          <div className="item flex gap-5 flex-col">
            <h2 className="text-md font-bold">Video Animation</h2>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                2D Animations
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                3D Animations
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                Infographic Videos
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                Virtual Reality (VR) Animation
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                Character Animation
              </ActiveLinks>
            </span>
          </div>
          <div className="item flex gap-5 flex-col">
            <h2 className="text-md font-bold">AI Services</h2>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                Natural Language Processing (NLP) Services
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                Computer Vision Solutions
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                Infographic Videos
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                AI in Customer Service
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                Machine Learning Model Development
              </ActiveLinks>
            </span>
          </div>
          <div className="item flex gap-5 flex-col">
            <h2 className="text-md font-bold">
              Software Quality Assurance SQA
            </h2>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                Functional Testing
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                Non-functional Testing
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                User Acceptance Testing (UAT)
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                Quality Metrics and Measurement
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                Alpha and Beta Testing
              </ActiveLinks>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryModal;
