import { tempUser } from "./Login";

const pp = document.querySelector('#pp')

if(tempUser.img == null){
    pp.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="relative z-30 w-20 h-20 p-1 text-white bg-amber-300 rounded-full mr-6" viewBox="0 0 24 24">
        <image href="https://www.defineinternational.com/wp-content/uploads/2014/06/dummy-profile.png"/>
    </svg>
    `
}
else{
    pp.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="relative z-30 w-20 h-20 p-1 text-white bg-amber-300 rounded-full mr-6" viewBox="0 0 24 24">
        <image href="${tempUser.img}"/>
    </svg>
    `
}
