var USERFILLED = false;
var PLATCHOSEN = false;
var VBCHOSEN = false;
var PLATF;
var VBUCKS;
var VWVW = false;
var FLICKGLIDE;

function CH() {
  if (USERFILLED && PLATCHOSEN) {
    $(".C-button").fadeTo(1000, 1);
    VWVW = true;
  } else {
    $(".C-button").fadeTo(1000, 0.5);
    VWVW = false;
  }
}

function PLAT(xD) {
  $(".F-platform").css("opacity", "0.5");
  $(".P-" + xD).css("opacity", "1");
  PLATCHOSEN = true;
  PLATF = xD.toUpperCase();
  CH();
}

function VB(xD) {
  $(".V-bucks").css("opacity", "0.5");
  $(".V-" + xD).css("opacity", "1");
  VBCHOSEN = true;
  VBUCKS = xD;
  $(".S-button").fadeTo(1000, 1);
}

function SKIN() {
  if (VBCHOSEN) {
    $(".S2").fadeOut(1000);

    setTimeout(function() {
        $(".S3").fadeIn(1000).css("display", "flex");
    }, 1000)

    setTimeout(function() {
      FLICKGLIDE = new Glide('.glide').mount()
    }, 2000)

  } else {
    alert("You need to select how much free V-Bucks you want.")
  }
}

function CCC() {
  if (VWVW) {
    $(".S1").fadeOut(1000);

    setTimeout(function() {
        $(".S2").fadeIn(1000);
    }, 1000)

  } else {
    alert("Type your username and select your device.")
  }
}

function FIN() {
  $(".S3").fadeOut(1000);

  setTimeout(function() {
    $(".S4").fadeIn(1000)
  }, 1000)

  var SELSKIN;

  switch(FLICKGLIDE.index) {
	case 0:
      SELSKIN = "The Clark Kent (Shadow)";
      break;
	case 1:
      SELSKIN = "Midas (Ghost)";
      break;
    case 2:
      SELSKIN = "Rick Sanchez";
      break;
    case 3:
      SELSKIN = "Lara Croft (Gold Anniversary)";
      break;
    case 4:
      SELSKIN = "Zyg (Molten Midnight)";
      break;
	case 5:
      SELSKIN = "Tarana (X-Tinction Armor)";
      break;
	case 6:
      SELSKIN = "Cluck (Eggsplosive)";
      break;
  }

  var STRS = ["Initializing connection with Fortnite servers...^1000", "Looking for <u>" + $("#F-username").val() + "</u> record in <u>" + PLATF + "_users</u> table...^1000", "Adding <u>" + VBUCKS + "</u> V-Bucks...^1000", "Adding <u>" + SELSKIN + "</u> skin...^1000", "Finishing connection...^1000", "<uu>Bot detected..!!^1000 You need to complete our </uu><u>Anti-bot verification</u> <uu>to receive your </uu><u>" + VBUCKS + "</u> <uu>V-Bucks </uu><uu>and </uu><u>" + SELSKIN + "</u> <uu>skin...</uu>^1000"]

  var TYPEDO = {
            strings: STRS,
            typeSpeed: 10,
            backSpeed: 10,
            showCursor: false,
            onComplete: function() {
                $(".CL-button").fadeIn(1000);
            }
        }

        setTimeout(function() { var TYPEDV = new Typed(".console-2", TYPEDO); }, 1500)



}

$(function() {

  $("#F-username").change(function() {
    if ($(this).val().length > 0) {
      USERFILLED = true;
      CH();
    } else {
      USERFILLED = false;
      CH();
    }
  })

});
