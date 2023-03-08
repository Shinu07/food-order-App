import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerComponent from "./ShimmerUI";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    //API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  // if (!allRestaurants) return <h2>No restaurant</h2>;

  return allRestaurants.length === 0 ? (
    <>
      <ShimmerComponent />
      <ShimmerComponent />
      <ShimmerComponent />
    </>
  ) : (
    <>
      <div className="search">
        <input
          type="text"
          className="search-text"
          plceholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          search
        </button>
      </div>

      <div className="restaurant-list">
        {filteredRestaurants.length === 0 ? (
          <h1>No restaurant match your Filter!!</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
