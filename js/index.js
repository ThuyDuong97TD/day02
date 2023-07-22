import myJson from "../index.json" assert { type: "json" };
// console.log(myJson);

let myDialog = document.createElement("dialog");
myDialog.innerHTML = "Giỏ Hàng Của Bạn";
function openDialog() {
  myDialog.setAttribute("open", "open");
  myDialog.show();
  myDialog.style.width = "40%";
  myDialog.style.height = "250px";
  myDialog.style.borderRadius = "15px";
  // myDialog.style.display = "flex";
  // myDialog.style.justifyContent = "space-between";
}
function closeDialog() {
  myDialog.setAttribute("close", "close");
  myDialog.close();
  myDialog.style.width = "20px";
  myDialog.style.height = "10px";
  myDialog, style, (borderRadius = "15px");
}
let x = document.createElement("button");
x.style.width = "25px";
x.style.height = "25px";
x.style.borderRadius = "15px";
x.style.color = "gray";
x.innerHTML = "X";
x.style.display = "block";
x.style.float = "right";
x.addEventListener("click", closeDialog);
myDialog.appendChild(x);

let container = document.getElementById("container");
let body = document.body;
body.style.margin = "0";

container.style.width = "100%";
container.style.height = "100%";

function buildNavbar() {
  let navbar = document.createElement("div");
  navbar.style.backgroundColor = "white";
  navbar.style.width = "100%";
  navbar.style.height = " 60px";

  navbar.style.margin = "0";
  navbar.style.display = "flex";
  navbar.style.justifyContent = "space-between";

  // navbarLeft
  let navbarLeft = document.createElement("div");
  navbarLeft.style.width = " 50%";
  navbarLeft.style.height = " 100%";
  navbarLeft.style.display = " flex";
  navbarLeft.style.alignItems = "center";
  navbarLeft.style.paddingLeft = "150px";
  let logo = document.createElement("img");
  logo.src = "https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png";
  logo.style.height = "50px";
  logo.style.width = "120px";
  logo.style.display = "flex";

  logo.style.fontSize = " 10px";
  navbarLeft.appendChild(logo);
  let options = ["THỰC ĐƠN", "KHUYẾN MÃI", "HỆ THỐNG NHÀ HÀNG"];
  let optionBox = document.createElement("div");
  optionBox.style.display = "flex";
  optionBox.style.justifyContent = "space-evenly";
  optionBox.style.alignItems = "end";
  optionBox.style.fontSize = "10px";
  optionBox.style.columnGap = "30px";
  for (let i = 0; i < options.length; i++) {
    let optionButton = document.createElement("div");
    optionButton.innerHTML = options[i];
    optionButton.style.backgroundColor = "white";
    optionButton.style.alignContent = " center";

    optionButton.style.color = " black";
    optionButton.style.color = " black";
    optionButton.style.border = "none";
    optionButton.style.fontSize = " 0.7rem";
    optionButton.style.fontFamily = " arial";
    optionButton.style.fontWeight = "bold";

    optionBox.appendChild(optionButton);
    navbarLeft.appendChild(optionBox);
  }
  navbar.appendChild(navbarLeft);

  let navbarRight = document.createElement("div");
  navbarRight.style.width = "50%";
  navbarRight.style.height = "100%";
  navbarRight.style.display = "flex";
  navbarRight.style.justifyContent = "flex-end";
  navbarRight.style.alignItems = "center";
  navbarRight.style.paddingRight = "150px";

  let logo00 = document.createElement("img");
  logo00.src =
    " https://icons.veryicon.com/png/o/miscellaneous/basic-icon/english-11.png";
  logo00.style.width = "20px";
  logo00.style.height = "20px";
  logo00.style.marginRight = " 40px";
  navbarRight.appendChild(logo00);

  let logo01 = document.createElement("img");
  logo01.src =
    "https://static.vecteezy.com/system/resources/thumbnails/007/033/146/small/profile-icon-login-head-icon-vector.jpg";
  logo01.style.height = "20px";
  logo01.style.width = "20px";
  logo01.style.display = "flex";
  logo01.style.alignItems = "center";
  logo01.style.marginLeft = " 10px";
  navbarRight.appendChild(logo01);

  let logo02 = document.createElement("img");
  logo02.src = "https://cdn-icons-png.flaticon.com/512/5469/5469963.png";
  logo02.style.width = "20px";
  logo02.style.height = "20px";
  logo02.style.alignItems = "center";
  logo02.style.marginLeft = "10px";
  logo02.addEventListener("click", openDialog);

  navbarRight.appendChild(logo02);

  let logo03 = document.createElement("img");
  logo03.src = " https://cdn-icons-png.flaticon.com/512/56/56763.png";
  logo03.style.width = "20px";
  logo03.style.height = "20px";
  logo03.style.alignItems = "center";
  logo03.style.marginLeft = "10px";
  navbarRight.appendChild(logo03);
  navbar.appendChild(navbarRight);

  return navbar;
}

let newNavbar = buildNavbar();
container.appendChild(newNavbar);

