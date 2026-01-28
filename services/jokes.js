import Jokes from "give-me-a-joke";

export function getJoke() {
  return new Promise((resolve, reject) => {
    Jokes.getRandomDadJoke((joke, err) => {
      if (err) {
        reject("😕 Could not fetch joke");
      } else {
        resolve({
          joke,
          type: "Dad Joke 🤓"
        });
      }
    });
  });
}
