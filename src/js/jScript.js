document.querySelector('.header__burger').onclick = function(){
    let mItem = document.querySelector('.header__menu-item');
    mItem.classList.toggle('header__menu--active');
    document.querySelector('.header').classList.toggle('header--active');
    document.querySelector('.header__img').classList.toggle('header__img--active');
    document.querySelector('.header__img-mobile').classList.toggle('header__img-mobile--active');
    document.querySelector(".header__title").classList.toggle("header__title--active");
    
}



var swiper = new Swiper('.swiper-container',{
      slidesPerView: 3,
    centerSlides: true,
    
    breakpoints: {
    // when window width is >= 320px
    1200: {
      slidesPerView: 10,
    },
    960: {
      slidesPerView: 8,
    },
    768: {
      slidesPerView: 6,
    },
    576: {
      slidesPerView: 4,
    },
  },
         
});



let slider = function (){var swiper1 = new Swiper('.swiper-container1',{
      effect: 'coverflow',
      centeredSlides: true,
      slidesPerView: "auto",
    initialSlide:3,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
      },
      coverflowEffect: {
        rotate: 0,
        stretch: 300,
        depth: 300,
        modifier: 1,
        slideShadows: false,
      },
      breakpoints: {    
        960: {
            coverflowEffect: {
                rotate: 0,
                stretch: 800,
                depth: 300,
                modifier: 1,
                slideShadows: false,
            }, 
        },
        768:{
            coverflowEffect: {
                rotate: 0,
                stretch: 700,
                depth: 300,
                modifier: 1,
                slideShadows: false,
            }, 
        },
        576:{
            coverflowEffect: {
                rotate: 0,
                stretch: 500,
                depth: 300,
                modifier: 1,
                slideShadows: false,
            }, 
        }
        
        
      },
});}

slider();



let tabItem = document.querySelectorAll(".tab-item");
let tabArrow = document.querySelectorAll(".tab-arrow");
let gallary = document.querySelectorAll(".calc__gallary");

//for(let i = 1; i < tabItem.length; i++){
//    gallary[i].style.display = "none";
//}

for(let i = 0; i < tabItem.length; i++){
    
    tabItem[i].onclick = function (){
        
      
        for(let k=0; k < tabItem.length; k++){
            tabArrow[k].classList.remove('tab-arrow--active');
            tabArrow[i].classList.add('tab-arrow--active');
            
            tabItem[k].classList.remove('tab-item--active');
            tabItem[i].classList.add('tab-item--active');
            
            gallary[k].classList.remove("calc__gallary--active");
            gallary[i].classList.add("calc__gallary--active");
            
        }
//        slider();
    }
}




/*
.stage-2label
.stage-2__prompt
.stage-2__prompt-before
*/


let textArr = [];
textArr[0] = "Стекло М1, прозрачное, или просто обычное стекло. Все это - названия флоат-стекла,        являющегося самым популярным материалом стекольной промышленности. Имеет зеленоватый оттенок, ярко выраженный в виде с торца. Очень часто используется в темных помещениях, или в помещениях с темной плиткой / черным мрамором, так как зеленоватый отлив, при темном фоне не виден так отчетливо, а учитывая самую низкую цену стекла среди базовых видов, является лучшим выбором для таких помещений. ";
textArr[1] = "Осветленное стекло (Optiwhite,Clearvision). Кристально чистое, прозрачное стекло. Данный вид материала почти не имеет сторонних оттенков, кроме благородного светло-голубого цвета, заметного глазу лишь с торца полотна. Это стекло самое дорогое из базового сырья, из-за многоступенчатой очистки стекломассы при отливе листа. Самое лучшее применение - если в помещении или на фоне светлая плитка или белый мрамор. Вживую, в светлых помещениях стекло смотрится как на визуализациях дизайнера - кристально чистым и прозрачным, без оттенков.";
textArr[2] = "Матовое стекло (сатинат, Satinato) - это вид стекла с односторонним травлением, за счет чего был достигнут оригинальный светорассеивающий эффект, благодаря которому, видно лишь силуэты объектов и проникающий свет, дальше 5 сантиметров от полотна. За счет фирменного лака легче мыть. Матовое стекло делается на основе либо оптивайта, либо на основе обычного, зеленоватого стекла. От этого очень сильно зависит стоимость. По умолчанию, под матовым стеклом подразумевается, обычное прозрачное (М1, с зеленцой) с матирующей обработкой.";
textArr[3] = "Тонированное в массе стекло (без пленок и покрытий) серого цвета. Как и вышеперечисленные  виды стекла можно закаливать. На стекле почти не заметна грязь и отпечатки рук. В сочетании общестекольным признаком - легкой очисткой, образует отличное сочетание для использования не только в частных домах, но и в общественных местах с высокой проходимостью. Так же стекло легко декорируется и может быть покрыто матирующим слоем, что выглядит очень роскошно в темных или контрасных интерьерах.";
textArr[4] = "Тонированное в массе стекло (без пленок и покрытий) темно-бронзового цвета. Как и вышеперечисленные стекла можно закаливать. На стекле почти не заметна грязь и отпечатки рук. В сочетании общестекольным признаком - легкой очисткой, образует отличное сочетание для использования не только в частных домах, но и в общественных местах с высокой проходимостью. Так же стекло легко декорируется и может быть покрыто матирующим слоем, что выглядит очень роскошно в темных или контрасных интерьерах. ";

