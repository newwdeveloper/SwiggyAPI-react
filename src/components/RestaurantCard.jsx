import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    console.log("RestaurantCard Props:", resData); // Debugging Output

    const name = resData?.name || "N/A";
    const cuisines = resData?.cuisines?.join(", ") || "N/A";
    const avgRatingString = resData?.avgRatingString || "N/A";
    const costForTwo = parseInt(
        resData?.costForTwo?.replace(/[^0-9]/g, "") || "0",
        10
    );
    const deliveryTime = resData?.sla?.deliveryTime || "N/A";
    const imageId = resData?.cloudinaryImageId;

    return (
        <div className="res-card">
            {imageId ? (
                <img
                    src={`${CDN_URL + imageId}`}
                    alt={name}
                />
            ) : (
                <p>No Image Available</p>
            )}
            <div className="content">
                <h3>{name}</h3>
                <h4>{cuisines}</h4>
                <h4>{avgRatingString}</h4>
                <h4>₹{costForTwo / 100} for two</h4>
                <h4>{deliveryTime} mins</h4>
            </div>
        </div>
    );
};

export default RestaurantCard;