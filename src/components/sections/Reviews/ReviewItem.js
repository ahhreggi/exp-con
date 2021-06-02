import PropTypes from "prop-types";

const ReviewItem = (props) => {
  ReviewItem.propTypes = {
    rating: PropTypes.number,
    author: PropTypes.string,
    text: PropTypes.string
  };
  return (
    <div className="ReviewItem">
      {props.rating}
      <h2>
        {props.author.toUpperCase()}
      </h2>
      <h3>
        {`"${props.text}"`}
      </h3>
    </div>
  );
};

export default ReviewItem;
