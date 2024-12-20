import { HomePageBuilder } from "./home_builder";
import { MenuPageBuilder } from "./menu_builder";
import { AboutPageBuilder } from "./about_builder";
import "./styles.css";

console.log("Script is running");
HomePageBuilder();

/*
    Nav button listeners
*/
const setTabbing = (function() {
    const content = document.querySelector("#content");
    const homeBtn = document.querySelector("nav .home");
    const menuBtn = document.querySelector("nav .menu");
    const aboutBtn = document.querySelector("nav .about");

    for (const prts of [[homeBtn, HomePageBuilder], [menuBtn, MenuPageBuilder], [aboutBtn, AboutPageBuilder]]) {
        prts[0].addEventListener("click", (function(e) {
            // clear tab
            while (content.firstChild) {
                content.removeChild(content.firstChild);
            }

            // print out new tab
            prts[1]();

            // change color of btn of active tab
            for (const b of [homeBtn, menuBtn, aboutBtn]) {
                b.classList.remove("open");
            }
            
            e.target.classList.add("open");
        }));
    }
})();