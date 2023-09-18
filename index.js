const jokes = [
     "I hate perforated lines, theyre tearable",
     "What do you call your friend who stands in a hole? Phil.",
     "The best time on a clock is 6:30--hands down.",
     "Did you hear about the two thieves who stole a calendar? They each got six months.",
     "I cut my finger chopping cheese, but I think that I may have grater problems.",
     "What did the piece of bread say to the knife? Butter me up"
]

const randomJoke = Math.floor(Math.random() * jokes.length);
console.log(randomJoke, jokes[randomJoke])