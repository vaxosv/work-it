let list = ["Buy it", "use it", "reak it", "fix it", "Trash it", "change it", "mail", "upgrade it", "Charge it", "point it", "zoom it", "press it", "Snap it", "work it", "quick", "erase it", "Write it", "cut it", "paste it", "save it", "Load it", "check it", "quick", "rewrite it", "Plug it", "play it", "burn it", "rip it", "Drag and", "drop it", "zip", "unzip it", "Lock it", "fill it", "curl it", "find it", "View it", "code it", "jam", "unlock it", "Surf it", "scroll it", "pose it", "click it", "Cross it", "crack it", "twitch", "update it", "Name it", "read it", "tune it", "print it", "Scan it", "send it", "fax", "rename it", "Touch it", "bring it", "pay it", "watch it", "Turn it", "leave it", "stop", "format it", "Buy it", "use it", "break it", "fix it", "Trash it", "change it", "mail", "upgrade it", "Charge it", "point it", "zoom it", "press it", "Snap it", "work it", "quick", "erase it", "Write it", "cut it", "paste it", "save it", "Load it", "check it", "quick", "rewrite it", "Plug it", "play it", "burn it", "rip it", "Drag and", "drop it", "zip", "unzip it", "Lock it", "fill it", "curl it", "find it", "View it", "code it", "jam", "unlock it", "Surf it", "scroll it", "pose it", "click it", "Cross it", "crack it", "twitch", "update it", "Name it", "read it", "tune it", "print it", "Scan it", "send it", "fax", "rename it", "Touch it", "bring it", "pay it", "watch it", "Turn it", "leave it", "stop", "format it", "Technologic", "technologic", "technologic", "technologic", ]


let i = 0
let input = document.querySelector("h2")


/*TODO: 1. ipovne erti aso #sazebni romelic emtxveva romelime asos meore sityvashi;
        2. gadaitvale ramdeni #sazebnamde da #sazebnis shemdeg 
        3  mianiche animaciis stili #sazebnamde da #sazebnis shemdeg */
setInterval(() => {
    input.innerHTML = ""
    for (let j = 0; j < list[i].length; j++) {
        // loop
        if (list[i + 1] == undefined) {
            i = 0
        }

        for (let k = 0; k <= list[i + 1].length) {
            
        }

        if (list[i][j] === list[i + 1][j]) {
            var gg = document.createElement("span")
            gg.innerHTML = list[i][j]
            input.appendChild(gg)
        } else {
            var gg = document.createElement("span")
            gg.classList.add("c")
            gg.innerHTML = list[i][j]
            input.appendChild(gg)
        }

    }
    i++
}, 400)