import React, { useState } from "react";
import "./App.css";

const FaqItem = ({question, answers}) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  }


  return (
    <div className={` mb-2 border border-slate-200 rounded-md overflow-hidden ${show ? 'active' : ''}`}>
      <div className="faq-item-header bg-red-600 p-3 cursor-pointer font-medium text-white transition duration-300 ease hover:bg-red-400" onClick={toggleShow}>{question}</div>
      <div className="faq-item-body bg-slate-50 max-h-0 overflow-hidden" style={{ maxHeight: show ? '500px' : '0' }}>
        <div className="faq-item-body-content mt-2 p-4 text-slate-950 ">{answers}</div>
      </div>


    </div>
  )
}

const FacAccordion = ({data}) => {
  return (
    <div className="fac-accordion max-w-[800px] m-auto">
      <h2 className=" mb-2 font-bold text-white ">FAQs</h2>
       {data.map((item) => (
        <FaqItem key={item.id} question={item.question} answers={item.answers} />
       ))}
    </div>
  );
};

const data = [
  {id: 1, question: "Why React is used in UI?"  , answers:"UI is built from small units like buttons, text, and images. React lets you combine them into reusable, nestable components."},
  {id: 2, question: "What is ReactJS vs JavaScript?"  , answers:"React is a JavaScript library for building user interfaces, while JavaScript is a programming language used for various web development tasks."},
  {id: 3, question: "What is hooks in React?"  , answers:"Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes."},
  {id: 4, question: "What is JSX in React?"  , answers:"JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. "},


];




function App() {
  return (
    <div className="App">
      <FacAccordion  data={data} />
    </div>
  );
}

export default App;
