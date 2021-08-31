const addNewRecipe = document.getElementById('addNewRecipe');
const showRecipe = document.getElementById('showRecipe');
const filterSearch = document.getElementById('search');


const recipes = [
    {
        info: {
            recipeTitle: 'Sample BreakFast Recipe Title',
            mealType: 'breakFast',
            prepTime: 5,
            cookTime: 30,
            ingredients: ['eggs', 'bacon', 'sausage', 'spinach'],
            instructions: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi amet ipsum eaque voluptate consectetur magni, sint facere recusandae soluta architecto sit cumque in aliquid debitis quos, repellat sequi modi! Eligend',
            customTitle: ['google.com']
        }
    },
    {
        info: {
            recipeTitle: 'Sample Dinner Recipe Title',
            mealType: 'dinner',
            prepTime: 20,
            cookTime: 47,
            ingredients: ['steak', 'greens', 'onions', 'spinach'],
            instructions: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi amet ipsum eaque voluptate consectetur magni, sint facere recusandae soluta architecto sit cumque in aliquid debitis quos, repellat sequi modi! Eligend',
            customTitle: ['be cool', 'stay in school', 'stuff']
        }
    },
    {
        info: {
            recipeTitle: 'Sample Other Recipe Title',
            mealType: 'other',
            prepTime: 20,
            cookTime: 60,
            ingredients: ['fruit', 'vegies', 'salad', 'spinach', 'something else'],
            instructions: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi amet ipsum eaque voluptate consectetur magni, sint facere recusandae soluta architecto sit cumque in aliquid debitis quos, repellat sequi modi! Eligend',
            customTitle: 'this is custom title'
        }
    }
];



const renderRecipes = () => {
    const recipeList = document.getElementById('recipe-list');

    
    if( recipes.length === 0 ){
        recipeList.classList.remove('visible');
        recipeList.classList.add('invisible');
    }else {
        recipeList.classList.add('visible');
        recipeList.classList.remove('invisible');
    }
    

   
    recipeList.innerHTML = '';
    recipes.forEach(recipe => {
        const recipeEl = document.createElement('li');
        const ingredientsEl = document.createElement('li');
        ingredientsEl.innerHTML = '';
        
        const {info,... otherprops} = recipe;
        let newProp;
        for(const key in info) {
                if (
                    key !== 'recipeTitle' &&
                    key !== 'mealType' &&
                    key !== 'prepTime' &&
                    key !== 'cookTime' &&
                    key !== 'ingredients' &&
                    key !== 'instructions' &&
                    key !== 'custonInfo'
                ){
                    console.log(key)
                    newProp = key;
                }
            }
        
        
        let text = 
        `       
        <div class="card">
            <h5 class="card-header">${info.mealType}</h5>
            <div class="card-body">
                <h5 class="card-title">${info.recipeTitle}</h5>
                <p class="card-text"> Cook Time: ${recipe.info.cookTime}
                </p>
                <div id ="showRecipe">
                <p>Ingredients: ${info.ingredients}</p>
                <hr>
                <p> Instructions: ${info.instructions}</p>
                <hr>
                <p> ${newProp} : ${info[newProp]}</p>
                <p>
                </div>
            </div>
        </div>
        `;
        recipeEl.innerHTML = text
        recipeList.append(recipeEl);
        console.log(ingredientsEl.innerHTML)

        
    })
   

};

const getFullRecipeHandler = () => {
    if(showRecipe.classList === 'visible'){
        showRecipe.classList.remove('visible');
        showRecipe.classList.add('invisible');
    }else {
        showRecipe.classList.add('visible');
        showRecipe.classList.remove('invisible')
    }

};

const addNewRecipeHandler = (e) => {
    e.preventDefault();
    const recipeTitle = document.getElementById('recipeTitle').value;
    const mealType = document.getElementById('mealType').value;
    const prepTime = document.getElementById('prepTime').value;
    const cookTime = document.getElementById('cookTime').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;
    const customTitle = document.getElementById('customTitle').value;
    const customInfo = document.getElementById('customInfo').value;

    if (
        recipeTitle.trim() === ''||
        mealType.trim() === ''||
        cookTime.trim() === ''||
        instructions.trim() === ''
    ){
        alert('must have a titee, meal type , cook time and instructions')
        return;
    }

    const newRecipe = {
        info: {
            recipeTitle,
            mealType,
            prepTime,
            cookTime,
            ingredients: [ingredients],
            instructions,
            [customTitle]: customInfo
             
        },
        id: Math.random().toString,
    };
    recipes.push(newRecipe);
    console.log(recipes);
    renderRecipes();
};
renderRecipes();

const searchRecipeHandler = () => {
    const filteredTitleValue = document.getElementById('filter-title').value;
    
    const filterRecipesByTitle = recipes.filter(recipe => recipe.info.recipeTitle.includes(filteredTitleValue));

}

const renderTitleSearch = () => {

    const toggleTitleSearch = document.getElementById('title');
    const titleOption = document.getElementById('selectTitle');
    
    if (titleOption.value == "title") {
        console.log('title selected');
        toggleTitleSearch.classList.add('visible')
        toggleTitleSearch.classList.remove('invisible')
    }else{
        console.log(' title Not selected');
    }
}
console.log(selectTitle)
console.log(recipes)


filterSearch.addEventListener('change', renderTitleSearch)
addNewRecipe.addEventListener('click', addNewRecipeHandler);