/* ==========================================
   HAPPY BIRTHDAY MY CUTIE AMY
   SCRIPT.JS - PART 1
========================================== */

const PASSWORD = "1431432";

/* ==========================
GET ELEMENTS
========================== */

const pages = document.querySelectorAll(".page");

const passwordPage = document.getElementById("passwordPage");
const countdownPage = document.getElementById("countdownPage");
const blackPage = document.getElementById("blackPage");
const intro1Page = document.getElementById("intro1Page");
const intro2Page = document.getElementById("intro2Page");
const messagePage = document.getElementById("messagePage");

const passwordInput = document.getElementById("password");
const unlockBtn = document.getElementById("unlockBtn");
const error = document.getElementById("error");

const count = document.getElementById("count");

const song1 = document.getElementById("song1");
const song2 = document.getElementById("song2");

const intro1 = document.getElementById("intro1");
const intro2 = document.getElementById("intro2");

/* ==========================
SHOW PAGE
========================== */

function showPage(page){

pages.forEach(p=>{

p.classList.remove("active");

});

page.classList.add("active");

}

/* ==========================
START SONG
========================== */

window.addEventListener("load",()=>{

song1.volume=.5;
song2.volume=.5;

song1.play().catch(()=>{});

});

/* ==========================
PASSWORD
========================== */

unlockBtn.addEventListener("click",()=>{

if(passwordInput.value===PASSWORD){

error.innerHTML="";

showCountdown();

}else{

error.innerHTML="❌ Wrong Password";

document.querySelector(".box").classList.add("shake");

setTimeout(()=>{

document.querySelector(".box").classList.remove("shake");

},500);

}

});

/* ==========================
COUNTDOWN
========================== */

function showCountdown(){

showPage(countdownPage);

let number=5;

count.innerHTML=number;

let timer=setInterval(()=>{

number--;

count.innerHTML=number;

if(number<=0){

clearInterval(timer);

showBlack(1);

}

},1000);

}

/* ==========================
BLACK SCREEN
========================== */

function showBlack(step){

showPage(blackPage);

setTimeout(()=>{

if(step===1){

showIntro1();

}

},2000);

}

/* ==========================
INTRO VIDEO 1
========================== */

function showIntro1(){

song1.pause();

showPage(intro1Page);

intro1.currentTime=0;

intro1.play();

}
/* ==========================================
   SCRIPT.JS - PART 2
========================================== */

/* ==========================
CONTINUE BUTTONS
========================== */

const continue1=document.getElementById("continue1");
const continue2=document.getElementById("continue2");
const continue3=document.getElementById("continue3");

const typing=document.getElementById("typing");

/* ==========================
INTRO VIDEO 1 END
========================== */

intro1.addEventListener("ended",()=>{

continue1.style.display="block";

});

/* ==========================
CONTINUE TO INTRO 2
========================== */

continue1.addEventListener("click",()=>{

continue1.style.display="none";

showBlack(2);

});

/* ==========================
SHOW INTRO 2
========================== */

function showIntro2(){

showPage(intro2Page);

intro2.currentTime=0;

intro2.play();

}

/* ==========================
BLACK SCREEN UPDATE
========================== */

function showBlack(step){

showPage(blackPage);

setTimeout(()=>{

if(step===1){

showIntro1();

}

if(step===2){

showIntro2();

}

if(step===3){

showMessage();

}

},2000);

}

/* ==========================
INTRO VIDEO 2 END
========================== */

intro2.addEventListener("ended",()=>{

continue2.style.display="block";
continue2.style.visibility="visible";
continue2.style.opacity="1";
});

/* ==========================
CONTINUE TO MESSAGE
========================== */

continue2.addEventListener("click",()=>{

continue2.style.display="none";

showBlack(3);

});

/* ==========================
LOVE MESSAGE
========================== */

const message=

