const joke = document.getElementById("joke")
const button = document.getElementById("button")
const url = "https://v2.jokeapi.dev/joke/Any?type=single"

button.addEventListener("click", () => {
    getthejoke()
})
async function getthejoke() {
    // fetch(url)
    // .then(data => data.json())
    // .then(item => console.log(item))
    const response = await fetch(url)
    const data = await response.json()
    joke.innerHTML = data.joke
}
