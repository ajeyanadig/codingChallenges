import View from './View';
import icons from '../../img/icons.svg';
import previewView from './previewView';
class ResultsView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = `No bookmarks yet. Find a nice recipe and bookmark it !`;
  _message = '';
  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
  _generateMarkup() {
    //console.log(this._data);
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join(''); //callback(curr,i,arr)
  }
}

export default new ResultsView();