let labelStge2 = document.getElementsByClassName('stage-2label');
let promptStage2 = document.querySelector('.stage-2__prompt-before')
let promptStage2Text = document.querySelector('.stage-2__prompt')

function stage2Hover(){
for(let i = 0; i < labelStge2.length; i++){
    labelStge2[i].onmouseenter = function(){
         for(let k = 0; k < labelStge2.length; k++){
            if(i == k){
                promptStage2.style.zIndex = "10";
                promptStage2.style.opacity = "1";
                
                promptStage2Text.innerText = textArr[i];
            }
            else{
               labelStge2[k].style.backgroundColor = "#7EA0AD"; 
               labelStge2[k].style.opacity = "0.7";
            }
        }
    }
}
for(let i = 0; i < labelStge2.length; i++){
    labelStge2[i].onmouseleave = function(){
        for(let k = 0; k < labelStge2.length; k++){
                promptStage2.style.zIndex = "-10";
                promptStage2.style.opacity = "0";
               labelStge2[k].style.opacity = "0";
        }
    }
}
}
stage2Hover();

let calcGallary2 = document.querySelector('.calc__button-gallary-2');
let calcGallary1 = document.querySelector('.calc__button-gallary');
let gallarys =  document.querySelector('.calc__gallarys');
let stage2 = document.querySelector('.stage-2');

calcGallary1.onclick = gallaryNone;
calcGallary2.onclick = gallaryNone;


function gallaryNone(){
    calcGallary1.style.display = "none";
    gallarys.style.display= "none";
    stage2.style.display= "block";
}

//stage-3__option-item
//stage-3__gallary

//stage-3__button 

let stage3Option = document.getElementsByClassName('stage-3__option-item');
let stage3Gallary =document.getElementsByClassName('stage-3__gallary');

function stage3F (){
        for(let i = 0; i < stage3Option.length; i++){
            stage3Option[i].onclick = function (){
                for(let k = 0; k < stage3Option.length; k++){
                        stage3Option[k].classList.remove('stage-3__option-item--active');
                        stage3Gallary[k].classList.remove('stage-3__gallary--active');
                    
                        stage3Option[i].classList.add('stage-3__option-item--active');
                        stage3Gallary[i].classList.add('stage-3__gallary--active');
                    
                     
                }
            }
        }
    }

stage3F ()
let stage2Button = document.querySelector('.stage-2__button');
let stage3 = document.querySelector('.stage-3');

stage2Button.onclick = function(){
    stage3.style.display = "block";
    stage2.style.display = "none";
    stage3F ();
    
}

let stage3Button = document.querySelector('.stage-3__button');
let stage4 = document.querySelector('.stage-4');

stage3Button.onclick = function(){
    stage4.style.display = "block";
    stage3.style.display = "none";
    
}

let stage4Button = document.querySelector('.stage-4__button');
let stage5 = document.querySelector('.stage-5');

stage4Button.onclick = function (){
    stage5.style.display = "block";
    stage4.style.display = "none";
}

// Инициализация


// Доступ к экземпляру объекта
$('#my-element').data('datepicker')

document.querySelector(".form__time-title").onclick = function (){
    document.querySelector('.form__time-hidden').classList.toggle('form__time-hidden--active');
}



$('.popup__call-1').magnificPopup({
  items: {
      src: '#popup-call-1',
      type: 'inline',
      fixedContentPos: false,
      fixedContentPos: false,
      overflowY : "hidden",
      fixedBgPos: true,
  }
});

$('.popup__call-2').magnificPopup({
  items: {
      src: '#popup-call-2',
      fixedBgPos: true,
      type: 'inline'
  }
});











