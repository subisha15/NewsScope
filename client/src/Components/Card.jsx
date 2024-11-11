import PropTypes from "prop-types";
const Card = ({ data }) => {
  return (
    <div className="flex  gap-4 justify-center">
      {data.map((curItem, index) => {
        return (
          <div
            className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
            key={index}
          >
            <img
              className="w-full h-48 object-cover"
              src={curItem.urlToImage || "https://via.placeholder.com/150"}
              alt={curItem.title}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{curItem.title}</div>
              <p className="text-gray-700 text-base">
                {curItem.description || "No description available."}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <a
                href={curItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold hover:bg-blue-600"
              >
                Read More
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
Card.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string.isRequired,
      urlToImage: PropTypes.string,
    })
  ).isRequired,
};
export default Card;
