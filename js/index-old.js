$(document).ready(function () {
    var imgs = [
        {
            'image': 'images/main-bg.jpg',
            'title': 'Lumina Lobby A'
        },
        {
            'image': 'images/main-bg2.jpg',
            'title': 'Salesforce Tower'
        },
        {
            'image': 'images/main-bg3.jpg',
            'title': 'Harrison Kitchen'
        },
        // {
        //   	'image':'images/main-bg4.jpg',
        //    'title': 'Salesforce East'
        // },
    ];
    var randbg = imgs[Math.floor(Math.random() * imgs.length)],
        img = randbg.image,
        title = randbg.title;
    console.log(randbg.image);
    $('.box-img-header').css('background-image', 'url(' + img + ')');
    $('.banner-title').html(title);
});