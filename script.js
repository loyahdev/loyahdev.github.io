const container = document.getElementById("container");
setBlinkingCursor();

const inputHistory = [];

commands = {
  about: `_`,
  interests: "Well most obviously I'm interested in computers and code. But I play sports such as hockey and rock climbing. I'm very interested in Apple with how they make there products and most notibly develop software and apps.",
  contact: "_",
  commissions: "_",
  projects: "_",
  history: "_",
  ls: "_",
  clear: "_"
};

document.addEventListener("keyup", () => {
  const input = document.querySelectorAll(".input");
  const current = input[input.length - 1];
  if (current.value == "ls") {
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
      const invalidInput = `<p><span class = "red">Invalid</span> input, remember input is case sensitive. Type <span class=yellow>'ls'</span> to see the full list of commands</p>`;
      container.innerHTML += invalidInput;
    }
    newCommandLine();
    setBlinkingCursor();
  }
});

function enterWithInput(command) {
  if (command === "ls") {
    const listOfCommands = `<div id="command-list">
        <ul>
          <li class="commands"><span class="purple">'about'</span> - find out information about myself</li>
          <li class="commands"><span class="purple">'interests'</span> - uncover what excites me in the world of computer science</li>
          <li class="commands"><span class="purple">'projects'</span> - find out about my projects I'm working on</li>
          <li class="commands"><span class="purple">'contact'</span> - locate different ways of contacting me</li>
          <li class="commands"><span class="purple">'commissions'</span> - find out how I can make a project for you</li>
          <li class="commands"><span class="purple">'history'</span> - view your terminal search history</li>
          <li class="commands"><span class="yellow">'ls'</span> - type to view this list of commands</li>
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
    anchor1.href = "https://github.com/loyahdev"; // Replace with the desired link
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
    anchor2.href = "https://discord.com/users/717142444596265061"; // Replace with the desired link
    anchor2.target = "_blank"; // This line will open the link in a new tab
    anchor2.appendChild(newEl2);
    container.appendChild(anchor2); // Append to the container instead of the body
    
    const placeHodler1 = document.createElement("p");
    placeHodler1.textContent = ``
    container.appendChild(placeHodler1);

    const newEl3 = document.createElement("img");
    newEl3.alt = "linktree";
    newEl3.height = "56";
    newEl3.src = "images/cozy_64h.png";
    const anchor3 = document.createElement("a")
    anchor3.href = 'https://linktr.ee/loyahdev';
    anchor3.target = "_blank";
    anchor3.appendChild(newEl3);
    container.appendChild(anchor3);

    const placeHodler2 = document.createElement("p");
    placeHodler2.textContent = ``
    container.appendChild(placeHodler2);

  } else if (command === "projects") {
    const info = document.createElement("p");
    info.textContent = `The information and about my projects will be on there respective pages:`
    container.appendChild(info);

    // PUTTERS PERFECTION
    const puttersPerfectionName = document.createElement("h1");
    puttersPerfectionName.textContent = `Putters Perfection`
    puttersPerfectionName.style.color = 'lime';
    container.appendChild(puttersPerfectionName);

    const puttersPerfectionDescription = document.createElement("p");
    puttersPerfectionDescription.textContent = `Putters Perfection  is a 2D mini golf game for iPhones with many holes and gameplay mechanics to keep the fun going.`
    container.appendChild(puttersPerfectionDescription);

    const puttersPerfectionGame = document.createElement("img");
    puttersPerfectionGame.alt = "github";
    puttersPerfectionGame.height = "56";
    puttersPerfectionGame.src = "https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy/available/github_64h.png";    
    const puttersPerfectionAnchor = document.createElement("a");
    puttersPerfectionAnchor.href = "https://github.com/loyahdev/Putters-Perfection"; // Replace with the desired link
    puttersPerfectionAnchor.target = "_blank"; // This line will open the link in a new tab
    puttersPerfectionAnchor.appendChild(puttersPerfectionGame);
    container.appendChild(puttersPerfectionAnchor); // Append to the container instead of the body

    //placeholder
    const placeHodler = document.createElement("p");
    placeHodler.textContent = ``
    container.appendChild(placeHodler);

  } else if (command === "about") {
    const aboutText = document.createElement("p");
    aboutText.textContent = `I'm a Game Developer and Programmer based out of Canada. I know and have learned some of the following programming languages:`
    container.appendChild(aboutText);

    // Sample array of list items
    const items = ['C#', 'Python', 'Javascript', 'HTML,CSS', 'Luau', 'Swift(UI)'];

    // Create a <ul> element
    const ul = document.createElement('ul');

    // Loop through the items array and append each item as a <li> element
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });

    // Append the <ul> element to a container in your HTML
    container.appendChild(ul);

    //placeholder
    const placeHodler = document.createElement("p");
    placeHodler.textContent = ``
    container.appendChild(placeHodler);

    // Next info paragraph
    const storyText = document.createElement("p");
    storyText.textContent = `I'm a Game Developer that's still learning but has come a long way. I started liking computers around the age of 8 when my dad gave me his old one. After that I completely fell in love. I use to just play games like Roblox on it but I learned how to code and that just kept going. My way of learning is just reading through code and seeing how people do things and how I can improve.`
    container.appendChild(storyText);

  } else if (command === "commissions") {
    const info = document.createElement("p");
    info.textContent = `The commissions are all no refunds and changes to completed projects are limited. All purchases are in either Giftcards, Discord Nitro, or Robux. To purchase DM me on discord at loyah. All prices are in:`
    container.appendChild(info);

    const cadMoney = document.createElement("p");
    cadMoney.textContent = "Canadian Dollar (CAD)"
    cadMoney.style.color = "red";
    container.append(cadMoney);

    const info1 = document.createElement("p");
    info1.textContent = `If you are not in Canada please convert the price to your local currency online.`
    container.appendChild(info1);

    // Single script
    const singleScriptName = document.createElement("h1");
    singleScriptName.textContent = `Single Script`
    const singleScriptDesc = document.createElement("p");
    singleScriptDesc.textContent = `I will make you a single script for any project. This will depend on difficulty, length, and the language of the script.`
    const singleScriptPrice = document.createElement("h2");
    singleScriptPrice.textContent = `$5`;
    container.appendChild(singleScriptName);
    container.appendChild(singleScriptDesc);
    container.appendChild(singleScriptPrice);

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
