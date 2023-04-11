// Question 1:
// -----------
function add(num) {
    return function (x) {
        return x + num;
    };
}
const addFive = add(5);
console.log(addFive(10)); 
console.log(addFive(20));
// Question 1 End!
// --------------

// Question 2:
// -----------
function searchArray(array1, value) {
    if (array1.length === 0) {
        return false;
    } else if (array1[0] === value) {
        return true;
    } else {
        return searchArray(array1.slice(1), value);
    }
}
const array1 = [1, 2, 3, 4, 5];
console.log(searchArray(array1, 3));
console.log(searchArray(array1, 6));
// Question 2 End!
// --------------

// Question 3:
// -----------
function addPara(text) {

    var p = document.createElement("p");
    p.textContent = text;
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(p);
}

addPara("This is a new paragraph adding in the end of html document.");
// Question 3 End!
// --------------

// Question 4:
// -----------
function addItem(text) {
    const list = document.getElementById("my-list");
    const newItem = document.createElement("li");
    newItem.textContent = text;
    list.appendChild(newItem);
}
addItem("purple");
addItem("violet");
addItem("green");
// Question 4 End!
// --------------

// Question 5:
// -----------
function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
}
const myElement = document.getElementById('my-element');
changeBackgroundColor(myElement, 'cyan');
// Question 5 End!
// --------------

// Question 6:
// -----------
function saveObjectToLocalStorage(key, object) {
    const objectJson = JSON.stringify(object);
    localStorage.setItem(key, objectJson);
}
const myObject = { name: "Faiqa", age: 20};
saveObjectToLocalStorage("myKey", myObject);
// Question 6 End!
// --------------

// Question 7:
// -----------
function getObjectFromLocalStorage(key) {
        const item = localStorage.getItem(key);
        return JSON.parse(item);
}
// Question 7 End!
// --------------

// Question 8:
// -----------
function saveToLocalStorageAndRetrieve(obj) {
    Object.keys(obj).forEach((key) => {
      localStorage.setItem(key, JSON.stringify(obj[key]));
    });
    const newObj = {};
    Object.keys(obj).forEach((key) => {
      newObj[key] = JSON.parse(localStorage.getItem(key));
    });
  
    return newObj;
  }
// Question 8 End!
// --------------
