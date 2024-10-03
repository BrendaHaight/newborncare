import Navbar from "./navbar";
import IonIcon from "@reacticons/ionicons";
import { useState } from "react";

// Define the structure of a review
interface Review {
  name: string;
  rating: number;
  review: string;
  date: string;
  initial: string;
  bgColor: string;
}

const ReviewPage: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      name: "Sarah Johnson",
      rating: 5,
      review:
        "Elaine was a lifesaver! Her advice on sleep training helped our baby sleep training helped our baby sleep through the night in just a few weeks.",
      date: "Sep 21, 2023",
      initial: "S",
      bgColor: "bg-tealish",
    },
    {
      name: "Emily Roberts",
      rating: 4.5,
      review:
        "Elaine's care amd guidance were incredible. As first-time parents, we felt so reassured by her support. ",
      date: "Oct 5, 2023",
      initial: "E",
      bgColor: "bg-pinkish",
    },
  ]);

  const [name, setName] = useState<string>("");
  const [rating, setRating] = useState<number | "">("");
  const [review, setReview] = useState<string>("");
  const [searchTerm, setSerchTerm] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !rating || !review) {
      alert("Please fill out all fields");
      return;
    }
    // Get the current date
    const date = new Date().toLocaleDateString();

    // Create a new review object
    const newReview: Review = {
      name,
      rating: Number(rating),
      review: review,
      date,
      initial: name[0],
      bgColor: name[0] === "A" ? "bg-yellowish" : "bg-tealish",
    };
    // Add the new review to the existing reviews
    setReviews([...reviews, newReview]);

    // Clear the form
    setName("");
    setRating("");
    setReview("");
  };

  return (
    <div className="min-h-screen bg-pinkish bg-background-jpeg bg-no-repeat bg-cover">
      <Navbar />
      <div className="flex justify-center items-center min-h-screen p-10">
        <div className="md:w-3/5 w-3-4 px-10 flex-col gap-2 p-5 bg-gray-700 bg-opacity-80 text-yellowish rounded-lg">
          <h1 className="py-5 text-lg">Reviews</h1>

          {/* Search Bar */}
          <div className="flex bg-gray-500 bg-opacity-20 border border-gray-200 rounded-md">
            <IonIcon className="py-4 p-3" name="search-outline" />
            <input
              type="text"
              placeholder="Search Review"
              className="p-2 bg-transparent focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSerchTerm(e.target.value)}
            />
          </div>
          {/* Write a Review Form */}
          <form action=""></form>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
