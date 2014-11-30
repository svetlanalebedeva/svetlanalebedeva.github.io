$(document).ready(function() {



  $("#menu-profile").click(function(){

    $("#resume").hide();
    $("#projects").hide();
    $("#blog").hide();
    $("#contact").hide();
    $("#profile").fadeIn();
    $("#menu li").removeClass("active");
    $("#menu-profile").addClass("active");
    $("menu-profile").css("font-weight", bold);

   });

  $("#menu-resume").click(function(){

    $("#profile").hide();
    $("#projects").hide();
    $("#blog").hide();
    $("#contact").hide();
    $("#resume").fadeIn();
    $("#menu li").removeClass("active");
    $("#menu-resume").addClass("active");

   });

  $("#menu-projects").click(function(){

    $("#resume").hide();
    $("#profile").hide();
    $("#blog").hide();
    $("#contact").hide();
    $("#projects").fadeIn();
    $("#menu li").removeClass("active");
    $("#menu-projects").addClass("active");

   });

  $("#menu-blog").click(function(){

    $("#resume").hide();
    $("#projects").hide();
    $("#profile").hide();
    $("#contact").hide();
    $("#blog").fadeIn();
    $("#menu li").removeClass("active");
    $("#menu-blog").addClass("active");

   });

  $("#menu-contact").click(function(){

    $("#resume").hide();
    $("#projects").hide();
    $("#blog").hide();
    $("#profile").hide();
    $("#contact").fadeIn();
    $("#menu li").removeClass("active");
    $("#menu-contact").addClass("active");

   });

$("#menu-profile").hover(function(){

    $(this).css("font-weight", "bold"); },
    function() {
    $(this).css("font-weight", "normal");

   });

$("#menu-resume").hover(function(){

    $(this).css("font-weight", "bold"); },
    function() {
    $(this).css("font-weight", "normal");

   });

$("#menu-projects").hover(function(){

    $(this).css("font-weight", "bold"); },
    function() {
    $(this).css("font-weight", "normal");

   });

$("#menu-blog").hover(function(){

    $(this).css("font-weight", "bold"); },
    function() {
    $(this).css("font-weight", "normal");

   });

$("#menu-contact").hover(function(){

    $(this).css("font-weight", "bold"); },
    function() {
    $(this).css("font-weight", "normal");

   });















});