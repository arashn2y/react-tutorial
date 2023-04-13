const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

import { useState } from "react";
import Button from "./Button";

const ReviewCard = (props) => {
  const {title} = props;

  const [opinion, setOpinion] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState('');
  const [borderColor, setBorderColor] = useState("border-gray-100");
  
  const changeHandler = (event) => {
    const userInput = event.target.value.trim();

    setError('');
    setBorderColor("border-gray-100");
    setOpinion(userInput);

    if(userInput.length === 0) {
      setDisabled(true);  
    } else {
      setDisabled(false);
    }
  }

  const clickHandler = () => {
    if(opinion.length < 8) {
      setError("devi scrivere almeno 8 caratteri");
      setBorderColor("border-red-500");
    } else {
      setError("");
      setBorderColor("border-gray-100");
    }
  }

  // const renderedRating = [...array].map((number, index) => {
  //   return (
  //     <button
  //       key={index}
  //       className="border-2 border-transparent mx-1 rounded-50 text-sm md:text-base w-6 h-6 md:w-8 md:h-8 cursor-pointer transition-all ease-in duration-150 bg-slate-100 hover:bg-dark-green"
  //       onClick={() => clickHandler(index + 1)}
  //       disabled={false}>
  //       {index + 1}
  //     </button>
  //   );
  // });

  return (
    <div className="w-full flex justify-center items-center p-1">
      <div className="w-11/12 md:w-4/5 lg:w-2/5 flex flex-col p-8 mt-10 mb-5 border-2 border-gray-100 rounded-sm shadow-dark">
        <div>
          <h2 className="font-medium font-Itim text-3xl my-4 text-center">{title}</h2>
          {/* <div className="flex justify-between my-4">{renderedRating}</div> */}
            <div className={`w-full flex justify-center items-center p-1 mt-4 rounded-md border-2 ${borderColor}`}>
              <input
                type="text"
                value={opinion}
                className="w-full focus:outline-none border-none text-xl p-1"
                placeholder="la tua opinione..."
                onChange={changeHandler}
                style={{ width: "100%", border: "none", fontSize: "1rem", padding: "5px" }}
              />
              <Button clickHandler={clickHandler} disabled={disabled} text='Conferma'/>
            </div>
            <div className="text-red-500 font-semibold h-3 mt-2 text-center">{error}</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
