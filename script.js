var friend = ["Meagan", "Madison", "Tommy", "Emma", "Ashley"];
var loc = [
  "Laundry room",
  "Kitchen",
  "Den",
  "Basement",
  "Living Room",
  "Office",
  "Bedroom",
  "Storage room",
  "Attic",
  "Lab",
];
var weap = [
  " pencil",
  "butter knife",
  "charger",
  "rug",
  "scissors",
  "razor",
  "bat",
  "gumdrop",
  "tennis ball",
  "sneakers",
  "fan",
  "pillow",
  "weed eater",
  "air fresher",
  "cast iron pan",
  "jet ski",
  "hammer",
  "rice cooker",
  "branch",
  "scooter",
];
for (var i = 0; i <= 100; i++) {
  (function (i) {
    var h3 = document.createElement("h3");
    var h3_Text = document.createTextNode("Accusation " + i);
    h3.append(h3_Text);
    document.body.append(h3);
    function alertOn() {
      function Displayname() {
        h3.addEventListener("click", function () {
          alert(
            "Accusation " +
              i +
              " : I accuse " +
              friend[i % friend.length] +
              " , with the " +
              weap[i % weap.length] +
              " in the " +
              loc[i % loc.length] +
              " !"
          );
        });
      }

      return Displayname;
    }
    alertOn()();
  })(i);
}
