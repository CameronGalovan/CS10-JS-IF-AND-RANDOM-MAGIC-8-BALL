//Magic 8 Ball

//Button Event Listener
document.getElementById("ball").addEventListener("click", seeFuture);

let HTMLel = document.getElementById("response");

function seeFuture() {
  let future = Math.random();
  let ftn = document.getElementById("fortune").value.toLowerCase();
  if (ftn === "") {
    HTMLel.innerHTML = "Please ask me a question";
  } else if (ftn === "is cameron galovan an awesome person?") {
    HTMLel.innerHTML =
      "Yes. Cameron Galovan is a very awesome person, who is smart and handsome too.";
  } else if (
    ftn === "who is the best teacher at harry ainlay high school?" ||
    ftn === "who is the best teacher at harry ainlay high school"
  ) {
    HTMLel.innerHTML = "Mr. Veldkamp";
  } else if (
    ftn === "are you really magic?" ||
    ftn === "are you really magic"
  ) {
    HTMLel.innerHTML =
      "You see your house tomorrow and come back and tell me if I'm magic";
  } else {
    if (future < 0.2) {
      HTMLel.innerHTML = "Without a doubt.";
    } else if (future < 0.4) {
      HTMLel.innerHTML = "As I see it, yes.";
    } else if (future < 0.6) {
      HTMLel.innerHTML = "Concentrate and ask again.";
    } else if (future < 0.8) {
      HTMLel.innerHTML = "Don't count on it.";
    } else {
      HTMLel.innerHTML = "Outlook not so good.";
    }
  }
}