`Happy Birthday to the keeper of my heart,
my sweetest cutie pie!

You are the calm in my storm
and the brightest light in my life.

You are my first and my last love,
and I know nothing can ever tear us apart.

I will never break you,
and I know you will never break me.

Loving you is the most breathtaking thing
I have ever done.

I promise to cherish
and hold your heart safe
for all my days.

Happy Birthday My Cutie Amy ❤️`;

function showMessage(){

showPage(messagePage);

typing.innerHTML="";

let i=0;

let timer=setInterval(()=>{

typing.innerHTML+=message.charAt(i);

i++;

if(i>=message.length){

clearInterval(timer);

continue3.style.display="block";
continue3.style.visibility="visible";
continue3.style.opacity="1";

}

},35);

}
/* ==========================================
   SCRIPT.JS - PART 3
   CAKE + GALLERY
========================================== */

const continue4=document.getElementById("continue4");
const cutCake=document.getElementById("cutCake");

const cakePage=document.getElementById("cakePage");
const galleryPage=document.getElementById("galleryPage");

const slideImage=document.getElementById("slideImage");

const photos=[

"photo1.jpg",
"photo2.jpg",
"photo3.jpg",
"photo4.jpg",
"photo5.jpg",
"photo6.jpg",
"photo7.jpg",
"photo8.jpg",
"photo9.jpg",
"photo10.jpg"

];

/* ==========================
MESSAGE CONTINUE
========================== */

continue3.addEventListener("click",()=>{

continue3.style.display="none";

showCake();

});

/* ==========================
SHOW CAKE
========================== */

function showCake(){

showPage(cakePage);

}

/* ==========================
CUT CAKE
========================== */

cutCake.addEventListener("click",()=>{

cutCake.disabled=true;

cutCake.innerHTML="🎉 Happy Birthday ❤️";

song2.currentTime=0;

song2.play();

setTimeout(()=>{

showGallery();

},2500);

});

/* ==========================
SHOW GALLERY
========================== */

function showGallery(){

showPage(galleryPage);

let index=0;

slideImage.src=photos[index];

let slider=setInterval(()=>{

index++;

if(index>=photos.length){

clearInterval(slider);

continue4.style.display="block";

return;

}

slideImage.src=photos[index];

},2500);

}
/* ==========================================
   SCRIPT.JS - PART 4
   VIDEO 1 + VIDEO 2 + FINAL PAGE
========================================== */

const continue5=document.getElementById("continue5");
const finishBtn=document.getElementById("finishBtn");

const video1Page=document.getElementById("video1Page");
const video2Page=document.getElementById("video2Page");
const finalPage=document.getElementById("finalPage");

const video1=document.getElementById("video1");
const video2=document.getElementById("video2");
function stopAllAudio(){

song1.pause();
song2.pause();

song1.currentTime=0;
song2.currentTime=0;

intro1.pause();
intro2.pause();

video1.pause();
video2.pause();

}
/* ==========================
GALLERY CONTINUE
========================== */

continue4.addEventListener("click",()=>{

continue4.style.display="none";

showVideo1();

});

/* ==========================
VIDEO 1
========================== */

function showVideo1(){

showPage(video1Page);

video1.currentTime=0;

video1.play();

}

video1.addEventListener("ended",()=>{

continue5.style.display="block";

});

continue5.addEventListener("click",()=>{

continue5.style.display="none";

showVideo2();

});

/* ==========================
VIDEO 2
========================== */

function showVideo2(){

showPage(video2Page);

video2.currentTime=0;

video2.play();

}

video2.addEventListener("ended",()=>{

finishBtn.style.display="block";

});

finishBtn.addEventListener("click",()=>{

finishBtn.style.display="none";

showFinal();

});

/* ==========================
FINAL PAGE
========================== */

function showFinal(){

showPage(finalPage);

createHearts();

}

/* ==========================
FLOATING HEARTS
========================== */

function createHearts(){

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*35)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

},350);

}

/* ==========================
AUTOPLAY FIX
========================== */

document.addEventListener("click",()=>{

song1.play().catch(()=>{});

song2.play().catch(()=>{});

},{once:true});
