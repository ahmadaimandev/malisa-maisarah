import viteLogo from '/vite.svg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// CSS
import '/assets/css/main.css';
import '/assets/css/scrollbar.css';
import '/assets/css/navbar.css';
import '/assets/css/backtotop.css';
import '/assets/css/hero.css';
import '/assets/css/profileimage.css';
import '/assets/css/gallery.css';
import '/assets/css/custom-button.css';
import '/assets/css/skill-card.css';
import '/assets/css/floating-heart.css';
import '/assets/css/achivement.css';
import '/assets/css/statistic.css';
import '/assets/css/preloader.css';
import '/assets/css/social-modal.css';
import '/assets/css/love-letter.css';


AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false , // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});


