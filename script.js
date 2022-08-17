//selecting the buttons associated with sorting algorithm
//Selecting elements that we need
const insertion = document.querySelector("#insertion");
const selection = document.querySelector("#selection");
const bubble = document.querySelector("#bubble");
const container = document.querySelector(".container");
const reset = document.querySelector("#reset");
const generate = document.querySelector("#generate");
const containerBars = document.querySelector(".container-bars");
const input = document.querySelector("#input");
const submit = document.querySelector(".submit");

const slider = document.querySelector(".slider");
let inputval = parseInt(document.querySelector("#input").value);
let array;
let speed = 50;
let width;

slider.addEventListener("input", function () {
  speed = this.value;
});

function createArray(value) {
  array = Array(value);
  console.log(array);
}
//Event Listeners for Buttons
reset.addEventListener("click", function () {
  resetArray();
});

generate.addEventListener("click", function () {
  resetArray();

  if (array === undefined) {
    alert("please input size of array");
  } else {
    populate_array();
    for (let i = 0; i < array.length; i++) {
      add_bars(array[i]);
    }
  }
});

//Function Definitions
function random() {
  //creates a function that generates random numbers
  return Math.floor(Math.random() * 100 + 1);
}

function add_bars(input) {
  const Div = document.createElement("div");
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;
  //prettier-ignore
  const barWidth = (containerWidth / inputval) - 2;
  Div.className = "bars";
  //prettier-ignore
  Div.style.height = `${((containerHeight / 100) * input) - 2}px`;

  Div.style.width = `${barWidth}px`;
  containerBars.append(Div);
  console.log(barWidth);
  console.log(containerWidth);
}

function populate_array() {
  for (let i = 0; i < array.length; i++) {
    array[i] = random();
  }
}

function for_loop(array) {
  resetArray();
  for (let i = 0; i < array.length; i++) {
    add_bars(array[i]);
  }
}

function resetArray() {
  containerBars.innerHTML = "";
}

const add_text = function () {}; //add description

submit.addEventListener("click", function () {
  resetArray();
  inputval = parseInt(document.querySelector("#input").value);
  if (Number.isNaN(inputval)) {
    document.querySelector("#confirm").innerHTML = `Please Input A Number`;
  } else {
    createArray(inputval);
    document.querySelector(
      "#confirm"
    ).innerHTML = `Size of ${inputval} array created!!!!`;
  }
});

//Functions for sorting algorithm

function timer(time) {
  return new Promise((resolve) => setTimeout(() => resolve(), time));
}
console.log(speed);
//Insertion Sort
async function insertionSort(array) {
  for (i = 1; i < array.length; i++) {
    let key_item = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > key_item) {
      array[j + 1] = array[j];
      j--;
      await timer(100 - speed);
      for_loop(array);
      //change HTML through dom manipulation;
    }

    array[j + 1] = key_item;
  }
  return array;
}

insertion.addEventListener("click", function () {
  insertionSort(array);
});
//Selection Sort
async function selectionSort(array) {
  let n = array.length;

  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min != i) {
      let tmp = array[i];
      array[i] = array[min];
      array[min] = tmp;
      await timer(100 - speed);
      for_loop(array);
    }
  }
  return array;
}

selection.addEventListener("click", function () {
  selectionSort(array);
});
//Bubble Sort
async function bubbleSort(array) {
  let len = array.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (array[j] > array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
        await timer(100 - speed);
        for_loop(array);
      }
    }
  }
  return array;
}

bubble.addEventListener("click", function () {
  bubbleSort(array);
});
