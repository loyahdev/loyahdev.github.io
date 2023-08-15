const container = document.getElementById("container");
setBlinkingCursor();

const inputHistory = [];

commands = {
  about: "This is the about bit. I am about Iori Pearce",
  hobbies: "This is the hobbies bit",
  interests: "This is the interests bit",
  contact: "This is the contact bit",
  history: "_",
  help: "_",
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
          <li class="commands"><span class="purple">'hobbies'</span> - discover what I like to do in my spare time</li>
          <li class="commands"><span class="purple">'interests'</span> - uncover what excites me in the world of computer science</li>
          <li class="commands"><span class="purple">'contact'</span> - locate different ways of contacting me</li>
          <li class="commands"><span class="purple">'history'</span> - view your terminal search history</li>
          <li class="commands"><span class="yellow">'help'</span> - type to view this list of commands</li>
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
  } else {
    const newEl = document.createElement("p");
    newEl.textContent = `${commands[command]}`;
    container.appendChild(newEl);
  }
}

function newCommandLine() {
  const newLine = `<div class="input-container">
        <form onsubmit="event.preventDefault()">
        <label for="input" class="blue">$User></label>
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
