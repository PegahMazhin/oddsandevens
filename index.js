// DOM elements
const numberInput = document.querySelector('number-input');
const addNumberBtn = document.querySelector('add-number-btn');
const numberBankList = document.querySelector('number-bank');
const sortOneBtn = document.querySelector('sort-one-btn');
const sortAllBtn = document.querySelector('sort-all-btn');
const oddCategoryList = document.querySelector('odd-category');
const evenCategoryList = document.querySelector('even-category');

let numberBank = [];

const updateNumberBank = () => {
  numberBankList.innerHTML = '';
  numberBank.forEach(number => {
    const li = document.createElement('li');
    li.textContent = number;
    numberBankList.appendChild(li);
  });
}


const addNumberToBank = () => {
  const number = parseInt(numberInput.value, 10);
  if (!isNaN(number)) {
    numberBank.push(number);
    updateNumberBank();
  }
  numberInput.value = ''; 
}

const sortOne = () => {
  if (numberBank.length > 0) {
    const number = numberBank.shift(); 
    if (number % 2 === 0) {
      addToCategory(evenCategoryList, number);
    } else {
      addToCategory(oddCategoryList, number);
    }
    updateNumberBank();
  }
}

const sortAll = () => {
  while (numberBank.length > 0) {
    sortOne();
  }
}

const addToCategory = (categoryList, number) => {
  const li = document.createElement('li');
  li.textContent = number;
  categoryList.appendChild(li);
}

addNumberBtn.addEventListener('click', addNumberToBank);
sortOneBtn.addEventListener('click', sortOne);
sortAllBtn.addEventListener('click', sortAll);
