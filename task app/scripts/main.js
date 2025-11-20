function showSection(sectionId, tabButton) {
  var sections = document.getElementsByClassName("section");
  var i;

  for (i = 0; i < sections.length; i++) {
    sections[i].className = "section";
  }

  var target = document.getElementById(sectionId);
  if (target) target.className = "section section-active";

  var tabs = document.getElementsByClassName("tab");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].className = "tab";
  }

  if (tabButton) tabButton.className = "tab tab-active";
}

function goToTasks() {
  var t = document.getElementById("tab-tasks");
  showSection("tasks", t);
}