let delivery = document.createElement("div");
delivery.style.width = "100%";
delivery.style.height = "55px";
delivery.style.backgroundColor = "black";
delivery.style.alignItems = "center";
delivery.style.justifyContent = "center";

container.appendChild(delivery);
let menu = document.createElement("div");

menu.style.width = " 100%";
menu.style.height = "40px";
menu.style.backgroundColor = "white";

let thanhmenu = [
  "MÓN MỚI",
  "COMBO 1 NGƯỜI",
  "COMBO NHÓM",
  "GÀ RÁN-GÀ QUAY",
  "BURER- CƠM-MÌ Ý",
  "THỨC ĂN NHẸ",
  "THỨC UỐNG & TRÁNG MIỆNG",
];

let box = document.createElement("div");
box.style.width = "95%";
box.style.height = "45px";
box.style.display = "flex";
box.style.justifyContent = "space-between";
box.style.justifyItems = "space-between";
box.style.alignItems = "center";
box.style.fontSize = "10px";
box.style.margin = "0 auto";

for (let i = 0; i < thanhmenu.length; i++) {
  let thanhmenuButton = document.createElement("div");
  thanhmenuButton.innerHTML = thanhmenu[i];
  thanhmenuButton.style.backgroundColor = "white";
  thanhmenuButton.style.alignContent = " center";

  thanhmenuButton.style.color = " black";
  thanhmenuButton.style.color = " black";
  thanhmenuButton.style.border = "none";
  thanhmenuButton.style.fontSize = " 0.7rem";
  thanhmenuButton.style.fontFamily = " arial";
  thanhmenuButton.style.fontWeight = "bold";
  thanhmenuButton.style.justifyContent = "space-between";
  thanhmenuButton.style.alignItems = "center";
  thanhmenuButton.style.marginLeft = "100px";

  box.appendChild(thanhmenuButton);
  menu.appendChild(box);
}

container.appendChild(menu);

let monmoi = document.createElement("div");
let textmonmoi = document.createElement("p");
textmonmoi.innerHTML = "MÓN MỚI";
textmonmoi.style.margin = "0";
textmonmoi.style.paddingLeft = "10px";
textmonmoi.style.fontFamily = "arial";
monmoi.style.width = "100%";
monmoi.style.height = "40px";
monmoi.style.backgroundColor = "white";

container.appendChild(monmoi);
monmoi.appendChild(textmonmoi);
let main = document.createElement("div");
main.className = "main";
main.style.width = "75%";
main.style.height = " 700px";
main.style.backgroundColor = "white";
main.style.margin = "0 auto";
main.appendChild(myDialog);

let giaohang = document.createElement("div");
let huhu = document.createElement("p");
let hihi = document.createElement("p");
hihi.innerHTML = "Đặt Ngay";
hihi.style.color = "white";

giaohang.appendChild(hihi);
delivery.appendChild(giaohang);

let icon1 = document.createElement("img");
icon1.src = "";

huhu.innerHTML = "Giao Hàng";
huhu.style.color = "white";

giaohang.style.width = "35%";
giaohang.style.height = "45px";
giaohang.style.columnGap = "1px";
giaohang.style.display = "flex";
giaohang.style.alignItems = "center";
giaohang.style.justifyContent = "space-between";
giaohang.style.fontSize = " 10px";
giaohang.style.fontFamily = "roboto";

giaohang.style.margin = "0 auto";

giaohang.appendChild(icon1);
giaohang.appendChild(huhu);

delivery.appendChild(giaohang);
let haha = document.createElement("p");
haha.innerHTML = "Hoặc Mang Đi";
haha.style.color = " white";

let icon2 = document.createElement("img");
icon1.src = "";

giaohang.appendChild(icon2);
giaohang.appendChild(haha);
delivery.appendChild(giaohang);
delivery.style.display = "flex";
delivery.style.justifyContent = "space-evenly";

let nutbatdaugiaohang = document.createElement("div");
nutbatdaugiaohang.style.backgroundColor = "red";
nutbatdaugiaohang.style.width = "150px";
nutbatdaugiaohang.style.height = "30px";
nutbatdaugiaohang.style.display = "flex";
nutbatdaugiaohang.style.justifyContent = "center";
nutbatdaugiaohang.style.borderRadius = "20px";
nutbatdaugiaohang.style.alignItems = "center";

let batdaugiaohang = document.createElement("p");
batdaugiaohang.innerHTML = "Bắt Đầu Giao Hàng";
batdaugiaohang.style.color = "white";

giaohang.appendChild(nutbatdaugiaohang);
giaohang.appendChild(batdaugiaohang);
nutbatdaugiaohang.appendChild(batdaugiaohang);
delivery.appendChild(giaohang);

delivery.appendChild(icon1);
delivery.appendChild(icon2);

let listmonan = document.createElement("div");
listmonan.className = "listmonan";
/** @type {CSSStyleDeclaration} */
let listmonanStyle = {
  display: "grid",
  gridGap: "1rem",
  gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
};

