// ===== DATA =====
const messages = [
    { text:"Keep going, you are doing great!", color: "red" },
    { text:"You are making good progress!", color: "salmon" },
    { text:"You are becoming a developer!", color: "green" },
    { text:"Every bug you fix makes you stronger!", color: "tomato" },
    { text:"Small progress every day adds up to big results!", color: "purple" },
    { text:"Don't give up, you're on the right track!", color: "tan" },
    { text:"Your dedication is paying off!", color: "indigo" },
    { text:"Believe in yourself, you can do this!", color: "gold" },
    { text:"Every line of code you write is a step forward!", color: "maroon" },
    { text:"Keep pushing, your hard work will pay off!", color: "olive" },
    { text:"Stay consistent and trust the process!", color: "navy" },
    { text:"You are capable of achieving your goals!", color: "violet" },
    { text:"Every challenge you overcome is a victory!", color: "aqua" },
    { text:"Your passion for coding will take you far!", color: "fuchsia" },
    { text:"Keep learning and growing, you're doing amazing!", color: "khaki" },
    { text:"Every line of code is progress.", color: "turquoise" },
    { text:"You showed up today — that matters.", color: "gray" },
    { text:"Remember why you started and keep going!", color: "yellow" }
];

// ===== VARIABLES =====
const messageElement = document.getElementById("message");
const button = document.getElementById("generate");

let currentIndex = 0;

// ===== FUNCTIONS =====
function shuffleMessages(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

// ===== INITIAL SETUP =====
shuffleMessages(messages);

messageElement.textContent = messages[currentIndex].text;
messageElement.style.color = messages[currentIndex].color;

// ===== EVENT LISTENER =====
button.addEventListener("click", () => {
  const selectedMessage = messages[currentIndex];

  messageElement.textContent = selectedMessage.text;
  messageElement.style.color = selectedMessage.color;

  currentIndex++;

  if (currentIndex >= messages.length) {
    shuffleMessages(messages);
    currentIndex = 0;
  }
});