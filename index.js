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

window.document.getElementById("button2").addEventListener("click", function () {
  alert("おまえもがんばれよ！");
  console.log(window);
  console.log(window.getScreenDetails);
  console.log("（シングル）クリック完了！");
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
window.document.body.style.color = "red";
window.document.body.style.backgroundColor = "yellow";
document.getElementById("button2").style.backgroundColor = "blue";
window.resizeTo(500, 300); //新規に開いたページじゃないとリサイズ効かない
