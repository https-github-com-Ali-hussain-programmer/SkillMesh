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

function Footer() {
  return (
    <footer
      className="text-secondary-white sm:mt-[50px] pt-[40px] pb-[20px] border-t border-solid border-gray-200"
    >
      <div className="container mx-auto">
        <div className=" sm:flex  lg:justify-between lg:gap:0  flex-wrap gap-10 hidden">
          <div className="item flex gap-5 flex-col">
            <h2 className="text-md font-bold">Categories</h2>
            <span className="text-lightGrey">Graphics & Design</span>
            <span className="text-lightGrey">Digital Marketing</span>
            <span className="text-lightGrey">Writing & Translation</span>
            <span className="text-lightGrey">Video & Animation</span>
            <span className="text-lightGrey">Music & Audio</span>
            <span className="text-lightGrey">Programming & Tech</span>
            <span className="text-lightGrey">Data</span>
            <span className="text-lightGrey">Business</span>
            <span className="text-lightGrey">Lifestyle</span>
            <span className="text-lightGrey">Photography</span>
            <span className="text-lightGrey">Sitemap</span>
          </div>
          <div className="item flex gap-5 flex-col">
            <h2 className="text-md font-bold">About</h2>
            <span className="text-lightGrey">Press & News</span>
            <span className="text-lightGrey">Partnerships</span>
            <span className="text-lightGrey">Privacy Policy</span>
            <span className="text-lightGrey">Terms of Service</span>
            <span className="text-lightGrey">Intellectual Property Claims</span>
            <span className="text-lightGrey">Investor Relations</span>
            <span className="text-lightGrey">Contact Sales</span>
          </div>
          <div className="item flex gap-5 flex-col">
            <h2 className="text-md font-bold">Support</h2>
            <span className="text-lightGrey">Help & Support</span>
            <span className="text-lightGrey">Trust & Safety</span>
            <span className="text-lightGrey">Selling on Liverr</span>
            <span className="text-lightGrey">Buying on Liverr</span>
          </div>
          <div className="item flex gap-5 flex-col">
            <h2 className="text-md font-bold">Community</h2>
            <span className="text-lightGrey">Customer Success Stories</span>
            <span className="text-lightGrey">Community hub</span>
            <span className="text-lightGrey">Forum</span>
            <span className="text-lightGrey">Events</span>
            <span className="text-lightGrey">Blog</span>
            <span className="text-lightGrey">Influencers</span>
            <span className="text-lightGrey">Affiliates</span>
            <span className="text-lightGrey">Podcast</span>
            <span className="text-lightGrey">Invite a Friend</span>
            <span className="text-lightGrey">Become a Seller</span>
            <span className="text-lightGrey">Community Standards</span>
          </div>
          <div className="item flex gap-5 flex-col">
            <h2 className="text-md font-bold">More From Fiverr</h2>
            <span className="text-lightGrey">Liverr Business</span>
            <span className="text-lightGrey">Liverr Pro</span>
            <span className="text-lightGrey">Liverr Logo Maker</span>
            <span className="text-lightGrey">Liverr Guides</span>
            <span className="text-lightGrey">Get Inspired</span>
            <span className="text-lightGrey">Liverr Select</span>
            <span className="text-lightGrey">ClearVoice</span>
            <span className="text-lightGrey">Liverr Workspace</span>
            <span className="text-lightGrey">Learn</span>
            <span className="text-lightGrey">Working Not Working</span>
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
                        <span className="text-lightGrey">
                          Graphics & Design
                        </span>
                        <span className="text-lightGrey">
                          Digital Marketing
                        </span>
                        <span className="text-lightGrey">
                          Writing & Translation
                        </span>
                        <span className="text-lightGrey">
                          Video & Animation
                        </span>
                        <span className="text-lightGrey">Music & Audio</span>
                        <span className="text-lightGrey">
                          Programming & Tech
                        </span>
                        <span className="text-lightGrey">Data</span>
                        <span className="text-lightGrey">Business</span>
                        <span className="text-lightGrey">Lifestyle</span>
                        <span className="text-lightGrey">Photography</span>
                        <span className="text-lightGrey">Sitemap</span>
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
                        <span className="text-lightGrey">
                          Investor Relations
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
                          Selling on Liverr
                        </span>
                        <span className="text-lightGrey">Buying on Liverr</span>
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
                        <span className="text-lightGrey">
                          Customer Success Stories
                        </span>
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
                        More from fiverr
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <div className="item flex gap-5 flex-col">
                        <span className="text-lightGrey">fiverr Business</span>
                        <span className="text-lightGrey">fiverr Pro</span>
                        <span className="text-lightGrey">
                          fiverr Logo Maker
                        </span>
                        <span className="text-lightGrey">fiverr Guides</span>
                        <span className="text-lightGrey">Get Inspired</span>
                        <span className="text-lightGrey">fiverr Select</span>
                        <span className="text-lightGrey">flearVoice</span>
                        <span className="text-lightGrey">fiverr Workspace</span>
                        <span className="text-lightGrey">Learn</span>
                        <span className="text-lightGrey">
                          Working Not Working
                        </span>
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
            <h2 className="text-3xl fo font-bold">fiverr</h2>
            <span className="text-sm tracking-wider">
              © fiverr International Ltd. 2023
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
