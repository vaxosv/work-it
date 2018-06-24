
//let list = ["Buy it", "use it", "reak it", "fix it", "Trash it", "change it", "mail", "upgrade it", "Charge it", "point it", "zoom it", "press it", "Snap it", "work it", "quick", "erase it", "Write it", "cut it", "paste it", "save it", "Load it", "check it", "quick", "rewrite it", "Plug it", "play it", "burn it", "rip it", "Drag and", "drop it", "zip", "unzip it", "Lock it", "fill it", "curl it", "find it", "View it", "code it", "jam", "unlock it", "Surf it", "scroll it", "pose it", "click it", "Cross it", "crack it", "twitch", "update it", "Name it", "read it", "tune it", "print it", "Scan it", "send it", "fax", "rename it", "Touch it", "bring it", "pay it", "watch it", "Turn it", "leave it", "stop", "format it", "Buy it", "use it", "break it", "fix it", "Trash it", "change it", "mail", "upgrade it", "Charge it", "point it", "zoom it", "press it", "Snap it", "work it", "quick", "erase it", "Write it", "cut it", "paste it", "save it", "Load it", "check it", "quick", "rewrite it", "Plug it", "play it", "burn it", "rip it", "Drag and", "drop it", "zip", "unzip it", "Lock it", "fill it", "curl it", "find it", "View it", "code it", "jam", "unlock it", "Surf it", "scroll it", "pose it", "click it", "Cross it", "crack it", "twitch", "update it", "Name it", "read it", "tune it", "print it", "Scan it", "send it", "fax", "rename it", "Touch it", "bring it", "pay it", "watch it", "Turn it", "leave it", "stop", "format it", "Technologic", "technologic", "technologic", "technologic",]

let list = ["ვახო", "ვა ვახო", "ვახო", "ვა ვახო"]

let i = 0
let input = document.querySelector("h2")

setInterval(() => {
    input.innerHTML = ""
    for (let j = 0; j < list[i].length; j++) {
        // loop
        if (list[i + 1] == undefined) {
            i = 0
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

        // for (var k = 0; k < list[i + 1][j].length; K++){
        //     if (list[i][j] === list[i + 1][K] ) {
        //         var gg = document.createElement("span")
        //         gg.innerHTML = list[i][j]
        //         input.appendChild(gg)
        //     } else {
        //         var gg = document.createElement("span")
        //         gg.classList.add("c")
        //         gg.innerHTML = list[i][j]
        //         input.appendChild(gg)
        //     }
        // }
    }
    i++
}, 400)
