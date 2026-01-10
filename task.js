class LifestyleProfile {
  constructor(name, temp, time, energy) {
    this.name = name;
    this.temp = temp;
    this.time = time;
    this.energy = energy;
  }

  outfit() {
    return this.temp < 20 ? "Wear something warm" : "Light clothing recommended";
  }

  activity() {
    if (this.energy === "low") return "Light walk or rest";
    if (this.energy === "medium") return "Reading or casual work";
    return "Exercise or productive work";
  }

  greeting() {
    switch (this.time) {
      case "morning":
        return "Good morning";
      case "afternoon":
        return "Good afternoon";
      case "night":
        return "Good evening";
    }
  }
}

const btn = document.getElementById("btn");

btn.onclick = function () {
  const nameInput = document.getElementById("name").value.trim();
  const temp = Number(document.getElementById("temp").value);
  const time = document.getElementById("time").value;
  const energy = document.getElementById("energy").value;
  const result = document.getElementById("result");

  if (!nameInput || !temp || !time || !energy) {
    result.textContent = "Please complete all fields.";
    result.style.color = "red";
    return;
  }

  const name =
    nameInput.charAt(0).toUpperCase() + nameInput.slice(1).toLowerCase();

  const user = new LifestyleProfile(name, temp, time, energy);

  result.style.color = "green";
  result.innerHTML = `
    ${user.greeting()}, ${user.name}!<br>
    🌡 ${user.outfit()}<br>
    ⚡ Activity: ${user.activity()}
  `;
};
