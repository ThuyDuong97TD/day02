let container = document.getElementById("container");
let body = document.body;
body.style.margin = "0";
// container.style.display = "flex";
container.style.width = "100%";
container.style.height = "100%";


function buildNavbar() {
  let navbar = document.createElement("div");
  navbar.style.backgroundColor = "white";
  navbar.style.width = "100%";
  navbar.style.height = " 60px";

  //   navbar.style.paddingLeft = "300px"
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
  // logo.style.padding = "5px";
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
    // optionButton.style.padding = "10px";

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
  navbarRight.style.paddingRight ="150px"
  // navbarRight.style.padding = "5px";
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
box.style.width = "100%";
box.style.height = "45px";
box.style.display = "flex";
box.style.justifyContent = "space-evenly";
box.style.alignItems = "center";
box.style.fontSize = "10px";
// box.style.columnGap = "1px";

// box.style.paddingLeft = "50px";
// box.style.paddingRight = "50px";

for (let i = 0; i < thanhmenu.length; i++) {
  let thanhmenuButton = document.createElement("div");
  thanhmenuButton.innerHTML = thanhmenu[i];
  thanhmenuButton.style.backgroundColor = "white";
  thanhmenuButton.style.alignContent = " center";
  // optionButton.style.padding = "10px";

  thanhmenuButton.style.color = " black";
  thanhmenuButton.style.color = " black";
  thanhmenuButton.style.border = "none";
  thanhmenuButton.style.fontSize = " 0.7rem";
  thanhmenuButton.style.fontFamily = " arial";
  thanhmenuButton.style.fontWeight = "bold";
  thanhmenuButton.style.justifyContent = "center";
  thanhmenuButton.style.alignItems = "center";
  thanhmenuButton.style.margin ="auto 0"


  box.appendChild(thanhmenuButton);
  menu.appendChild(box);
}

// let menuBox = document.createElement("div");
// menuBox.style.display = "flex";
// menuBox.style.justifyContent = " space-evenly";
// menuBox.style.alignItems = "end";
// menuBox.style.fontSize = "10px";
// for (let i = 0; i < thanhmenu.length; i++) {
//   let menuButton = document.createElement("div");
//   menuButton.innerHTML = thanhmenu[i];
//   menuButton.style.backgroundColor = "white";
//   menuButton.style.alignContent = " center";
//   // optionButton.style.padding = "10px";
//   menuButton.style.color = " black";
//   menuButton.style.color = " black";
//   menuButton.style.border = "none";
//   menuButton.style.fontSize = " 0.7rem";
//   menuButton.style.fontFamily = " arial";
//   menuButton.style.fontWeight = "bold";

//   menuBox.appendChild(menuButton);
//   menu.appendChild(menuBox);
// }

container.appendChild(menu);

let monmoi = document.createElement("div");
let textmonmoi = document.createElement("p");
textmonmoi.innerHTML = "MÓN MỚI";
textmonmoi.style.margin = "0";
textmonmoi.style.paddingLeft = "120px";
textmonmoi.style.fontFamily = "arial"
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

//  let dathang = ["Đặt Hàng"];
//  dathang.style.color ="red";
// dathang.style.fontSize = "10px";
// delivery.appendChild(dathang);
let giaohang = document.createElement("div");
let huhu = document.createElement("p");
let hihi = document.createElement("p");
hihi.innerHTML = "Đặt Ngay";
hihi.style.color = "white";

giaohang.appendChild(hihi);
delivery.appendChild(giaohang);

let icon1 = document.createElement("img");
icon1.src = "";
icon1.style.width = "20px";
icon1.style.height = "auto";
huhu.innerHTML = "Giao Hàng";
huhu.style.color = "white";

giaohang.style.width = "35%";
giaohang.style.height = "45px";
giaohang.style.columnGap = " 2px";
giaohang.style.display = "flex";
giaohang.style.alignItems = "center";
giaohang.style.justifyContent = "space-between";
giaohang.style.fontSize = " 14px";
giaohang.style.fontFamily = "roboto";

// let texgiaohang = ["Giao Hàng"];
giaohang.appendChild(icon1);
giaohang.appendChild(huhu);

delivery.appendChild(giaohang);
let haha = document.createElement("p");
haha.innerHTML = "hoặc Mang Đi";
haha.style.color = " white";

let icon2 = document.createElement("img");
icon1.src = "";
icon2.style.width = "20px";
icon2.style.height = "20px";
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
let hinhmonan = [
  "https://static.kfcvietnam.com.vn/images/items/lg/1-Kwaffle.jpg?v=LDqyE4",
  "https://static.kfcvietnam.com.vn/images/items/lg/2-Kwaffle.jpg?v=LDqyE4",
  "https://static.kfcvietnam.com.vn/images/items/lg/Kwaffle-hd.jpg?v=LDqyE4",
  "https://static.kfcvietnam.com.vn/images/items/lg/2-Hash-Browns.jpg?v=LDqyE4",
  "https://static.kfcvietnam.com.vn/images/items/lg/3-Hash-Browns.jpg?v=LDqyE4",
  "https://static.kfcvietnam.com.vn/images/items/lg/4-Hash-Browns.jpg?v=LDqyE4",
  "https://static.kfcvietnam.com.vn/images/items/lg/6-Hash-Browns.jpg?v=LDqyE4",
];
let tenmonan = [
  "1 Gà Cuộn Bắc Kinh",
  "2 Gà Cuộn Bắc Kinh",
  "Gà Cuộn Bắc Kinh",
  "2 Bánh Khoai Tây Chiên",
  "3 Bánh Khoai Tây Chiên",
  "4 Bánh Khoai Tây Chiên",
  "6 Bánh Khoai Tây Chiên",
];
let giamonan = [
  "39.000đ",
  "74.000đ",
  "89.000đ",
  "17.000đ",
  "25.000đ",
  "46.000",
];
let motamonan = [
  "01 Gà Cuộn Bắc Kinh",
  "02 gà Cuộn Bắc Kinh",
  "01 Gà Cuộn Bắc Kinh + 01 miếng Gà rán (OR/ HS/ NSC) + 01 Khoai tây chiên (vừa) hoặc 01 Khoai tây nghiền (vừa) & 01 Bắp cải trộn (vừa)",
  "2 Bánh Khoai Tây Chiên",
  "3 Bánh Khoai Tây Chiên",
  "4 Bánh Khoai Tây Chiên",
  "6 Bánh Khoai Tây Chiên",
];

let listmonan = document.createElement("div");
listmonan.className = "listmonan";
  /** @type {CSSStyleDeclaration} */
  let listmonanStyle = {
    //  width: "100%",
    //  height: "100%",
    // backgroundColor : "red",
    display: "grid",
    gridGap: "1rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
  };
// listmonan.style.display = "flex";
Object.assign(listmonan.style, listmonanStyle);
for (let i = 0; i < 7; i++) {
  let themonan = document.createElement("div");
  let hinhmonan01 = document.createElement("div");
  let tenvagia = document.createElement("div");
  let motamonan01 = document.createElement("div");
  let hinh = document.createElement("img");
  hinh.src = hinhmonan[i];
  hinh.style.width = "100%";
  hinh.style.height = "auto";
  hinh.style.borderRadius = "2px";


  let ten = document.createElement("p");
  let gia =document.createElement("p");
  ten.innerHTML = tenmonan[i];
  gia.innerHTML = giamonan[i];
  themonan.appendChild(hinh);


  tenvagia.appendChild(ten);
  tenvagia.appendChild(gia);
  themonan.appendChild(tenvagia);
  tenvagia.style.width = "270px"
  tenvagia.style.height = "20px"
  tenvagia.style.fontFamily = "arial"
  tenvagia.style.display = "flex"
  tenvagia.style.justifyContent = "space-around"

  //  let mota = document.createElement("p");
  //  mota.innerHTML = motamonan[i];
  //  motamonan.appendChild(motamonan01);
  //  themonan.appendChild(motamonan);

  let nutthemmon = document.createElement("button");
  nutthemmon.innerHTML = "Thêm"
  nutthemmon.style.fontFamily = "arial"
  nutthemmon.style.color = "white"
  nutthemmon.style.width = "250px"
  nutthemmon.style.height = "50px"
  nutthemmon.style.backgroundColor = "#CCCCCC"
  nutthemmon.style.alignItems = "end"
  nutthemmon.style.borderRadius = "25px"
  nutthemmon.style.position = "relative"
  nutthemmon.style.top = "50px"
  nutthemmon.style.left = "7px"
 

themonan.appendChild(nutthemmon);
  /** @type {CSSStyleDeclaration} */
let themonanStyle = {
  // width: "400px",
   height: "350px",

 backgroundColor : "white",
 border : "1px solid #CCCCCC",
 borderRadius : "3px",
 boxshadow: "rgba(0, 0, 0, 0.09) 0px -3px 5px"

//   display: "grid",
//   gridGap: "1rem",
//   gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
};
Object.assign(themonan.style, themonanStyle);
  listmonan.appendChild(themonan);
}
main.appendChild(monmoi);
main.appendChild(listmonan);
container.appendChild(main);


