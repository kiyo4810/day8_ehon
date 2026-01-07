// window.document.write("hello,kiyo!");
// window.document.write("こんにちは,きよ!");
// window.document.write("hello,kiyo!");
// ページを壊さず、特定の場所だけを書き換える
document.getElementById("output1").textContent = "hello, kiyo! (書き換え1)";
// ページを壊さず、特定の場所だけを書き換える
document.getElementById("output2").textContent = "わーい, きよ! (書き換え2)";

// window.alert("きをつけて！ってうそよん。\n\nアラートの練習1");
// window.alert(`きをつけて！ってうそよん。
// アラートの練習2`);

// window.document.getElementById("button2").addEventListener("click", function () {
//   alert("おまえもがんばれよ！");
//   console.log(window);
//   console.log(window.getScreenDetails);
//   console.log("（シングル）クリック完了！");
// });
document.getElementById("button2").addEventListener("click", function () {
  // ボタンを押した時なら、ブラウザも安心して窓を開かせてくれます
  let childWin = window.open("", "_blank", "width=300,height=200");
  childWin.document.body.innerHTML = "<p>いまから書き換えるよ...</p>";

  setTimeout(function () {
    // 親ウィンドウの命令で、子ウィンドウの文字を上書き！
    childWin.document.body.innerHTML = "<h2>親から操作されました！</h2>";
  }, 3000);
});
// document.getElementById("button3").addEventListener("dblclick", function () {
//   alert("ダブルクリックありがとな");
//   console.log("ダブルクリック完了！");
// });
document.getElementById("button3").addEventListener("dblclick", function () {
  // 1. 表示場所（message-box）を捕まえる
  const msgArea = document.getElementById("message-box");

  // 2. 文字を書き換える
  msgArea.textContent = "ダブルクリックありがとな！ (3秒後に消えるよ)";

  // 3. 3000ミリ秒（3秒）後に、文字を空っぽにする命令を予約する
  setTimeout(function () {
    msgArea.textContent = "";
    console.log("メッセージを消去しました");
  }, 3000);
});
let a = typeof 123;
document.getElementById("output3").textContent = a;
let b = typeof "ばかやろう";
document.getElementById("output4").textContent = b;
let c = typeof true;
document.getElementById("output5").textContent = c;
let d = typeof window;
document.getElementById("output6").textContent = d;
let e = typeof null;
document.getElementById("output7").textContent = e;
let f = typeof undefined;
document.getElementById("output8").textContent = f;
let g = delete a;
document.getElementById("output9").textContent = g;
let h = "ようこそ'マレーシア'へ！";
document.getElementById("output10").textContent = h;
let i = `今から"カナダ"に行きます.`;
document.getElementById("output11").textContent = i;
document.getElementById("output12").textContent = h[5];
let j = 'ようこそ"イエロー\'ナイ\'フ"へ"おこしやす"！！';
document.getElementById("output10").textContent = j;
let k = 2 + "フィンガー";
document.getElementById("output11").textContent = k;
let l = typeof k;
document.getElementById("output12").textContent = l;
let m = 3 + true;
document.getElementById("output13").textContent = m;
let n = typeof m;
document.getElementById("output14").textContent = n;
let o = "1017";
console.log(o);
console.log(typeof o);
let p = window.parseInt(o);
console.log(p);
console.log(typeof p);
console.log(window);
console.log(typeof window);
console.log(document);
console.dir(document);
console.log(document.getElementById);
console.dir(document.getElementById);
//▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
// 1. 新しいボタン要素をメモリの中に作り出す
const newButton = document.getElementById("message-box").ownerDocument.createElement("button");
// 2. ボタンの見た目や中身を設定する
newButton.textContent = "魔法で増えたボタン";
newButton.style.backgroundColor = "green";
newButton.style.color = "white";
newButton.style.padding = "10px";
newButton.style.margin = "10px";
// 3. ボタンに動き（イベント）をつける
newButton.addEventListener("click", function () {
  alert("私がJavaScriptで作られたボタンです！");
});
// 4. 実際の画面（body）の最後に追加して、見えるようにする
document.body.appendChild(newButton);
//▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲

let q = 0;
q++;
console.log("q1は" + q);
q++;
console.log("q2は" + q);

window.document.body.style.color = "red";
window.document.body.style.backgroundColor = "yellow";
document.getElementById("button2").style.backgroundColor = "blue";
// window.open();
// window.resizeTo(500, 300); //新規に開いたページじゃないとリサイズ効かない
// 1. 新しいウィンドウを開き、「myWindow」という変数に入れる
// 第1引数はURL（空なら""）、第2引数は名前、第3引数は初期サイズなどの設定
// let myWindow = window.open("", "newWin", "width=100,height=100");

// if (myWindow) {
//   // 2. 「myWindow」に対してリサイズを命じる
//   myWindow.resizeTo(500, 300);

//   // 3. せっかくなので文字も書いてみましょう
//   myWindow.document.write("<h1>新しく開いた窓だよ！</h1>");
// } else {
//   alert("ポップアップがブロックされました。ブラウザの設定を確認してね。");
// }
let r = 100;
let s = 100;
document.getElementById("output15").textContent = r > s;
document.getElementById("output15-1").textContent = "sは" + s + "点、" + "rは" + r + "点でした";
document.getElementById("output16").textContent = s >= 20 ? "sは２０点以上なので合格" : "sは２０点以下なので不合格";
document.getElementById("output17").textContent = r >= 20 ? "rは２０点以下なので合格" : "rは２０点以下なので不合格";
document.getElementById("output18").textContent = s >= 20 || r >= 20 ? "sかrどちらかは２０点以上なのでハッピー" : "sもrも２０点以下なのでアンハッピー";
document.getElementById("output19").textContent = s >= 20 && r >= 20 ? "sもrどちらも２０点以上なので超ハッピー" : "sかrもしくは両方２０点以下なので超アンハッピー";
document.getElementById("output20").textContent = s >= 100 || r >= 100 ? "sかrどちらかは100点なのでハッピー" : "sもrも100点以下そりゃそっか";
document.getElementById("output21").textContent = s >= 100 && r >= 100 ? "sもrどちらも100点なので超激烈ハッピー" : "sかrもしくは両方１００点じゃないなのでそりゃそっか";
document.getElementById("output22").textContent = j;
document.getElementById("output23").textContent = j;
document.getElementById("output24").textContent = j;
document.getElementById("output25").textContent = j;
document.getElementById("output26").textContent = j;
document.getElementById("output27").textContent = j;
document.getElementById("output28").textContent = j;
