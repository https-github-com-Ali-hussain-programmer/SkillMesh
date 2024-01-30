import React from 'react';

function GigTitle({title, setTitle}) {


  const handleTitleChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 50) {
      setTitle(inputValue);
    }
  };

  return (
    <div className="flex gap-[60px] py-11 px-10">
      <div className="flex-[1]">
        <h3 className="text-[22px] font-semibold">Gig title</h3>
        <p className="pt-[10px] text-[18px]">
          As your Gig storefront, your title is the most important place to
          include keywords that buyers would likely use to search for a service
          like yours.
        </p>
      </div>
      <div className="flex-[2]">
        <textarea
          name=""
          id=""
          cols={10}
          rows={2}
          value={title}
          onChange={handleTitleChange}
          className="w-full border-[1.5px] border-black rounded-lg py-3 px-3 text-[18px]"
          placeholder="I will do something I am really good"
        ></textarea>
        <p className="text-red-500 text-[15px]">
          {title.length} / 50 characters
        </p>
        {title.length < 50 && (
          <p className="text-red-500 text-[15px]">50 character miximum</p>
        )}
      </div>
    </div>
  );
}

export default GigTitle;
