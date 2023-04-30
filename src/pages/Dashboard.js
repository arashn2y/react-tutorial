import { useState, useEffect } from "react";
import { FiLogIn } from "react-icons/fi";

import Header from "../components/Header";
import ReviewCard from "../components/ReviewCard";
import Reviews from "../components/Reviews";
import { DashboardContext } from "../contexts/DashboardContext";

const Dashboard = () => {
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState({
    id: "",
    opinion: "",
    rating: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const fetchData = async () => {
        const data = await fetch('https://engimapi.arashnouri.dev/api/reviews');
        const json = await data.json();
        const filteredReview = json.map((review) => {
          return {
            id: review.id,
            opinion: review.description,
            rating: review.rating
          }
        })
        setLoading(false);
        setReviews(filteredReview);
      }
      fetchData();
  },[]);

  return (
    <>
      <Header title="Feedback UI" icon={<FiLogIn />} link='/login' />
      <main className="w-full flex flex-col justify-center items-center relative">
        <DashboardContext.Provider value={{
      review,
      setReview,
      reviews,
      setReviews
    }}>
        <ReviewCard title="Come descriverebbe la sua esperienza?" setReviews={setReviews} review={review} setReview={setReview} />
        <Reviews reviews={reviews} />
        </DashboardContext.Provider>
      </main>
      <div className="w-full text-center">
      <p>{loading ? 'Loading' : ''}</p>
      </div>
    </>
  );
};

export default Dashboard;
