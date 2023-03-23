//1
$(function(){
    console.log("Lets get ready to party with jQuery!")
})

//2
$('article', 'img').addclass("image-center")

//3
$('p').eq(-1).remove()

//4
$('h1').css('font-size', Math.random() * 100)

//5
$('ol').append('<li "Trying my best here!"/>')

//6
$('aside').empty();
$('aside').append('<p> "Sorry about that" </p>')

//7


//8
$('img').on('click', function(e){
    $(e.target).remove();
})