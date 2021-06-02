import PropTypes from "prop-types";
import "./index.scss";
import Nav from "../../Nav";
import ReviewItem from "./ReviewItem";

const Reviews = (props) => {

  Reviews.propTypes = {
    setView: PropTypes.func
  };

  const fillerText = "No commitment, cancel anytime. Never worry about forgetting a payment again!";

  const reviewData = [
    {
      rating: 5,
      author: "Artist",
      text: fillerText
    },
    {
      rating: 5,
      author: "Producer",
      text: fillerText
    },
    {
      rating: 5,
      author: "Music Fan",
      text: fillerText
    },
  ];

  // Create ReviewItem components
  const reviews = reviewData.map((review, index) => {
    return (
      <ReviewItem
        key={index}
        rating={review.rating}
        author={review.author}
        text={review.text}
      />
    );
  });

  return (
    <div className="Perks">

      {/* Nav Bar */}
      <Nav showButton={true} styles="bg-rainbow" setView={props.setView} />

      {/* Main Content */}
      <main>

        {/* Section Text */}
        <div className="title">
          <h1>REVIEWS</h1>
        </div>

        {/* ReviewItem Components */}
        <section className="reviews">
          {reviews}
        </section>

      </main>

    </div>
  );
};

export default Reviews;
