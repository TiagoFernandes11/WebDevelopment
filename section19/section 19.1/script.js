let s = "";

$("input").keypress((event) => {
  s += event.key;
  $("h1").text(s);
});

$("h1").on("mouseover", () => {
  $("h1").css("color", "green");
});
