window.document.write("hello,kiyo!");
window.document.write("こんにちは,きよ!");
// window.document.write("hello,kiyo!");

// window.alert("きをつけて！ってうそよん。\n\nアラートの練習1");
// window.alert(`きをつけて！ってうそよん。
// アラートの練習2`);

window.document.getElementById("button2").addEventListener("click", function () {
  alert("おまえもがんばれよ！");
  console.log(window);
  console.log(window.getScreenDetails);
});
document.getElementById("button3").addEventListener("dblclick", function () {
  alert("ダブルクリックありがとな");
});
window.document.body.style.color = "red";
window.document.body.style.backgroundColor = "yellow";
document.getElementById("button2").style.backgroundColor = "blue";
window.resizeTo(500, 300); //新規に開いたページじゃないとリサイズ効かない
