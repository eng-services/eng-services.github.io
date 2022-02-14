$(document).ready(function () {
  var imgs = [
    {
      image: "images/main-bg5.jpg",
      title: "Four Seasons Residences @ 706 Mission",
    },
    {
      image: "images/main-bg2.jpg",
      title: "Salesforce Tower",
    },
    {
      image: "images/main-bg6.jpg",
      title: "Four Seasons Residences @ 706 Mission",
    },
    {
      image: "images/main-bg7.jpg",
      title: "Four Seasons Residences @ 706 Mission",
    },
    {
      image: "images/main-bg8.jpg",
      title: "Four Seasons Residences @ 706 Mission",
    },
    {
      image: "images/main-bg9.jpg",
      title: "Four Seasons Residences @ 706 Mission",
    },
    // {
    //   	'image':'images/main-bg4.jpg',
    //    'title': 'Salesforce East'
    // },
  ];
  var randbg = imgs[Math.floor(Math.random() * imgs.length)],
    img = randbg.image,
    title = randbg.title;
  //console.log(randbg.image);
  $(".box-img-header").css("background-image", "url(" + img + ")");
  $(".banner-title").html(title);
  $("body").on("click", ".imagen-galeria", function(){
    console.log("click imagen galeria");
  })
});
