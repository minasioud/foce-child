document.addEventListener("DOMContentLoaded", (event) => {

 
        const slider = document.querySelector('.banner');
        slider.classList.add('visible'); // Ajouter la classe "visible" pour déclencher l'animation
        const video = document.querySelector('#background-video');
        video.addEventListener("loadeddata",(event)=>{
            slider.classList.add('nobgd');
        });
   
});