Object.assign(listmonan.style, listmonanStyle);
for (let i = 0; i < myJson.length; i++) {
  let item = myJson[i];
  let themonan = document.createElement("div");
  let hinhmonan01 = document.createElement("div");
  let tenvagia = document.createElement("div");
  let motamonan01 = document.createElement("div");
  let hinh = document.createElement("img");
  hinh.src = item.photo;
  hinh.style.width = "100%";
  hinh.style.height = "auto";
  hinh.style.borderRadius = "2px";

  let ten = document.createElement("p");
  let gia = document.createElement("p");
  ten.innerHTML = item.name;
  gia.innerHTML = item.price;
  themonan.appendChild(hinh);

  tenvagia.appendChild(ten);
  tenvagia.appendChild(gia);
  themonan.appendChild(tenvagia);
  tenvagia.style.width = "270px";
  tenvagia.style.height = "20px";
  tenvagia.style.fontFamily = "arial";
  tenvagia.style.display = "flex";
  tenvagia.style.justifyContent = "space-around";

  let nutthemmon = document.createElement("button");
  nutthemmon.innerHTML = "Thêm";
  nutthemmon.style.fontFamily = "arial";
  nutthemmon.style.color = "white";
  nutthemmon.style.width = "250px";
  nutthemmon.style.height = "50px";
  nutthemmon.style.backgroundColor = "#CCCCCC";
  nutthemmon.style.alignItems = "end";
  nutthemmon.style.borderRadius = "25px";
  nutthemmon.style.border = "0";

  nutthemmon.addEventListener("click", () => {
    addToCart(item);
  });

  themonan.appendChild(nutthemmon);
  /** @type {CSSStyleDeclaration} */
  let themonanStyle = {
    // width: "400px",
    height: "450px",
    backgroundColor: "white",
    border: "1px solid #CCCCCC",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  };
  Object.assign(themonan.style, themonanStyle);
  listmonan.appendChild(themonan);
}
main.appendChild(monmoi);
main.appendChild(listmonan);
container.appendChild(main);
/** @type {CSSStyleDeclaration} */
let combomonanStyle = {
  display: "grid",
  gridGap: "1rem",
  gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
};
class Item {
  /**
   * @param {string} id
   * @param {string} name
   * @param {number} number
   * @param {number} price
   * @param {string} photoURL
   */

  constructor(id, name, number, price, photoURL) {
    this.id = id;
    this.name = name;
    this.number = number;
    this.price = price;
    this.photoURL = photoURL;
  }
}

/** @type {Item[]}*/
let listOfItems = [...myJson];
/** @type {Item[]} */
let cart = [];

console.log(listOfItems);

function addToCart(item) {
  let thanhtoan = document.createElement("div");
  let hinhanh = document.createElement("img");
  hinhanh.src = item.photo;
  hinhanh.style.width = "40px";
  hinhanh.style.height = "40px";
  // thanhtoan.style.width = "300px";
  // thanhtoan.style.height = "50px";
  // thanhtoan.style.display = "flex";
  let tenthanhtoan = document.createElement("p");
  tenthanhtoan.innerHTML = item.name;
  let giathanhtoan = document.createElement("p");
  giathanhtoan.innerHTML = item.price;

  thanhtoan.appendChild(hinhanh);
  thanhtoan.appendChild(tenthanhtoan);
  thanhtoan.appendChild(giathanhtoan);

  let index1 = cart.findIndex((tem) => {
    return item.id == tem.id;
  });
  if (index1 != -1) {
    cart[index1].quantity++;
    console.log(cart);
    return;
  }
  cart.push({
    id: item.id,
    quantity: 1,
  });
  myDialog.appendChild(tenthanhtoan);
  myDialog.appendChild(giathanhtoan);
  myDialog.appendChild(hinhanh);
  console.log(cart);
  return;
}
let nutthanhtoan = document.createElement("div");
// nutthanhtoan.style.width = "50px";
// nutthanhtoan,style.height ="20px"
let chargeButton = document.createElement("button");
chargeButton.innerHTML = "Thanh Toán";
// chargeButton.style.width = " 100px";
// chargeButton.style.height = "20px";
// chargeButton.style.margin = "0 auto";
chargeButton.style.backgroundColor = "#FFFFFF";
chargeButton.style.color = "black";
chargeButton.style.borderRadius = "15px";

chargeButton.addEventListener("click", () => {
  tinhTien();
});
container.appendChild(chargeButton);
nutthanhtoan.appendChild(chargeButton);
myDialog.appendChild(nutthanhtoan);
function tinhTien() {
  if (cart.length == 0) {
    alert("BẠN CHƯA THÊM GÌ VÀO GIỎ HÀNG");
  }
  let total = 0;
  cart.forEach((item) => {
    listOfItems.forEach((food) => {
      if (food.id == item.id) {
        total += food.price * item.quantity;
      }
    });
  });
  alert("TỔNG TIỀN CỦA BẠN LÀ " + total);
  cart = [];
}
myDialog.appendChild(chargeButton);
myDialog.appendChild(thanhtoan);

// myDialog.appendChild(tenmonan);
// myDialog.appendChild(giamonan)
// myDialog.appendChild(total);
