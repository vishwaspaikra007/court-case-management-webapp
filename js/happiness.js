const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const hamburger = document.querySelector(".hamburger");
const headline = document.querySelector(".headline");
var counter = 0;

const timeline = new TimelineMax();

timeline.fromTo(hero , 1, { height : "0%" } , { height : "80%" , ease: Power2.easeInOut })
        .fromTo(hero , 1.2 , { width : "100%" } , { width : "80%" , ease: Power2.easeInOut })
        .fromTo(slider ,1.2 , { x : "-100%" } , { x : "0%" , ease: Power2.easeInOut }, "-=1.2" )
        .fromTo(logo , 0.5 , { opacity : 0 , x : 30 } , { opacity : 1 , x:0 } , "-=0.5")
        .fromTo(hamburger , 0.5 , { opacity : 0 , x : 30 } , { opacity : 1 , x:0 } , "-=0.5")
        .fromTo(headline , 0.5 , { opacity : 0 , x : 30 } , { opacity : 1 , x:0 } , "-=0.5")
        // .fromTo(section1 , 4 , { y : "-100%" } , { y : "100rem" , ease: Power2.easeInOut })

        function cross(){
            var navigation = document.querySelector("ul");
            console.log(navigation)
            if(counter == 0)
            {
                var nav = document.querySelector(".fa-bars");
                console.log(nav)
                nav.classList.remove("fa-bars");
                nav.classList.add("fa-times");
                navigation.style.visibility = "visible";
                // timeline.fromTo(navigation ,1 , {visibility : "hidden"} , {visibility : "visible" , ease: Power2.easeInOut});
                counter=1;
                console.log(counter)
            }
            else{

                var nav = document.querySelector(".fa-times");
                console.log(nav)
                nav.classList.remove("fa-times");
                nav.classList.add("fa-bars");
                navigation.style.visibility = "hidden";
                counter=0;
                console.log(counter)
            }
        }