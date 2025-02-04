let content = "Forgot to click Launch";
let file_name = "No Date Set";
let config_set = false;

let startFile = () => {
  content = "Mission";
  const tf = document.getElementById("Mname").value;
  const VOD = document.getElementById("VOname").value;
  var VOD_cl = VOD.trim().replace(/\s/g, "-");
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();
  var ctoday = yyyy + "/" + mm + "/" + dd;
  var ctime = today.toLocaleTimeString();

  file_name =
    tf +
    "-" +
    VOD_cl +
    "-" +
    ctoday +
    "-" +
    String(today.getHours()).padStart(2, "0") +
    String(today.getMinutes()).padStart(2, "0") +
    String(today.getSeconds()).padStart(2, "0") +
    ".txt";

  var disp = tf + "\n" + ctoday + " " + ctime;
  document.getElementById("VO").innerHTML = VOD_cl;
  document.getElementById("MN").innerHTML = disp;
  content =
    content +
    " - " +
    tf +
    "\nVO: " +
    VOD_cl +
    "\nConfig Setup: " +
    ctoday +
    " - " +
    ctime +
    "\n" +
    "-------------\n";
  config_set = true;
};

let launchStart = () => {
  if (config_set) {
    var today = new Date();
    var ctime = today.toLocaleTimeString();
    var newLine = ctime + " -- Launch \n";
    document.getElementById("LM").innerHTML = newLine;
    content += newLine;
  } else {
    alert("Flight Not Configured");
  }
};

let vlosBut = () => {
  if (config_set) {
    var today = new Date();
    var ctime = today.toLocaleTimeString();
    var newLine = ctime + " -- VLOS \n";
    document.getElementById("LM").innerHTML = newLine;
    content += newLine;
  } else {
    alert("Flight Not Configured");
  }
};

let bvlosBut = () => {
  if (config_set) {
    var today = new Date();
    var ctime = today.toLocaleTimeString();
    var newLine = ctime + " -- BVLOS \n";
    document.getElementById("LM").innerHTML = newLine;
    content += newLine;
  } else {
    alert("Flight Not Configured");
  }
};

let downloadFile = () => {
  if (config_set) {
    var today = new Date();
    var ctime = today.toLocaleTimeString();
    var newLine = ctime + " -- LAND \n";
    document.getElementById("LM").innerHTML = newLine;
    content += newLine;

    const link = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });
    link.href = URL.createObjectURL(file);
    link.download = file_name;
    link.click();
    URL.revokeObjectURL(link.href);
  } else {
    alert("Flight Not Configured");
  }
};

let resetE = () => {
  content = "Forgot to click Config";
  file_name = "No Date Set";
  document.getElementById("MN").innerHTML = document.getElementById(
    "Mname"
  ).value;
  document.getElementById("VO").innerHTML = document.getElementById(
    "VOname"
  ).value;
  document.getElementById("LM").innerHTML = "Reset";
  config_set = false;
};

function toggleAccordion() {
       var panel = document.getElementById("configPanel");
       var button = document.querySelector(".accordion");
       
       if (panel.style.display === "block") {
           panel.style.display = "none";
           button.classList.remove("active");
       } else {
           panel.style.display = "block";
           button.classList.add("active");
       }
   }