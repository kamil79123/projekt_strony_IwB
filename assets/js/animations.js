


    gsap.registerPlugin(ScrollTrigger);

  
    const tl = gsap.timeline({
    });
    tl.to('#menu-card-1', {
        duration: 0.5,
        opacity: 1
    });
    tl.to('#menu-card-2', {
        duration: 0.5,
        opacity: 1
    });
    tl.to('#menu-card-3', {
        duration: 0.5,
        opacity: 1
    });
    tl.to('#menu-card-4', {
        duration: 0.5,
        opacity: 1
    });


function draw_news_animation () {
    gsap.fromTo('.anim', {
        opacity: 0,
        duration: 0.1,
        y: 300
    },
     {
        y: 0,
        duration: 0.5,
        opacity: 1
    });
}
window.draw_news_animation = draw_news_animation;
