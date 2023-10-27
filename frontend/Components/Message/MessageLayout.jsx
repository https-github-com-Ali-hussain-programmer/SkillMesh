"use client";
import p1 from "../../public/people-03.png";
import { BiArrowBack } from "react-icons/bi";
import { LiaPaperPlane } from "react-icons/lia";
import { BsEmojiSmile } from "react-icons/bs";
import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

function MessageLayout(props) {
  const [emoji, setEmojiShow] = useState(false);
  const pathname=usePathname()
  const [message, setMesage] = useState("");
  const emojiRefs = {
    emojiBody: useRef(null),
    emojiButtonRef: useRef(null),
  };
  const handleInput = (e) => {
    setMesage(e.target.value);
  };
  const handleEmoji = (e) => {
    if (
      emojiRefs.emojiBody.current?.contains(e.target) ||
      emojiRefs.emojiButtonRef.current?.contains(e.target)
    ) {
      return;
    }
    setEmojiShow(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleEmoji);
    return () => {
      document.removeEventListener("click", handleEmoji);
    };
  }, []);

  return (
    <>
      <div className="relative flex flex-col overflow-y-scroll text-xl h-full w-full  ">
        <div className="flex gap-2 items-center  border-solid border-[1px] border-gray-600 py-1 rounded-md">
          <div onClick={props.toggleProfile}>
            <BiArrowBack />
          </div>
          <img src={p1.src} alt="error" className="h-[48px] w-[48px]" />
          <h2>John smith</h2>
        </div>
        <div className="flex flex-col">
          <div
          className="text-base my-3"
            style={{
              backgroundColor: `${1 === 0   ? "#5b96f7" : "#4ada80"}`,
              alignSelf: `${1 === 1 ? "flex-end" : "flex-start"}`,
              borderRadius: "10px",
              padding: "6px",
              color: `${1 === 1 ? "white" : "#696969"}`,
              maxWidth: "75%",
            
            }}
          >
            sssssssssssssss
          </div>
          <div
          className="text-base my-2"
            style={{
              backgroundColor: `${1 === 1 ? "#5b96f7" : "white"}`,
              alignSelf: `${1 === 1 ? "flex-end" : "flex-start"}`,
              borderRadius: "10px",
              padding: "6px",
              color: `${1 === 1 ? "white" : "#696969"}`,
              maxWidth: "75%",
            
            }}
          >
            sssssssssssssss
          </div>
        
        </div>

        <div
          ref={emojiRefs.emojiButtonRef}
          className="z-50 text-sm w-[320px] rounded-md flex gap-4 items-center  bg-white text-black fixed bottom-[0px]"
        >
          <input
            type="text"
            value={message}
            className="w-[70%] rounded-md p-2 py-3 outline-none border-2 border-sky-400 border-solid"
            placeholder="Enter Message..."
            onChange={handleInput}
          />
          <button
            className="text-2xl text-sky-600"
            onClick={() => {
              setEmojiShow(!emoji);
            }}
          >
            <BsEmojiSmile />
          </button>
          <button className="text-3xl text-sky-600">
            <LiaPaperPlane />
          </button>
        </div>
        {emoji && (
          <div ref={emojiRefs.emojiBody} className="absolute top-5 right-0">
            <EmojiPicker
              searchDisabled={true}
              skinTonesDisabled={true}
              width={250}
              height={350}
              lazyLoadEmojis={true}
              onEmojiClick={(event) => {
                setMesage(message + event.emoji);
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default MessageLayout;
