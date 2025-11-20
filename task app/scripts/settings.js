var nameInput = document.getElementById("name-input");
var emailInput = document.getElementById("email-input");

var cardName = document.getElementById("card-name");
var cardEmail = document.getElementById("card-email");
var cardCount = document.getElementById("card-count");

// Save settings
function saveSettings() {
  var name = nameInput.value.trim();
  var email = emailInput.value.trim();

  cardName.textContent = name === "" ? "Guest" : name;
  cardEmail.textContent = email === "" ? "—" : email;

  updateUserCard();
  return false;
}

// Update card + home text
function updateUserCard() {
  var completed = 0;
  var i;

  for (i = 0; i < tasks.length; i++) {
    if (tasks[i].done) completed++;
  }

  cardCount.textContent = completed;

  var homeTitle = document.getElementById("home-title");
  var homeSubtitle = document.getElementById("home-subtitle");

  var displayName = cardName.textContent;

  homeTitle.textContent =
    displayName === "Guest"
      ? "Welcome to Tasks App"
      : "Welcome back, " + displayName;

  if (completed === 0) {
    homeSubtitle.textContent = "You have no completed tasks yet.";
  } else if (completed === 1) {
    homeSubtitle.textContent = "You have 1 completed task.";
  } else {
    homeSubtitle.textContent = "You have " + completed + " completed tasks.";
  }
}

updateUserCard();
