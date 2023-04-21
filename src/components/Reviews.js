import Review from "./Review";
function Reviews(props) {
  const { reviews, setReviews, setReview } = props;

  const renderedList = reviews.map(review => {
    return <Review key={review.id} review={review} setReviews={setReviews} setReview={setReview} />;
  });

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-11/12 md:w-4/5 lg:w-2/5 flex justify-between items-center px-1">
        <h2 className="font-medium font-Itim text-lg my-2 text-center">
          {reviews.length} Recension{reviews.length < 2 ? "e" : "i"}
        </h2>
        <p className="font-medium font-Itim text-lg my-2 text-center">
          Voto medio: {reviews.length > 0 ? (averageRating / reviews.length).toFixed(2) : 0}
        </p>
      </div>
      {renderedList}
    </div>
  );
}

export default Reviews;
