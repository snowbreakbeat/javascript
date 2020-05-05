var i = 0;

function change() {
  i++;
  if (i >= 6) i = 0;
  document.image.src = "pic" + i + ".jpg";
}

function change2() {
  var e = document.getElementById("image");
  e.setAttribute("src", "pic3.jpg");
}

function change3() {
  var e = document.getElementById("content");
  e.innerHTML = "Thanks!";
}

function down() {
  var e = document.getElementById("description");
  var t = document.createTextNode("写真の説明");
  e.appendChild(t);
}

function up() {
  var e = document.getElementById("description");
  e.removeChild(e.firstChild);
}

function change4(picname) {
  var e = document.getElementById("bigimage");
  e.setAttribute("src", picname);
}

function init() {
  window.setInterval("tick()", 10000);
}

var t = null;

function start() {
  if (t == null) {
    t = window.setInterval("tick()", 3000);
  }
}

function stop() {
  window.clearInterval(t);
  t = null;
}

function tick() {
  i++;
  if (i >= 6) i = 0;
  var e = document.getElementById("bigimage");
  e.setAttribute("src", "pic" + i + ".jpg");
}

// function check() {
//   var n = myform.name.value;
//   window.alert(n + "さんですね。");
// }

// function check() {
//   var n = myform.name.value;
//   if (n == "") {
//     window.alert("入力してくださいね。");
//     res = false;
//   } else {
//     window.alert("送信します。");
//     res = true;
//   }
//   return res;
// }

function check() {
  var p = new RegExp("^[0-9a-zA-z_.-]+@[0-9a-zA-z_.-]+.[a-zA-z]+$", "i");
  var s = myform.address.value;
  var res = s.match(p);

  if (res == null) {
    window.alert("入力が誤っています");
    res = false;
  } else {
    window.alert("送信します。");
    res = true;
  }
  return res;
}

function add() {
  var itm = myform2.items.value;

  var e = document.getElementById("table");
  var elmr = document.createElement("tr");
  var elmd = document.createElement("td");
  var txt = document.createTextNode(itm);
  elmd.appendChild(txt);
  elmr.appendChild(elmd);
  e.appendChild(elmr);
}

var sum = 0;
var pricelist = { りんご: 500, みかん: 300, もも: 200 };
function add2() {
  var itm = myform3.items.value;
  var n = myform3.num.value;

  var e = document.getElementById("table2");
  var elmr = document.createElement("tr");

  var elmd = document.createElement("td");
  var txt = document.createTextNode(itm);
  elmd.appendChild(txt);
  elmr.appendChild(elmd);

  var elmd = document.createElement("td");
  var txt = document.createTextNode(pricelist[itm]);
  elmd.appendChild(txt);
  elmr.appendChild(elmd);

  var elmd = document.createElement("td");
  var txt = document.createTextNode(n);
  elmd.appendChild(txt);
  elmr.appendChild(elmd);

  var c = pricelist[itm] * n;
  sum += c;
  var elmd = document.createElement("td");
  var txt = document.createTextNode(c);
  elmd.appendChild(txt);
  elmr.appendChild(elmd);

  e.appendChild(elmr);
}

function cls() {
  var e = document.getElementById("table2");
  for (var i = e.childNodes.length - 1; i > 1; i--) {
    e.removeChild(e.childNodes[i]);
  }
  sum = 0;
}

function cals() {
  window.alert("合計：" + sum + "円");
}

// DOM
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

// メソッド
function addList(user) {
  const list = document.createElement("li");
  list.innerText = user.name + "\n" + user.email;
  lists.appendChild(list);
}

async function getUsers() {
  //データ受信
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
}

async function listUsers() {
  const users = await getUsers();
  users.forEach(addList);
}

// イベント
window.addEventListener("load", listUsers);
button.addEventListener("click", listUsers);
