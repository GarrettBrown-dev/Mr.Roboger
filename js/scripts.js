
//Business logic -----
function arrayGenerator(number) {
  const generatedArray = [];
  for (let i = 0; i <= number; i++) {
    generatedArray.push(i);
  }
  return generatedArray;
}
// UI Logic -----
$(document).ready(function () {
  $("form#formsubmit").submit(function (event) {
    event.preventDefault();
    const userNumber = $("#userNumber").val();
    const numberArray = arrayGenerator(userNumber);
    const outputArray = numberArray.map(function (index) {
      const stringifiedNum = index.toString();
      if (stringifiedNum.includes("3")) {
        return "Won't you be my neighbor?";

      } else if (stringifiedNum.includes("2")) {
        return "Boop.";

      } else if (stringifiedNum.includes("1")) {
        return "Beep";

      } else {
        return stringifiedNum;
      }
    });
    $("#outputArray").append(outputArray);
  });
});

