export function updateScrollBox(screen, vw){
    const highlight_color = 'white'

    if(screen.style.right == "0px"){
        document.getElementById("first_dot").style.backgroundColor = highlight_color
        document.getElementById("second_dot").style.backgroundColor = "rgba(0,0,0,0)"
        document.getElementById("third_dot").style.backgroundColor = "rgba(0,0,0,0)"

    }
    else if(screen.style.right == vw+"px"){
        document.getElementById("first_dot").style.backgroundColor = "rgba(0,0,0,0)"
        document.getElementById("second_dot").style.backgroundColor = highlight_color
        document.getElementById("third_dot").style.backgroundColor = "rgba(0,0,0,0)"
    }
    else if(screen.style.right == 2*vw+"px"){
        document.getElementById("first_dot").style.backgroundColor = "rgba(0,0,0,0)"
        document.getElementById("second_dot").style.backgroundColor = "rgba(0,0,0,0)"
        document.getElementById("third_dot").style.backgroundColor = highlight_color
    }
}

export function hypermove(param){
    const screen = document.getElementById("slideshow")
    const vw = window.innerWidth

    if(param == 1){
        screen.style.right = "0px"
    }
    else if(param == 2){
        screen.style.right = vw+"px"
    }
    else if(param == 3){
        screen.style.right = 2*vw+"px"
    }

    updateScrollBox(screen,vw)
}

export function move(direction){
    const screen = document.getElementById("slideshow")
    const style  = window.getComputedStyle(screen)
    const vw = window.innerWidth

    const val = parseInt(style.right.substring(0,style.right.length-2),10)
    if(val == 0 || val == vw || val == 2*vw){
        if(direction == "right"){
            if(style.right != (2*vw+"px")){
                screen.style.right = (parseInt(style.right.substring(0,style.right.length-2),10) + vw) + "px"
            }
        }
        else if(direction == "left"){
            if(style.right != "0px"){
                screen.style.right = (parseInt(style.right.substring(0,style.right.length-2),10) - vw) + "px"
            }
        }
    }
    updateScrollBox(screen,vw)
}