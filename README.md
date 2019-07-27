I've been studying React for a couple months now, and I realized I have nothing to show that demonstrates I have a working knowledge of core principles.That's why I created this.

I basically took a word game that I made when I was learning javascript, and I approached the task using REACT. I utilized the Meriam Dictionary API to get definitions. The words are generated dynamically from a word-list API, but it's not reliable (I keep having to get new API key each day).  I'm going to use a new API to dynamically generate a word, but I'm just waiting on the key. 

Here are the rules:
Words are randomly loaded from a random word list API, and then placed into the Meriam Dictionary API to give you definition hints.
You have 15 seconds and 7 guesses to guess the randomly loaded word.
If you guess correctly, 10pts will be added to your current score.
If you make 7 incorrect guesses, or your 15 seconds runs out, the game is over. Your current score will be wiped clean and you will be forced to start fresh.
If you choose to continue playing, your best current score will be logged as your "Top Score" for the duration of the browser session.
Once you've clicked out of the browser, your current and top scores will be erased and you're starting from scratch.
Have fun!
