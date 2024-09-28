import Navbar from "./navbar";
import { useState } from "react";

// Define the structure of a review
interface ReviewPage {
  name: string;
  rating: number;
  reviewText: string;
}

function Review() {
  const [name, setName] = useState<string>("");
  const [rating, setRating] = useState<number | "">("");
  const [reviewText, setReviewText] = useState<string>("");
  const [reviews, setReviews] = useState<ReviewPage[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form submitted"); // Check if submit function is triggered
    console.log({ name, rating, reviewText }); // Check if form inputs are captured correctly

    if (!name || !rating || !reviewText) {
      alert("Please fill out all fields!");
      return;
    }

    // Add new review to the list of reviews
    const newReview = { name, rating: Number(rating), reviewText };

    // Add new review to the reviews array
    setReviews([...reviews, newReview]);

    // Clear form inputs
    setName("");
    setRating("");
    setReviewText("");
  };

  return (
    <>
      <Navbar />

      <div className="flex flex-col min-h-screen w-full bg-pinkish bg-background-jpeg bg-no-repeat bg-cover ">
        <div className="pt-[80px] flex-grow">
          <h2 className="text-3xl text-tealish font-bold text-center mt-8">
            Reviews
          </h2>

          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto p-4 bg-transparent shadow-md rounded mt-6"
          >
            <div className="mb-4">
              <label
                className="block text-sm text-yellowish font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm text-yellowish font-bold mb-2"
                htmlFor="rating"
              >
                Rating
              </label>
              <input
                type="number"
                id="rating"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="w-full px-3 py-2 border rounded"
                min="1"
                max="5"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm text-yellowish font-bold mb-2"
                htmlFor="review"
              >
                Review
              </label>
              <textarea
                id="review"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-tealish text-white py-2 rounded"
            >
              Submit Review
            </button>
          </form>

          <div className="mt-8">
            <h3 className="text-2xl text-pinkish font-bold"> All Reviews</h3>
            {reviews.length === 0 ? (
              <p>No reviews yet. Be the first to leave a review!</p>
            ) : (
              <ul className="mt-4">
                {reviews.map((review, index) => (
                  <li key={index} className="bg-transparent p-4 mb-4 rounded">
                    <p className="font-bold ">
                      {review.name} (Rating: {review.rating})
                    </p>
                    <p>{review.reviewText}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
