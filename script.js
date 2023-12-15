//your JS code here. If required.
for (let i = 1; i <= 20; i++) {
    let output = "";

    if (i % 3 === 0) {
        output += "Fizz";
    }

    if (i % 5 === 0) {
        output += "Buzz";
    }

    // If neither multiple of 3 nor 5, output the number itself
    if (output === "") {
        output = i;
    }

    // Display the result using alert
    alert(output);
}
