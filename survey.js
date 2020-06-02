const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\' your name?: ', (name) => {
  rl.question('What activity do you like to do?: ', (activity) => {
    rl.question('What do you listen to while doing that?: ', (music) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.): ', (meal) => {
        rl.question('What\'s your favourite thing to eat for that meal?: ', (food) => {
          rl.question('Which sport is your absolute favourite?: ', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!: ', (superpower) => {
              console.log(`\n${name} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.\n`)
  
              rl.close();
            });
          });
        });
      });
    });

  });

});
