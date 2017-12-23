const facts =  ['polar bears love toothpaste', 'dogs are capable of laughing', 'when a person dies, hearing is usually the last sense to go', 'eggs and bananas help with hangovers', 'data is plural, datum is singular', 'green and black olives are the same fruit, just different levels of ripeness', 'Australian white-throated snapping turtles can breath through their butt holes', 'you are taller in the morning than you are at night', 'blue is the favored color for toothbrushes', 'weight lifters are able to handle heavier weight in blue gyms', 'the first product to have a barcode was a packet of Wrigley\'s Juicy Fruit in 1974', 'cats can eat sweet food but can\'t taste sweetness', 'chihuahuas have one of the largest color combination of any breed', 'bubblewrap was initially created as a wallpaper for a space-age decoration', 'most babies cry in c or c-sharp at birth', 'sunset on mars is blue', 'the hottest part of a chili is the central membrane where the seeds are attached', 'peanut is not a nut and an ingredient in dynamite', 'in Japan, yellow is the color of courage and nobility', 'flossing has no reliable study to prove it\'s health benefits', 'cilantro helps with bad breath', 'everyone has a unique tongue print, like fingerprints', 'ketchup and mustard are chinese innovations', 'hair grows slightly faster in warmer weather', 'Los Angeles is sunny 292 days of the year', 'skateboarding originated in California', 'white wine is white because the skin if removed before fermentation', 'broccoli is a vegetable and a flower', 'bananas ripen faster in the fridge', 'rap stands for rhythm and poetry', 'Mars is the same color as butterscotch', 'you have about 1,460 dreams in a year', 'Beverly Hills was originally a lima bean ranch', 'there\'s a basketball court above the Supreme Court, it\'s known as the highest court in the land', 'William McKinley was in the $500 bill, Grover Cleveland was on the $1,000, and James Madison on the $5,000', 'it takes an average of 364 licks to get to the center of a tootsie pop', 'Nutella was invented during WWII when an Italian pastry maker mixed hazelnuts into chocolate to extend his chocolate ratio', 'Calvin Klein\’s cologne obsession for men is used by researchers to attract animals to cameras in the wilderness', 'the most successful pirate was a former Chinese prostitute named Ching Shih (widow of Zheng)', 'fortune cookies were invented by a Japanese immigrant, Makato Hagiwara', 'crocodiles play by splashing water and giving each other piggyback rides', 'U.S. Dollar bill can be folded about 4,000x in the same place before it tears', 'onions are very toxic to dogs', 'in ancient Greece, men declared their love for women by throwing apples at them', 'space starts about 60 miles from the earth\s surface', 'it costs $30k to get in the Hollywood walk of fame', 'rubber bands last longer if they are kept cold', 'a shrimp\s head is in its head', 'a golfball has 336 dimples', 'Mercedes benz three pointed star was created as a symbol for its dominance over land, sea and air', 'whales have belly buttons', 'the little piece of paper wrapped with a Hershey\'s kiss is called a NigglyWiggly'];

var fact = document.getElementById("fact")

function generateFact() {
    $("button#button").on("click", function() {
        var randomNumber = Math.floor(Math.random() * facts.length);
        var randomFact = facts[randomNumber];
        $("p#fact").text(randomFact);
       
    });

}

generateFact();
$("button#button").trigger("click");

$(function () {
  $( "button#button" ).click(function() {
      var randomNumber = Math.floor(Math.random() * facts.length);
      var randomFact = facts[randomNumber];
      $( "#button" ).addClass( "onclic", 250, validate);
  });
});