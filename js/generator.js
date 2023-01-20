var quotes = ["If you don't know where you're going, any road will get you there.", "Life always offers your a change. It's called tomorrow.", "Everything is going to be OK in the end. If it's nog OK, it's not the end.", "Don't look back. You're not going there.", "Enjoy the little things.", "You can DO IT.", "Don't let your dreams be dreams.", "Sunny days wouldn't be special if it never rained."] 

function generator() {
 document.getElementById("name").innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
}