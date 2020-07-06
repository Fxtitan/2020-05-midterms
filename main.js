//after every . and space i want the first letter capitalized
//
const capitalizeSentences = (str) => {
  let emptyStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '.') {
      emptyStr = emptyStr + str.toUpperCase();

    } if (str[i] === str[i].toUpperCase()) {

    }


  }
return emptyStr;
}
console.log(capitalizeSentences('I am happy today. yesterday I was happier.'));

const isValidPassword = (password) => {
  let emptyStr = '';
  for (let i = 0; i < password.length; i++) {
    if (password[i] === ' ' || password.length < 12) {
      return false
    } // couldnt use else 🤷🏾‍♂️ 
  }
  return true
}

const makeHalfSquares = (nums) => {
  let emptyArr = [];
  for (let i = 0; i < nums.length; i++) {
    emptyArr.push(nums[i] ** 2 / 2) 
  }
  return emptyArr;
}
console.log(makeHalfSquares([6, 7, -8, 10]))

const countAs = (arr) => {
  let emptyArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 90) {
      emptyArr.push(arr[i])
    }
  }
  return emptyArr.length
}
console.log(countAs([90, 50, 63, 87, 100, 93, 76, 0]))

const deleteMiddleLetters = (str) => {
  let emptyStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str.length < 8) {
      emptyStr = emptyStr + str.slice(3,4)
    } if (str[i] === ' ') {
      emptyStr = emptyStr + str[i].length
    }
  }
  return console.log(emptyStr);
}
console.log(deleteMiddleLetters('goodbye'))

const lastIndexOfSpace = (str) => {
  let emptyStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      emptyStr = str.lastIndexOf(' ');
    } else {
      -1
    }
  }
  return emptyStr
}
console.log(lastIndexOfSpace("what even I can't"))

const hyphenateName = (name) => {
  let emptyStr = ''
  for (let i = 0; i < name.length; i++) {
    if (name[i] === ' ') {
      emptyStr += name.split(' ').join('-') 
    }//i need to skip first space and add '-' to second ' '
  }
  return emptyStr
}
hyphenateName('sharod bailey shaw')



if (typeof capitalizeSentences === 'undefined') {
  capitalizeSentences = undefined;
}

if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof makeHalfSquares === 'undefined') {
  makeHalfSquares = undefined;
}

if (typeof countAs === 'undefined') {
  countAs = undefined;
}

if (typeof deleteMiddleLetters === 'undefined') {
  deleteMiddleLetters = undefined;
}

if (typeof lastIndexOfSpace === 'undefined') {
  lastIndexOfSpace = undefined;
}

if (typeof hyphenateName === 'undefined') {
  hyphenateName = undefined;
}


module.exports = {
  capitalizeSentences,
  isValidPassword,
  makeHalfSquares,
  countAs,
  deleteMiddleLetters,
  lastIndexOfSpace,
  hyphenateName,
}
