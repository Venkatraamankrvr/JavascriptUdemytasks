'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenmodal = document.querySelectorAll('.show-modal')
// console.log(btnsOpenmodal);
const openModal = function(){
  console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');}

const closeModal = function(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');

}

for ( let i = 0; i < btnsOpenmodal.length; i++)
btnsOpenmodal[i].addEventListener('click', openModal


  // modal.style.display = 'block';
);


 btnCloseModal.addEventListener('click',closeModal)
 overlay.addEventListener('click',closeModal)
 document.addEventListener('keydown',function(e){
  //  console.log('a key was pressed.');
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')){
    
    
      closeModal();
    
  }
 })