import React, { useState } from 'react';
import axios from 'axios';
import Card from './Card';
import Pagination from './Pagination';
import './Home.css';

function Apirecipe() {
  const [search, setSearch] = useState('');
  const [recipeData, setRecipeData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); 

  const searchRecipe = () => {
    axios
      .get(
        `https://api.edamam.com/search?q=${search}&app_id=03772fa2&app_key=be3af6637cd3e810e74391368e218459`
      )
      .then((res) => {
        setRecipeData(res.data.hits);
        console.log(res.data.hits);
      })
      .catch((err) => console.log(err));
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRecipes = recipeData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchRecipe();
    }
  };

  return (
    <div>
      <h1 className='inspir'>Looking for inspiration?</h1>
      <div>
      
      <div className='ideas'>
      
        <div className='card'>   
  <img src='https://realfood.tesco.com/media/images/472x310-Tesco-DinnerFor2-FridgeRaidFeasts-16024-BaconMushroomBreakfastHash-0e5cf25f-f42c-45a2-b4a3-f4f9f06ee002-0-472x310.jpg' height="230px"/>
  <h4>Bacon and mushroom breakfast hash</h4>
        </div>
        <div className='card'>

        <img src='https://realfood.tesco.com/media/images/472x310-Tesco-DinnerFor2-FridgeRaidFeasts-16037-BaconSpinachSpaghetti-e09fd0f1-affe-45e9-98b9-6983b5396228-0-472x310.jpg' height="230px"/>
  <h4>Bacon and spinach spaghetti</h4>
        </div>
        <div className='card'>

        <img src='https://realfood.tesco.com/media/images/472x310-Tesco-DinnerFor2-FridgeRaidFeasts-16065-BaconTomatoMuffins-e24d6750-6f59-4c54-ad13-b77a5498b88c-0-472x310.jpg' height="230px"/>
  <h4>Bacon and Tomato Muffin</h4>
        </div>
        <div className='card'>

        <img src='https://realfood.tesco.com/media/images/1400x919-Stovetop-mac-and-cheese-2f44e87c-6a30-4526-9ddb-c97054493af7-0-1400x919.jpg' height="230px"/>
  <h4>Stovetop bacon 'mac and cheese' recipe</h4>
        </div>
        </div>
      </div>
      <div className='input-field'>
        <input 
          type='text'
          placeholder='Find Your Recipe..'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyPress}
        /><br></br>
        <button className='search' onClick={searchRecipe}>Search</button>
      </div>
      <div className='container'>
        <Card recipe={currentRecipes} />
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={recipeData.length}
        paginate={paginate}
      />
    
    </div>
  );
}

export default Apirecipe;
