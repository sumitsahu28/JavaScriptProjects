
function openURL(url) {
  window.open(
    url,
    "Share",
    "width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0"
  );
}
var currentQuote = "",
  currentAuthor = "";

var colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857"
];

function getQuote() {

  $.ajax({
    headers: {
      "X-Mashape-Key": "toIrsdjYu8mshCjkitV2zsGoPYCzp13IYp1jsnfriK8BgWG9HG",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=10",
    success: function(r) {
      if (typeof r === "string")
      {
        r = JSON.parse(r);
      }
      currentQuote = r[0].quote;
      currentAuthor = r[0].author;
  
          $("#text").html(currentQuote);
  
          $("#author").html(currentAuthor);
  
      var color = Math.floor(Math.random() * colors.length);
      console.log(color);
      console.log(colors[color]);
      $("body").animate(
        {
          backgroundColor: colors[color],
          color: colors[color]
        },
        1000
      );
      $("button.button").animate(
        {
          backgroundColor: colors[color]
        },
        1000
      );


      }
  });
}

$(document).ready(function() {
  getQuote();
  $("#new-quote").click(getQuote);

  $("#tweet-quote").on("click", function() {
    
      openURL("https://twitter.com/intent/tweet");
    });
  $("#fb-quote").on("click", function() {
    
      openURL("https://www.facebook.com");
    });
  
 });
