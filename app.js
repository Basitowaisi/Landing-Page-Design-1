let navbar = document.querySelector('header');  
    let up = document.querySelector('.up');

window.addEventListener('scroll', debounce(stickTheNav, 10));

let sticky = navbar.offsetTop;

function debounce(func, wait = 100) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}



function stickTheNav() {
  console.log('called');
  if (window.pageYOffset >= 100) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
  
  if(window.pageYOffset >= 600) {
    up.classList.add('show');
  } else {
     up.classList.remove('show');
  }
}



/*************/
$(document).scroll(function(){
    var st = $(this).scrollTop();

    $('section').each(function() {
        if(st > $(this).offset().top && st <= $(this).offset().top + $(this).height() ){                    
            var id = $(this).attr('id');
            $('a[href="#'+id+'"]').addClass('active-imp');
        }else{
            var id = $(this).attr('id');
            $('a[href="#'+id+'"]').removeClass('active-imp');   
        }   
    });

});
