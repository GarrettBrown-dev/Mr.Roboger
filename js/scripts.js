const numbers = [1, 2, 3,]

function arrayGenerator(number) {
  const generatedArray = [];
  for (let i = 0; i <= number; i++) {
    generatedArray.push(i);
  }
  return generatedArray;
}

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
    console.log(outputArray)
  });
});

// Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
// Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
// Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
// The number 13 should be replaced with "Won't you be my neighbor?"
// The number 21 should be replaced with "Boop".
// The number 32 should be replaced with "Won't you be my neighbor?"