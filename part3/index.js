const expand = document.querySelector('.brands__expand');
const list = document.querySelector('.brands__list');
const hide = document.querySelector('.brands__hide');
expand.addEventListener('click',function(){
    list.style.height = 'auto';
    expand.style.display='none';
    hide.style.display = 'block';
})
hide.addEventListener('click', function(){
    expand.style.display='block';
    hide.style.display = 'none';
    list.style.height ='175px';
})

const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
    },
  });