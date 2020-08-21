const numbers = [1, 2, 3];


$(document).ready(function () {
  $("form#formsubmit").submit(function (event) {
    event.preventDefault();
    const userNumber = $("#userNumber").val();
    const outputArray = [];
    //const arrayOfInput = [userNumber];
    for (let i = 0; i <= userNumber; i++) {
      const stringifiedNum = i.toString();
      if (stringifiedNum.includes("3")) {
        outputArray.push("Won't you be my neighbor?")
      } else {
        outputArray.push(stringifiedNum)
      }

    }
    console.log(outputArray)
  });
});

// Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
// Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
// Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"