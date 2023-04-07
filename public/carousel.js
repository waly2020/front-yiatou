let items;
let btn_swip;
let swip = 0;
let sizeSlide = 0;
let contentDots;
let dots;
let cptDots = 0;
let origin;

function animeCaroussel() {
    contentDots = document.querySelector(".flex-dots");
    items = document.querySelectorAll(".items");
    origin = document.querySelector(".original");
    btn_swip = document.querySelectorAll(".btn-change");

    for (let i = 0; i < origin.children.length; i++) {
        contentDots.innerHTML += `
            <div class="dot"></div>
            `;
    }
    dots = document.querySelectorAll(".dot");
    dots[cptDots].classList.add("active");
    btn_swip.forEach(btn => {
        btn.addEventListener("click", () => {

            sizeSlide = ((parseFloat(items[0].offsetWidth)) + 10) * swip;

            if (btn.classList.contains("next")) {

                if (Math.abs(sizeSlide) < parseFloat(origin.offsetWidth) - (parseFloat(items[0].offsetWidth) * 2)) {
                    swip--;
                    cptDots++;
                }

            } else {
                if (Math.abs(sizeSlide) > 0) {
                    swip++;
                    cptDots--;
                }

            }
            for (let i = 0; i < items.length; i++) {
                let item = items[i];
                item.style.transform = `translateX(${((parseFloat(item.offsetWidth)) + 10) * swip}px)`;
            }
            dots.forEach(d => {
                d.classList.remove("active");
            })
            console.log(swip);
            dots[cptDots].classList.add("active");

        })
    })
}

// setTimeout(() => {
//     animeCaroussel();
// }, 1000);