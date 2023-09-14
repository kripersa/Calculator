let button = document.getElementsByTagName("button");
let number = document.getElementsByClassName("number");
let clear = document.getElementsByClassName("clear");
let data1 = document.getElementsByClassName("data1");
let data2 = document.getElementsByClassName("data2");
let data3 = document.getElementsByClassName("data3");
let equal = document.getElementsByClassName("equal");
let answerbox = document.getElementsByClassName("answerbox");

let deelete = document.getElementsByClassName("deelete");
let sign = document.getElementsByClassName("sign");
let array1 = [];
let array2 = [];
let check = false;
let mon = 0;

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", () => {
   
    if (check == false) {
      array1.push(number[i].innerHTML);
      data1[0].innerHTML = array1.join("");
      console.log(array1);
    } else if (check == true) {
      array2.push(number[i].innerHTML);
      data3[0].innerHTML = array2.join("");
    }
  });
}
for (let i = 0; i < clear.length; i++) {
  clear[i].addEventListener("click", () => {
    array1 = [];
    array2 = [];
    data1[0].innerHTML = 0;
    data2[0].innerHTML = "";
    data3[0].innerHTML = "";
    answerbox[0].innerHTML = "";
    console.log(array1);
    console.log(array2);
    check = false;
  });
}
for (let i = 0; i < deelete.length; i++) {
  deelete[i].addEventListener("click", () => {
    if (check == false) {
      array1 = array1.slice(0, -1);
      data1[0].innerText = Number(array1.join(""));
    }

    if (check == true && array2.length > 0) {
      array2 = array2.slice(0, -1);

      data3[0].innerText = array2.join("");
    } else if (check == true && array2.length === 0) {
      data2[0].innerText = "";
      check = false;
    }
    answerbox[0].innerHTML = "";
  });
}
for (let i = 0; i < sign.length; i++) {
  sign[i].addEventListener("click", () => {
    data2[0].innerText = sign[i].innerText;
    check = true;
  });
}

for (let i = 0; i < equal.length; i++) {
  equal[i].addEventListener("click", () => {
    console.log("klklkl");
    if (data2[0].innerHTML === "+") {
      let answer = Number(data1[0].innerHTML) + Number(data3[0].innerHTML);
      console.log(answer);
      console.log(answerbox);
      answerbox[0].innerText = answer;
      array1 = [];
      array1.push(answer);

      array2 = [];
      data1[0].innerHTML = answer;
      data2[0].innerHTML = "";
      data3[0].innerHTML = "";
      mon = 1;
    }
    if (data2[0].innerHTML === "-") {
      let answer = Number(data1[0].innerHTML) - Number(data3[0].innerHTML);
      console.log(answer);
      console.log(answerbox);
      answerbox[0].innerText = answer;
      array1 = [];
      array1.push(answer);
      array2 = [];
      data1[0].innerHTML = answer;
      data2[0].innerHTML = "";
      data3[0].innerHTML = "";
    }

    if (data2[0].innerHTML === "*") {
      let answer = Number(data1[0].innerHTML) * Number(data3[0].innerHTML);
      console.log(answer);
      console.log(answerbox);
      answerbox[0].innerText = answer;
      array1 = [];
      console.log(array1);
      array1.push(answer);
      array2 = [];
      data1[0].innerHTML = answer;
      data2[0].innerHTML = "";
      data3[0].innerHTML = "";
    }
    if (data2[0].innerHTML === "/") {
      let answer = Number(data1[0].innerHTML) / Number(data3[0].innerHTML);
      console.log(answer);
      console.log(answerbox);
      answerbox[0].innerText = answer;
      array1 = [];
      array1.push(answer);
      array2 = [];
      data1[0].innerHTML = answer;
      data2[0].innerHTML = "";
      data3[0].innerHTML = "";
    }
    if (data2[0].innerHTML === "%" && data3[0].innerHTML == "") {
      let answer = Number(data1[0].innerHTML) / 100;
      console.log(answer);
      console.log(answerbox);
      answerbox[0].innerText = answer;
      array1 = [];
      array1.push(answer);
      array2 = [];
      data1[0].innerHTML = answer;
      data2[0].innerHTML = "";
      data3[0].innerHTML = "";
    }
    if (data2[0].innerHTML === "%" && data3[0].innerHTML !== "") {
      let answer = (Number(data1[0].innerHTML) / 100) * data3[0].innerHTML;
      console.log(answer);
      console.log(answerbox);
      answerbox[0].innerText = answer;
      array1 = [];
      array1.push(answer);
      array2 = [];
      data1[0].innerHTML = answer;
      data2[0].innerHTML = "";
      data3[0].innerHTML = "";
    }
  });
}
