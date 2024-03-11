import React, { useState } from "react";

function Accordion() {
  return (
    <div className="">
      <div>FAQ</div>
      <FaqItem />
      <FaqItem />
      <FaqItem />
      <FaqItem />
      <FaqItem />
    </div>
  );
}

export default Accordion;

const FaqItem = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [symbol, setSymbol] = useState("+");

  const handleClick = () => {
    setIsOpen(!isOpen);
    setSymbol(isOpen ? "+" : "-");
  };

  return (
    <>
      <div className="border my-6 rounded-md mx-2">
        <div
          className="p-2 px-4 bg-slate-300 flex justify-between"
          onClick={handleClick}
        >
          <div>Sample Question</div>
          <div>{symbol}</div>
        </div>
        <div className={isOpen ? p-2 px-4 : hidden}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          fugit autem vitae ratione cumque provident dolores deserunt ipsam
          facilis sit!
        </div>
      </div>
    </>
  );
};