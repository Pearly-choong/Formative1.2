// console.log('my script is working');


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//  modal menu list

 $('#id01').hide();
 $('#id02').show();

$(document).ready(function(){

  $('#breakfastBtn').click(function(){
    $('#id01').show();
    $('#id02').hide();
  });

  $('#lunchBtn').click(function(){
    console.log('hi')
    $('#id02').show();
    $('#id01').hide();
  });

});
