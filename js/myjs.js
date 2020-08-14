window.addEventListener('DOMContentLoaded',function(){
    //  drop-menu
    let imenu = document.querySelector('.menu-icon');
    let navbar = document.querySelector('ul.drop-menu');
    imenu.onclick = () =>{
        navbar.classList.toggle('show');
        imenu.classList.toggle("change");        
    }
    // Event Scroll
    window.addEventListener('scroll',()=>{
         // menu sticky
        let navsticky = document.querySelector('header nav');
        let logo = document.querySelector('.logo img');
        let btntop = document.querySelector('.top');

        var offer = document.getElementById('#offer');
        // console.log(offer.innerHTML);
        let offercnt = document.querySelectorAll('.row.test .col-lg-4');
        btntop.onclick = () => {window.scrollTo(0, 0);}
        if(window.scrollY > 50){
            navsticky.classList.add('sticky');
            logo.src = "img/logo2.png";
            btntop.style.opacity = 1;
        }
        else{
            navsticky.classList.remove('sticky');
            logo.src = "img/logo.png";
            btntop.style.opacity = 0;
        }
        // scroll top
        // console.log(window.offer.offsetTop);
        if(window.scrollY > window.offer.offsetTop-100){
            setTimeout(() =>{
                // console.log(window.offer.offsetTop);
                // console.log(offercnt[0].innerHTML)
                offercnt[0].style.right=0
                offercnt[1].style.bottom=0;;
                offercnt[2].style.left=0;
            },)
        }

        
    }) 
   
});