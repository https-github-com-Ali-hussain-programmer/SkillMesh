"use client";
import React from "react";
import twitter from "../../public/twitter.png";
import facebook from "../../public/facebook.png";
import pinterest from "../../public/pinterest.png";
import coin from "../../public/coin.png";
import language from "../../public/language.png";
import instagram from "../../public/instagram.png";
import linkedin from "../../public/linkedin.png";
import accessibility from "../../public/accessibility.png";
import { Category } from "@/utils/data";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Image from "next/image";
import { motion as m } from "framer-motion";
import { footerVariants } from "@/utils/motion";
import { usePathname } from "next/navigation";
import ActiveLinks from "../Shared/ActiveLinks";

function Footer() {
  const pathname = usePathname();
  return (
    <footer
      className={`${
        pathname == "/" ? "bg-dark-black text-secondary-white" : "text-black"
      }  pt-[40px] pb-[20px] border-t border-solid border-gray-200`}
    >
      <div className="container mx-auto">
        <div className=" sm:flex  lg:justify-between lg:gap:0  flex-wrap gap-10 hidden">
          <div className="item flex gap-5 flex-col">
            <h2 className="text-md font-bold">Categories</h2>
            {Category.map((c, index) => {
              return (
                <span className="text-lightGrey">
                  <ActiveLinks
                    pathname={pathname}
                    url={`/Categories/${c.category}`}
                  >
                    {c.category}
                  </ActiveLinks>
                </span>
              );
            })}
          </div>
          <div className="item flex gap-5 flex-col">
            <h2 className="text-md font-bold">About</h2>{" "}
            <span className="text-lightGrey ">
              {" "}
              <ActiveLinks pathname={pathname} url={"/Press&News"}>
                Press & News
              </ActiveLinks>
            </span>{" "}
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/Partnerships"}>
                Partnerships{" "}
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/Privacy&Policy"}>
                Privacy Policy{" "}
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/TermOfServices"}>
                Terms of Service{" "}
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/ProperyClaim"}>
                Intellectual Property Claims{" "}
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/ContactSales"}>
                Contact Sales{" "}
              </ActiveLinks>
            </span>
          </div>
          <div className="item flex gap-5 flex-col">
            <h2 className="text-md font-bold">Support</h2>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/HelpSupport"}>
                Help & Support{" "}
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/Trust&Safety"}>
                Trust & Safety{" "}
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/Selling"}>
                Selling on Liverr{" "}
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/Buying"}>
                Buying on Liverr{" "}
              </ActiveLinks>
            </span>
          </div>
          <div className="item flex gap-5 flex-col">
            <h2 className="text-md font-bold">Community</h2>

            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                Community hub{" "}
              </ActiveLinks>
            </span>

            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                Events{" "}
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                Blog{" "}
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                Influencers{" "}
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                Affiliates{" "}
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                Podcast{" "}
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                Invite a Friend{" "}
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                Become a Seller{" "}
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                Community Standards{" "}
              </ActiveLinks>
            </span>
          </div>
          <div className="item flex gap-5 flex-col">
            <h2 className="text-md font-bold">More From SkillMesh</h2>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                SkillMesh Business{" "}
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                SkillMesh Pro{" "}
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                SkillMesh Logo Maker{" "}
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                SkillMesh Guides{" "}
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                Get Inspired{" "}
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                SkillMesh Select{" "}
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                ClearVoice{" "}
              </ActiveLinks>
            </span>
            <span className="text-lightGrey">
              <ActiveLinks pathname={pathname} url={"/s"}>
                SkillMesh Workspace{" "}
              </ActiveLinks>
            </span>
          </div>
        </div>
        <div className="sm:hidden container mx-auto  ">
          <Accordion allowToggle={true}>
            <div className=" flex  flex-col gap-4  ">
              <AccordionItem className="border-none">
                {({ isDisabled }) => (
                  <>
                    <h2 className="text-md font-bold">
                      <AccordionButton>
                        <span>Categories</span>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <div className="item flex gap-5 flex-col">
                        {Category.map((c, index) => {
                          return (
                            <span key={index} className="text-lightGrey">
                              {c.category}
                            </span>
                          );
                        })}
                      </div>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem className="border-none">
                {({ isExpanded }) => (
                  <>
                    <h2 className="text-md font-bold">
                      <AccordionButton>
                        About
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <div className="item flex gap-5 flex-col">
                        <span className="text-lightGrey">Press & News</span>
                        <span className="text-lightGrey">Partnerships</span>
                        <span className="text-lightGrey">Privacy Policy</span>
                        <span className="text-lightGrey">Terms of Service</span>
                        <span className="text-lightGrey">
                          Intellectual Property Claims
                        </span>

                        <span className="text-lightGrey">Contact Sales</span>
                      </div>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem className="border-none">
                {({ isExpanded }) => (
                  <>
                    <h2 className="text-md font-bold">
                      <AccordionButton>
                        Support
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <div className="item flex gap-5 flex-col">
                        <span className="text-lightGrey">Help & Support</span>
                        <span className="text-lightGrey">Trust & Safety</span>
                        <span className="text-lightGrey">
                          Selling on SkillMesh
                        </span>
                        <span className="text-lightGrey">
                          Buying on SkillMesh
                        </span>
                      </div>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem className="border-none">
                {({ isExpanded }) => (
                  <>
                    <h2 className="text-md font-bold">
                      <AccordionButton>
                        Community
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <div className="item flex gap-5 flex-col">
                        <span className="text-lightGrey">Community hub</span>
                        <span className="text-lightGrey">Forum</span>
                        <span className="text-lightGrey">Events</span>
                        <span className="text-lightGrey">Blog</span>
                        <span className="text-lightGrey">Influencers</span>
                        <span className="text-lightGrey">Affiliates</span>
                        <span className="text-lightGrey">Podcast</span>
                        <span className="text-lightGrey">Invite a Friend</span>
                        <span className="text-lightGrey">Become a Seller</span>
                        <span className="text-lightGrey">
                          Community Standards
                        </span>
                      </div>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem className="border-none">
                {({ isExpanded }) => (
                  <>
                    <h2 className="text-md font-bold">
                      <AccordionButton>
                        More from SkillMesh
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <div className="item flex gap-5 flex-col">
                        <span className="text-lightGrey">
                          SkillMesh Business
                        </span>
                        <span className="text-lightGrey">SkillMesh Pro</span>
                        <span className="text-lightGrey">
                          SkillMesh Logo Maker
                        </span>
                        <span className="text-lightGrey">SkillMesh Guides</span>
                        <span className="text-lightGrey">Get Inspired</span>
                        <span className="text-lightGrey">SkillMesh Select</span>
                        <span className="text-lightGrey">ClearVoice</span>
                        <span className="text-lightGrey">
                          SkillMesh Workspace
                        </span>
                        <span className="text-lightGrey">Learn</span>
                      </div>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </div>
          </Accordion>
        </div>

        <hr className="my-[50px] border-1 border-solid border-gray-300  " />
        <div className=" flex items-center sm:flex-row justify-between flex-col sm:gap-1 gap-4 text-[#b5b6ba]">
          <div className="left sm:gap-4 flex items-center sm:flex-row flex-col">
            <h2 className="text-3xl fo font-bold">SkillMesh</h2>
            <span className="text-sm tracking-wider">
              © SkillMesh International Ltd. 2023
            </span>
          </div>
          <div className="right sm:gap-10 gap-4 flex items-center sm:flex-row flex-col">
            <div className="social flex sm:gap-5 gap-9">
              <Image
                src={twitter}
                alt="Network"
                className="h-[24px] w-[24px]"
              />
              <Image
                src={facebook}
                alt="Network"
                className="h-[24px] w-[24px]"
              />
              <Image
                src={linkedin}
                alt="Network"
                className="h-[24px] w-[24px]"
              />
              <Image
                src={pinterest}
                alt="Network"
                className="h-[24px] w-[24px]"
              />
              <Image
                src={instagram}
                alt="Network"
                className="h-[24px] w-[24px]"
              />
            </div>
            <div className="flex justify-between items-center gap-5">
              <div className="link flex gap-2.5 items-center">
                <Image
                  src={language}
                  alt="Network"
                  className="h-[24px] w-[24px]"
                />
                <span className="text-sm whitespace-nowrap">English</span>
              </div>
              <div className="link flex gap-2.5 items-center">
                <Image src={coin} alt="Network" className="h-[24px] w-[24px]" />
                <span className="text-sm whitespace-nowrap">USD</span>
              </div>
              <Image
                src={accessibility}
                alt="Network"
                className="h-[24px] w-[24px]"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
