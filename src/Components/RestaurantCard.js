import { IMG_CDN_URL } from "../../constant";
const RestaurantCard = ({
  name,
  cuisines,
  lastMileTravelString,
  cloudinaryImageId,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h3>{lastMileTravelString} Minutes</h3>
    </div>
  );
};

export default RestaurantCard;
