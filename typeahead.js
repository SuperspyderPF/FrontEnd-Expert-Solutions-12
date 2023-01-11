const BASE_URL = 'https://api.frontendexpert.io/api/fe/glossary-suggestions';

const inputEI = document.getElementById('typeahead');
const suggestionEI = document.getElementById('suggestions-list');
let timerId = null;
suggestionEI.addEventListener('click', e => {
  inputEI.value = e.target.textContent;
  suggestionEI.innerHTML = '';
})
inputEI.addEventListener('input', e => {
  clearTimeout(timerId);
  const text = e.target.value;
  if(text===''){
    suggestionEI.innerHTML = '';
    return;
  }
  timerId = setTimeout(() => {
    fetch(BASE_URL + '?' + new URLSearchParams({text}))
      .then(res => res.json())
      .then(suggestions => {
        suggestionEI.innerHTML = suggestions.reduce((acc, suggestion) => acc + `<li>${suggestion}</li>`,'');
      })
      .catch(err => {
        console.error('Something went wrong', err);
      })
    
  }, 500)
})
