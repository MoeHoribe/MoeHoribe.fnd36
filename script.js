'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//奥村ボタン作成
const button = document.getElementById("okuBotton");
//ボタンカラーチェンジ用配列
const colors = ["orange", "yellow"];
//ボタンクリック処理  ↓関数に入れれそう
button.addEventListener("click", () => {
  button.style.background = colors[Math.floor(Math.random() * colors.length)];
});

//コンボボックスで選択した値を取得
function comboSelect() {
  let comboDestination = document.getElementById("destination");
  let comboboxValue = comboDestination.value;
  //console.log(comboboxValue);

  //コンボボックスで選択した値と一致する行先四角の場所を取得
  const colection = document.getElementById("target").children;
  
  //オブジェクトをループ処理
  for (const key in colection) {
    //console.log(key);
    let destinationColection = colection[key].children;
    //console.log(destinationColection);
    for (const key2 in destinationColection) {
      let forDestination = destinationColection[key2].value;
      //console.log(forDestination);
      //console.log(document.getElementById("target").children);
      //コンボボックスの値がハウスの時に位置を移動
      if (forDestination === comboboxValue && comboboxValue === "House" && document.getElementById("house").children.length === 1) {
        //ハウスの位置に四角を作成
        addButtonHouse();
      } else {
        if (forDestination === comboboxValue && comboboxValue === "Dojo" && document.getElementById("dojo").children.length === 1) {
          addButtonDojo();
        } else {
          if (forDestination === comboboxValue && comboboxValue === "XR" && document.getElementById("xr").children.length === 1) {
            addButtonXr();
          } else {
            if (forDestination === comboboxValue && comboboxValue === "Other" && document.getElementById("other").children.length === 1) {
              addButtonOther();
            }
          }
        }
      }
      const houseColection = document.getElementById("house").children;
      const dojoColection = document.getElementById("dojo").children;
      const xrColection = document.getElementById("xr").children;
      const otherColection = document.getElementById("other").children;
      const houseId = document.getElementById("houseButtonId");
      const dojoId= document.getElementById("dojoButtonId");
      const xrId = document.getElementById("xrButtonId");
      const otherId = document.getElementById("otherButtonId");
      console.log(houseColection.length);
      //それぞれのsikakuを確認して1つでもボタンがあったら削除
      if (houseColection.length + dojoColection.length + xrColection.length + otherColection.length > 5 && houseColection.length === 2) {
        console.log("保存不可");
        houseId.remove();
      } else if (houseColection.length + dojoColection.length + xrColection.length + otherColection.length > 5 && dojoColection.length === 2) {
        console.log("保存不可");
        dojoId.remove();
      } else if (houseColection.length + dojoColection.length + xrColection.length + otherColection.length > 5 && xrColection.length === 2) {
        console.log("保存不可");
        xrId.remove();
      } else if (houseColection.length + dojoColection.length + xrColection.length + otherColection.length > 5 && otherColection.length === 2) {
        console.log("保存不可");
        otherId.remove();
      }
    }
  }
}


//名前ボタンコピー機能(ハウス)
function addButtonHouse() {
  //ボタンタグ作成
  const btn = document.createElement("button");
  //ボタン名
  btn.innerHTML = "OKMR工長";
  btn.id = "houseButtonId";
  //ボタンクリック処理  ↓関数に入れれそう
  btn.addEventListener("click", () => {
    btn.style.background = colors[Math.floor(Math.random() * colors.length)];
  });
  //ボタン作成場所取得
  //console.log(document.getElementById("house"));
  const target = document.getElementById("house");
  //ボタン追加
  target.appendChild(btn);
}

//名前ボタンコピー機能(Dojo)
function addButtonDojo() {
  //ボタンタグ作成
  const btn = document.createElement("button");
  //ボタン名
  btn.innerHTML = "OKMR工長";
  btn.id = "dojoButtonId";
  //ボタンクリック処理  ↓関数に入れれそう
  btn.addEventListener("click", () => {
    btn.style.background = colors[Math.floor(Math.random() * colors.length)];
  });
  //ボタン作成場所取得
  const target = document.getElementById("dojo");
  //ボタン追加
  target.appendChild(btn);
}

//名前ボタンコピー機能(XR)
function addButtonXr() {
  //ボタンタグ作成
  const btn = document.createElement("button");
  //ボタン名
  btn.innerHTML = "OKMR工長";
  btn.id = "xrButtonId";
  //ボタンクリック処理  ↓関数に入れれそう
  btn.addEventListener("click", () => {
    btn.style.background = colors[Math.floor(Math.random() * colors.length)];
  });
  //ボタン作成場所取得
  const target = document.getElementById("xr");
  //ボタン追加
  target.appendChild(btn);
}

//名前ボタンコピー機能(その他)
function addButtonOther() {
  //ボタンタグ作成
  const btn = document.createElement("button");
  //ボタン名
  btn.innerHTML = "OKMR工長";
  btn.id = "otherButtonId";
  //ボタンクリック処理  ↓関数に入れれそう
  btn.addEventListener("click", () => {
    btn.style.background = colors[Math.floor(Math.random() * colors.length)];
  });
  //ボタン作成場所取得
  const target = document.getElementById("other");
  //ボタン追加
  target.appendChild(btn);
}

