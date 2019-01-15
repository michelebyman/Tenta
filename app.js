// JavaScript eller jQuery

// Skapar en knapp
$('body').append('<button id="btn1">Login</button>');

// när man klickar på knappen ska det här komma fram
$("#btn1").click(function() {
  //Skapar en div och tilldelar olika css egenskaper
  $('body').append('<div></div>');
  $("div").css({
            color: "Green",
            background: "#ccc",
            width: "300px",
            padding: "20px"
          });
  // Skapar en text och centrerar de tillsammans med det andra innehållet i diven
  $('div').append('<h1>Login</h1><br>').css('text-align','center');
  $('div').append('<input type="email" id="email"> <br>');
  $('#email').css('width', '100%');

  // Skapar en input och lägger till lite css
  $('div').append('<input type="password" id="password"> <br>');
  $('#password').css('width', '100%');
  $('#password').css('margin-top', '10px');

  // Skapar en input och lägger till lite css
  $('div').append('<button type="submit" id="submit">Skicka</button>');
  $('#submit').css('width', '100%');
  $('#submit').css('margin-top', '10px');

  // Skapar en funktion med eventlyssnare med validering + lägger till lite css
  $("#submit").click(function() {
      // sparar det man skirver i input i en var
      var email = $("input#email").val();
      // sparar password
      var password = $("input#password").val();
      // Kollar om email och lösen stämmer
      if (email === "Steve" && password === "123") {
          alert("rätt")
          //Hämtar users och skriver ut email
          $.get("https://jsonplaceholder.typicode.com/users/1", function(result) {
            console.log(result)
            $("body").append("email: " + result.email + "emailet från jsonPlaceHolder");
            $("body").css("color", "green");
            });
        }  else {
          alert("oops fel, try again")
        }
      })
      // disablar knappen så man inte kan trycka fram fler rutor utan du måste ladda om sidan
  $('#btn1').attr("disabled", "disabled");

        });
