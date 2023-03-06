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
      <h4>{cuisines.join(",")}</h4>
      <h5>{lastMileTravelString} Minutes</h5>
    </div>
  );
};

export default RestaurantCard;
