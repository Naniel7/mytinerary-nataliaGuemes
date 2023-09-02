import React from 'react';

const Itinerary = ({ itinerary }) => {
    const { authorName, authorPhoto, price, duration, likes, hashtags } = itinerary;

    const renderPrice = () => {
        const priceIcons = Array.from({ length: price }, (_, index) => (
            <span key={index} role="img" aria-label="Price">
                💵
            </span>
        ));
        return priceIcons;
    };

    return (
        <div className="itinerary">
            <div className="itinerary-header">
                <img src={authorPhoto} alt={`Author ${authorName}`} />
                <div className="itinerary-author">{authorName}</div>
            </div>
            <div className="itinerary-details">
                <div className="itinerary-price">{renderPrice()}</div>
                <div className="itinerary-duration">{duration} hours</div>
                <div className="itinerary-likes">{likes} likes</div>
                <div className="itinerary-hashtags">
                    {hashtags.map((tag, index) => (
                        <span key={index} className="hashtag">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
            <button className="view-more-btn">View More</button>
        </div>
    );
};

export default Itinerary;
