//For Mobile Devices
let sliderContainer = document.getElementById("services")

window.onload = () => {
    if(screen.width < 500){
       return
    }
    else{
        sliderContainer.innerHTML = `
        <h1 class="display-4 text-white pb-5" style="font-weight: 500">Our Services</h1>
        <div class="container d-flex justify-content-around">
            <div class="services-1">
                <ul style="list-style-type: none">
                    <li class="d-flex align-items-end"><h1 class="mb-3 pb-1">/</h1><h1 class="display-1">01</h1><h3 class="h-2 text-white">Real Estate</h3></li>
                    <li class="d-flex align-items-end mt-5 pt-5"><h1 class="mb-3 pb-1">/</h1><h1 class="display-1">02</h1><h3 class="h-2 text-white">International Sales<br> 
                        and Lettings</h3></li>
                    <li class="d-flex align-items-end mt-5 pt-5"><h1 class="mb-3 pb-1">/</h1><h1 class="display-1">03</h1><h3 class="h-2 text-white">Project Development<br>
                        Consultancy</h3></li>
                </ul>
            </div>
            <div class="services-2">
                <ul style="list-style-type: none">
                    <li class="d-flex align-items-end"><h1 class="mb-3 pb-1">/</h1><h1 class="display-1">04</h1><h3 class="h-2 text-white">Property Management</h3></li>
                    <li class="d-flex align-items-end mt-5 pt-5"><h1 class="mb-3 pb-1">/</h1><h1 class="display-1">05</h1><h3 class="h-2 text-white">Legal Advisory</h3></li>
                    <li class="d-flex align-items-end mt-5 pt-5"><h1 class="mb-3 pb-1">/</h1><h1 class="display-1">06</h1><h3 class="h-2 text-white">Mortgage Advisory</h3></li>
                </ul>
            </div>
        </div>
        `
    }
}