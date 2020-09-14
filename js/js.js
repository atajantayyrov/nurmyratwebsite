/* Mobile hamburger button animation + open mobile menu */
$("#rsHeadermobileMenuButton").click(function () {
  $(this).find(".menu-bars").toggleClass("menu-bars_open");
  $("#rsHeadernavSearch").toggleClass("show");
  $("#headerCartContent").removeClass("active");
  $("#nwNaw").toggleClass("active");

  $("#rsHeaderContent").toggleClass("rs-header__menu-opened");
  $("body").toggleClass("overflow");
});
