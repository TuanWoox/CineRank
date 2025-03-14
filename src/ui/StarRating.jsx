import { useState } from "react";

function StarRating({ totalStars = 5, onRate }) {
  const [hovered, setHovered] = useState(0);
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    if (!value) return;
    setRating(value);
    if (onRate) onRate(value);
  };

  return (
    <div className="flex gap-1 mt-4">
      {Array.from({ length: totalStars }, (_, i) => {
        const starValue = i + 1;
        return (
          <button
            key={starValue}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => setHovered(starValue)}
            onMouseLeave={() => setHovered(0)}
            className={`text-3xl transition-all ${
              starValue <= (hovered || rating)
                ? "text-yellow-400"
                : "text-gray-400"
            }`}
            aria-label={`Rate ${starValue} star${starValue > 1 ? "s" : ""}`}
          >
            ★
          </button>
        );
      })}
    </div>
  );
}

export default StarRating;
