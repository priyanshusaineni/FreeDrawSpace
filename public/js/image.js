const downloadTool = document.querySelector(".download-tool");
downloadTool.addEventListener("click", function (e) {
  const a = document.createElement("a");
  a.download = "sketch.png";
  a.href = board.toDataURL("image/png");
  a.click();
  a.remove();
});
