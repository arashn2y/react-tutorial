import Review from "./Review";
function Reviews(props) {

  return (
    <div className="w-full flex flex-col justify-center items-center">
          <div className="w-11/12 md:w-4/5 lg:w-2/5 flex justify-between items-center px-1">
            <h2 className="font-medium font-Itim text-lg my-2 text-center">
            0 Recensione
            </h2>
            <p className="font-medium font-Itim text-lg my-2 text-center">
              Voto medio: 
            </p>
          </div>
            <Review />
        </div>
  )
}

export default Reviews;