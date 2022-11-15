const values = [1000000,50,3500,800]

let counter_int = setInterval(()=>{
    if(document.querySelector("#counterNum-0").innerHTML >= values[0] || document.querySelector("#counterNum-0").innerHTML == "1B$"){
        console.log("clear_berkay")
        document.querySelector("#counterNum-0").innerHTML = "1B$"
        clearInterval(counter_int)
    }
    else{
        document.querySelector("#counterNum-0").innerHTML = parseInt(document.querySelector("#counterNum-0").innerHTML) + 100000
    }
},50)

let counter_int_2 = setInterval(()=>{
    if(document.querySelector("#counterNum-1").innerHTML >= values[1] || document.querySelector("#counterNum-1").innerHTML == "1B$"){
        console.log("clear_berkay")
        document.querySelector("#counterNum-1").innerHTML += "+"
        clearInterval(counter_int_2)
    }
    else{
        document.querySelector("#counterNum-1").innerHTML = parseInt(document.querySelector("#counterNum-1").innerHTML) + 10
    }
},50)
let counter_int_3 = setInterval(()=>{
    if(document.querySelector("#counterNum-2").innerHTML >= values[2] || document.querySelector("#counterNum-2").innerHTML == "1B$"){
        console.log("clear_berkay")
        document.querySelector("#counterNum-2").innerHTML += "+"
        clearInterval(counter_int_3)
    }
    else{
        document.querySelector("#counterNum-2").innerHTML = parseInt(document.querySelector("#counterNum-2").innerHTML) + 400  
    }
},50)
let counter_int_4 = setInterval(()=>{
    if(document.querySelector("#counterNum-3").innerHTML >= values[3] || document.querySelector("#counterNum-3").innerHTML == "1B$"){
        console.log("clear_berkay")
        document.querySelector("#counterNum-3").innerHTML += "+"
        clearInterval(counter_int_4)
    }
    else{
        document.querySelector("#counterNum-3").innerHTML = parseInt(document.querySelector("#counterNum-3").innerHTML) + 100
    }
},50)