const addNewRecipe = document.getElementById('addNewRecipe');
const showRecipe = document.getElementById('showRecipe');
const filterSearch = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');



const recipes = [
    {
        info: {
            recipeTitle: 'Sample BreakFast Recipe Title',
            mealType: 'breakFast',
            prepTime: 5,
            cookTime: 'under 30 mins',
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
            cookTime: 'under 45 mins',
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
            cookTime: 'under 1 hour',
            ingredients: ['fruit', 'vegies', 'salad', 'spinach', 'something else'],
            instructions: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi amet ipsum eaque voluptate consectetur magni, sint facere recusandae soluta architecto sit cumque in aliquid debitis quos, repellat sequi modi! Eligend',
            customTitle: 'this is custom title'
        }
    }
];



const renderRecipes = (filter = '') => {
    const recipeList = document.getElementById('recipe-list');
    
    
    if( recipes.length === 0 ){
        recipeList.classList.remove('visible');
        recipeList.classList.add('invisible');
        console.log('there are zero recipes for this search')
        
    }else {
        recipeList.classList.add('visible');
        recipeList.classList.remove('invisible');
    }
    
    
    recipeList.innerHTML = '';
    
    const filterRecipes = !filter ? recipes : recipes.filter(recipe => recipe.info.recipeTitle.includes(filter))     
    
    
    filterRecipes.forEach(recipe => {
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
            alert('must have a title, meal type , cook time and instructions')
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

const searchRecipeTitleHandler = () => {
    const filteredTitleValue = document.getElementById('filter-title').value;
    const filteredCookTimeValue = document.getElementById('filter-cookTime').value;
    const cookTimeU30= document.getElementById('u30').value

    renderRecipes(filteredTitleValue);
    
}

const renderRecipeSearchByType = () => {

    const toggleTitleSearch = document.getElementById('title-search');
    const toggleCookTimeSearch = document.getElementById('cook-time-search');
    const toggleMealTypeSearch = document.getElementById('meal-type-search');
    
    const titleOption = document.getElementById('selectTitle');
    const cookTimeOption = document.getElementById('selectCookTime');
    const mealTypeOption = document.getElementById('selectMealType');
    
    if (titleOption.selected  === true) {
        console.log('title selected');
        toggleTitleSearch.classList.add('visible')
        toggleTitleSearch.classList.remove('invisible')
    }else if(cookTimeOption.selected == true) {
        toggleCookTimeSearch.classList.add('visible')
        toggleCookTimeSearch.classList.remove('invisible')
        console.log('cook time selected');
    }else if(mealTypeOption.selected == true){
        toggleMealTypeSearch.classList.add('visible')
        toggleMealTypeSearch.classList.remove('invisible')
        console.log('meal type selected');
    }
}
console.log(selectTitle)
console.log(recipes)


filterSearch.addEventListener('change', renderRecipeSearchByType)
addNewRecipe.addEventListener('click', addNewRecipeHandler);
searchBtn.addEventListener('click', searchRecipeTitleHandler);