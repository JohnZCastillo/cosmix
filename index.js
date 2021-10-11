//-------------------- start -----------------------------------
// for showing and hiding the navigation list 
// Set the status of list to hidden
// event when burger is click display or hide navigation list base on its status

const navList =  document.getElementsByClassName('nav_lists')[0];
const burger = document.getElementsByClassName('nav_burger')[0];

let listsIsOpen = false;
burger.onclick = function(){
    if(listsIsOpen){
       navList.classList.add('hide');
        listsIsOpen = false;
    }else{
        navList.classList.remove('hide');
        listsIsOpen = true;
    }
}
// ------------------- end --------------------------------------


//-------------------- start -----------------------------------
// make the navigation list  position below the navigation bar
// get the height of navigatin bar using offset
// add the offset of the nav bar to the navigation list positon top
// navlist is already define at the top
// navList is navagation list

let navBar = document.getElementsByClassName('nav')[0];
navList.style.top = navBar.offsetHeight + 'px';

//-------------------- end -----------------------------------


//-------------------- start -----------------------------------
// change the background color of navigation bar
// by adding and removing  .background-onscroll class
// this take effect when the user scrolldown 
// below the height of the header
// 650 is the height of the header 
// -439 is the top position of the navigation bar while 
// navigation list is open just the touching 
// touchiing the  bottom edge of the header 

const header = this.document.getElementsByTagName('header')[0];
window.addEventListener('scroll',function(){
  
    let headerTopPosition = header.getBoundingClientRect().top;
    
    if(headerTopPosition <= -439){
        navBar.classList.add('background-onscroll');
    }else{
        navBar.classList.remove('background-onscroll');
    }
})
//-------------------- end -----------------------------------