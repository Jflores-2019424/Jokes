const joke = document.getElementById('joke')
const btnJoke = document.getElementById('btnJoke')

const jokes = [
     "I hate perforated lines, theyre tearable",
     "What do you call your friend who stands in a hole? Phil.",
     "The best time on a clock is 6:30--hands down.",
     "Did you hear about the two thieves who stole a calendar? They each got six months.",
     "I cut my finger chopping cheese, but I think that I may have grater problems.",
     "What did the piece of bread say to the knife? Butter me up",
     "I knew I shouldn't steal a mixer from work, but it was a whisk I was willing to take.",
     "When people are sad, I sometimes let them colour in my tattoos. Sometimes all they need is a shoulder to crayon.",
     "I'm glad I know sign language, it's pretty handy.",
     "What do you get hanging from Apple trees? Sore arms."
]

btnJoke.addEventListener('click', generateJoke)

function generateJoke() {
const randomJoke = Math.floor(Math.random() * jokes.length);
console.log(randomJoke, jokes[randomJoke])

const data = jokes[randomJoke]
joke.innerHTML = data
}