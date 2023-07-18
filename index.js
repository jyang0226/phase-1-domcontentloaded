// Your code goes here
document.addEventListener("DOMContentLoaded", () => {
    const p = document.querySelector('p#text')
    p.textContent = 'This is really cool!'
})

console.log(
    "This console.log() has loaded before the DOMContentLoaded is triggered :D"
)