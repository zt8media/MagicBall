const options = [
  "Outlook looks bright, my friend. Shine on!",
  "As sure as the sun rises, the answer is yes!",
  "Absolutely! It's a definite yes.",
  "All signs point to yes, with a sprinkle of stardust.",
  "You've got this! The answer is a resounding yes!",
  "The stars align in your favor. Yes, indeed!",
  "No doubt about it, the answer is yes!",
  "The universe says: Yes, go for it!",
  "Absolutely positively, yes!",
  "Without a shadow of a doubt, yes!",
  "Hmm, signs point to no. But hey, there's always tomorrow!",
  "Not this time, but keep your chin up!",
  "Sorry, the outlook doesn't seem promising right now.",
  "Better not count on it, but don't let that dim your sparkle!",
  "Nah, let's not push it. But hey, there's plenty more adventures ahead!",
  "Looks like a no-go for now, but keep your eyes peeled for better opportunities!",
  "Outlook not so good, but don't let that rain on your parade!",
  "The stars aren't aligned in your favor this time. But hey, there's always room for surprises!",
  "Sorry, can't say I see it happening right now. But who knows what the future holds?",
  "Hmm, signs point to no. But remember, every cloud has a silver lining!",
];

const magicBall = document.getElementById("mb-container");
const response = document.getElementById("response");

magicBall.addEventListener("click", function () {
  const index = Math.floor(Math.random() * 20);
  const message = options[index];
  magicBall.className = "magicball_outer animate";
  setTimeout(() => {
    response.textContent = message;
    response.style.fontSize = "1.1rem";
    magicBall.className = "magicball_outer";
  }, 3000);
});
