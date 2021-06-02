import PropTypes from "prop-types";

const ReviewItem = (props) => {
  ReviewItem.propTypes = {
    rating: PropTypes.number,
    author: PropTypes.string,
    text: PropTypes.string
  };
  const stars = [];
  for (let index = 0; index < props.rating; index++) {
    stars.push(<i key={index} className="fa fa-star" />);
  }
  return (
    <div className="ReviewItem">
      {stars}
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
