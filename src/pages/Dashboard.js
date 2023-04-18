import { useState } from "react";
import { FiLogIn } from "react-icons/fi";

import Header from "../components/Header";
import ReviewCard from "../components/ReviewCard";
import Reviews from "../components/Reviews";

const Dashboard = () => {
  const [reviews, setReviews] = useState([]);
  console.log(reviews);
  return (
    <>
      <Header title="Feedback UI" icon={<FiLogIn />} />
      <main className="w-full flex flex-col justify-center items-center relative">
      <ReviewCard title="Come descriverebbe la sua esperienza?" setReviews={setReviews}/>
      <Reviews />
      </main>
    </>
  );
};

export default Dashboard;
