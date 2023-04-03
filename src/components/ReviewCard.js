const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ReviewCard = () => {

  // const clickHandler = number => {
  //   console.log(number);
  // };

  // const inputHandler = e => {
  //   console.log(e.target.value);
  // };

  // const inputClickHandler = () => {
  //   console.log("input button clicked");
  // };

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
          <h2 className="font-medium font-Itim text-3xl my-4 text-center">Come descriverebbe la sua esperienza?</h2>
          {/* <div className="flex justify-between my-4">{renderedRating}</div> */}
            {/* <div className="w-full flex justify-center items-center p-1 mt-4 rounded-md border-2 border-gray-100">
              <input
                type="text"
                value={test}
                className="w-full focus:outline-none border-none text-xl p-1"
                placeholder="la tua opinione..."
                onChange={inputHandler}
                style={{ width: "100%", border: "none", fontSize: "1rem", padding: "5px" }}
              />

              <button
                className="border-none rounded-md px-2 py-2 cursor-pointer font-normal transition-all ease-in duration-100 bg-slate-300 disabled:cursor-default disabled:bg-slate-100 disabled:text-slate-500 hover:enabled:bg-dark-green hover:enabled:text-white"
                onClick={inputClickHandler}
                disabled={true}>
                Conferma
              </button>
            </div> */}
            {/* <div className="text-red-500 font-semibold h-3 mt-2 text-center">error</div> */}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
