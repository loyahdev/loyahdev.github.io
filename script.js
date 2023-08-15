const container = document.getElementById("container");
setBlinkingCursor();

const inputHistory = [];

commands = {
  about: "This is the about bit. I am about Iori Pearce",
  interests: "This is the interests bit",
  contact: "You can contact me at multiple place below: \n github",
  history: "_",
  help: "_",
  clear: "_"
};

document.addEventListener("keyup", () => {
  const input = document.querySelectorAll(".input");
  const current = input[input.length - 1];
  if (current.value == "help") {
    current.classList.remove("purple");
    current.classList.add("yellow");
  } else if (commands[current.value]) {
    current.classList.remove("yellow");
    current.classList.add("purple");
  } else {
    current.classList.remove("purple");
    current.classList.remove("yellow");
  }
  console.log(current);
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const input = document.querySelectorAll(".input");
    const current = input[input.length - 1];
    current.setAttribute("disabled", true);
    inputHistory.push(current.value);
    console.log(history);
    if (commands[current.value]) {
      enterWithInput(current.value);
    } else {
      const invalidInput = `<p><span class = "red">Invalid</span> input, remember input is case sensitive. Type <span class=yellow>'help'</span> to see the full list of commands</p>`;
      container.innerHTML += invalidInput;
    }
    newCommandLine();
    setBlinkingCursor();
  }
});

function enterWithInput(command) {
  if (command === "help") {
    const listOfCommands = `<div id="command-list">
        <ul>
          <li class="commands"><span class="purple">'about'</span> - find out information about myself</li>
          <li class="commands"><span class="purple">'interests'</span> - uncover what excites me in the world of computer science</li>
          <li class="commands"><span class="purple">'contact'</span> - locate different ways of contacting me</li>
          <li class="commands"><span class="purple">'history'</span> - view your terminal search history</li>
          <li class="commands"><span class="yellow">'help'</span> - type to view this list of commands</li>
          <li class="commands"><span class="red">'clear'</span> - type this to clear the terminal</li>
        </ul>
      </div>`;
    container.innerHTML += listOfCommands;
  } else if (command === "history") {
    let text = '<div class="history-list"> <ul>';
    inputHistory.forEach((el) => {
      text += `<li class="commands"><span class="purple">'${el}'</li>`;
    });
    text += "</ul> </div>";
    container.innerHTML += text;
  } else if (command === "clear") {
    location.reload();
  }else if (command === "contact") {
    const newEl0 = document.createElement("p");
    newEl0.textContent = `You can contact me on Discord or Github:`
    container.appendChild(newEl0);
      
    const newEl1 = document.createElement("img");
    newEl1.alt = "github";
    newEl1.height = "56";
    newEl1.src = "https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy/available/github_64h.png";    
    const anchor1 = document.createElement("a");
    anchor1.href = "https://github.com"; // Replace with the desired link
    anchor1.target = "_blank"; // This line will open the link in a new tab
    anchor1.appendChild(newEl1);
    container.appendChild(anchor1); // Append to the container instead of the body

    //placeholder
    const placeHodler = document.createElement("p");
    placeHodler.textContent = ``
    container.appendChild(placeHodler);

    const newEl2 = document.createElement("img");
    newEl2.alt = "discord";
    newEl2.height = "56";
    newEl2.src = "https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy/social/discord-plural_64h.png";    
    const anchor2 = document.createElement("a");
    anchor2.href = "https://github.com"; // Replace with the desired link
    anchor2.target = "_blank"; // This line will open the link in a new tab
    anchor2.appendChild(newEl2);
    container.appendChild(anchor2); // Append to the container instead of the body
    
    const placeHodler1 = document.createElement("p");
    placeHodler1.textContent = ``
    container.appendChild(placeHodler1);

  } else {
    const newEl = document.createElement("p");
    newEl.textContent = `${commands[command]}`;
    container.appendChild(newEl);
  }
}

function newCommandLine() {
  const newLine = `<div class="input-container">
        <form onsubmit="event.preventDefault()">
        <label for="input" class="blue">C:\\Users\\$User></label>
        <input type="text" class="input"/>
        </form>
    </div>`;
  container.innerHTML += newLine;
}

function setBlinkingCursor() {
  const input = document.querySelectorAll(".input");
  const current = input[input.length - 1];
  current.focus();
}

// Add invisible submit button within form on html and within javascript then when enter
// is entered make it trigger the button? Then use event.preventDefault();
