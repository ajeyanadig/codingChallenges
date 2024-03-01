import 'core-js/stable';
import 'regenerator-runtime/runtime';

import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import { MODAL_CLOSE_SEC } from './config.js';
///////////////////////////////////////

const controlRecipes = async function () {
  try {
    //get hash/ recipeID from URL
    let recipeID = location.hash?.slice(1);
    if (!recipeID) return;

    //render Spinner
    recipeView.renderSpinner();

    //0) Update
    resultsView.update(model.getSearchResultPage());

    //1) Updating bookmarks view
    bookmarksView.update(model.state.bookmarks);

    //2) Loading Recipe
    await model.loadRecipe(recipeID);
    let { recipe } = model.state;

    //3)Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.log(err);
    recipeView.renderError();
  }
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};
const controlSeachResults = async function () {
  try {
    //1) Get search query
    const query = searchView.getQuery();
    if (!query) return;
    resultsView.renderSpinner();
    //2) Load results
    await model.loadSearchResults(query);

    //3) Render Search
    // console.log(model.state.search.results);
    resultsView.render(model.getSearchResultPage());

    //4) Pagination View
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  //1) Render NEW Results
  resultsView.render(model.getSearchResultPage(goToPage));
  //2) Render NEW Paginaation buttons
  paginationView.render(model.state.search);
};

const controlServings = function (updateTo) {
  //update servings in state
  model.updateServings(updateTo);
  //update recipe view
  //recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  //1) Add/Remove bookmarks
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  //2) Render Recipe View(update bookmark icon)
  recipeView.update(model.state.recipe);

  //3)Render Bookmarks View
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    //show loading Spinner
    addRecipeView.renderSpinner();

    //Upload recipe data
    await model.uploadRecipe(newRecipe);

    //Render Recipe
    recipeView.render(model.state.recipe);

    //success message
    addRecipeView.renderMessage();
    //render bookmark view
    bookmarksView.render(model.state.bookmarks);

    //change ID in url
    window.history.pushState(null, '', `#${model.state.recipe.id}`);
    //close Modal
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    addRecipeView.renderError(err.message);
    console.log(err);
  }
};

const newFeature = () => {
  console.log('Welcome to the Forkify project');
};
const init = () => {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHanlderSearch(controlSeachResults);
  paginationView.addHandlerClick(controlPagination);

  //uploading own recipe
  addRecipeView.addHandlerUpload(controlAddRecipe);

  newFeature();
};
init();
