import React, { useState, useEffect } from "react";

const FetchMeals = () => {
  const [data, setData] = useState(null); // Initialize state with null
  const [loading, setLoading] = useState(true); // Manage loading state
  const [error, setError] = useState(null); // Manage errors

  useEffect(() => {
    async function fetchdata() {
      try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result); // Update state with fetched data
        console.log(result)
      } catch (err) {
        setError(err.message); // Capture any errors
      } finally {
        setLoading(false); // Ensure loading is set to false
      }
    }

    fetchdata();
  }, []); // Dependency array ensures fetch is called only once on mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
     <section className="menu" id="menu">
<h1 className="heading">
  our <span>menu</span>
</h1>

<div className="box-container">
  {data?.meals?.map((meal) => (
    <div className="box" >
      <img src={meal.strMealThumb} alt="" />
      <h3>{meal.strMeal}</h3>
      <h3>{meal.strArea}</h3>
      
    </div>
  ))}
</div>
</section> 
  );
};

export default FetchMeals;



{/* <div>
      <h1>Fetched Meals</h1>
      <ul>
        {data?.meals?.map((meal) => (
          <li key={meal.idMeal}>
            <h3>{meal.strMeal}</h3>
            <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: "150px" }} />
            <p>{meal.strInstructions.slice(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div> */}