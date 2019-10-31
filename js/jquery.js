$(document).ready(function() {
  //toggle the component with class accordion_body
  $(".accordion_head").click(function() {
    $(this).removeClass("coll-back");
    if ($(".accordion_body").is(":visible")) {
      $(".accordion_body").slideUp(300);
      $(".plusminus").text("+");
      $(this).removeClass("coll-back");
      $(".rmv-cls").removeClass("coll-back");
    }

    if (
      $(this)
        .next(".accordion_body")
        .is(":visible")
    ) {
      $(this)
        .next(".accordion_body")
        .slideUp(300);
      $(this)
        .children(".plusminus")
        .text("+");
      $(this).removeClass("coll-back");
    } else {
      $(this)
        .next(".accordion_body")
        .slideDown(300);
      $(this)
        .children(".plusminus")
        .text("");
      $(this)
        .children(".plusminus")
        .append('<hr class="hr-clc">');
      $(this).toggleClass("coll-back");
      $(this).addClass("rmv-cls");
    }
  });
});
