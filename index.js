function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  let BMI = weight / ((height / 100) ^ 2);
  alert(`Your BMI is ${BMI}`);

  // bmi status
  if (BMI < 18.5) {
    alert("Not Factoring Age.. You're Underweight");
  } else if (18.5 <= BMI && BMI <= 24.9) {
    alert("Not Factoring Age.. You're Healthy");
  } else if (25 <= BMI && BMI <= 29.9) {
    alert("Not Factoring Age.. You're Overweight");
  } else {
    alert("Not Factoring Age.. You're Obese");
  }

  // when age is factored

  //BL 18
  if (age <= 18) {
    if (BMI < 18.5) {
      alert("Factoring Age.. You're Underweight");
    } else if (18.5 <= BMI && BMI <= 24.9) {
      alert("Factoring Age.. You're Healthy");
    } else if (25 <= BMI && BMI <= 29.9) {
      alert("Factoring Age.. You're Overweight");
    } else {
      alert("Factoring Age.. You're Obese");
    }
  }

  //19-24
  else if (19 <= age && age <= 24) {
    if (BMI < 18.9) {
      alert("Factoring Age.. You're Underweight");
    } else if (19 <= BMI && BMI <= 24) {
      alert("Factoring Age.. You're Healthy");
    } else if (24.1 <= BMI && BMI <= 29.9) {
      alert("Factoring Age.. You're Overweight");
    } else {
      alert("Factoring Age.. You're Obese");
    }
  }

  //25-34
  else if (25 <= age && age <= 34) {
    if (BMI < 19.9) {
      alert("Factoring Age.. You're Underweight");
    } else if (20 <= BMI && BMI <= 25) {
      alert("Factoring Age.. You're Healthy");
    } else if (25.1 <= BMI && BMI <= 29.9) {
      alert("Factoring Age.. You're Overweight");
    } else {
      alert("Factoring Age.. You're Obese");
    }
  }

  //35-44
  else if (35 <= age && age <= 44) {
    if (BMI < 21) {
      alert("Factoring Age.. You're Underweight");
    } else if (21 <= BMI && BMI <= 26) {
      alert("Factoring Age.. You're Healthy");
    } else if (26.1 <= BMI && BMI <= 31) {
      alert("Factoring Age.. You're Overweight");
    } else {
      alert("Factoring Age.. You're Obese");
    }
  }

  //45-54
  else if (45 <= age && age <= 54) {
    if (BMI < 22) {
      alert("Factoring Age.. You're Underweight");
    } else if (22 <= BMI && BMI <= 27) {
      alert("Factoring Age.. You're Healthy");
    } else if (27.1 <= BMI && BMI <= 32) {
      alert("Factoring Age.. You're Overweight");
    } else {
      alert("Factoring Age.. You're Obese");
    }
  }

  //55-64
  else if (55 <= age && age <= 64) {
    if (BMI < 23) {
      alert("Factoring Age.. You're Underweight");
    } else if (23 <= BMI && BMI <= 28) {
      alert("Factoring Age.. You're Healthy");
    } else if (28 <= BMI && BMI <= 33) {
      alert("Factoring Age.. You're Overweight");
    } else {
      alert("Factoring Age.. You're Obese");
    }
  }

  //AB 65
  else if (age >= 65) {
    if (BMI < 24) {
      alert("Not Factoring Age.. You're Underweight");
    } else if (24 <= BMI && BMI <= 29) {
      alert("Not Factoring Age.. You're Healthy");
    } else if (29.1 <= BMI && BMI <= 34) {
      alert("Not Factoring Age.. You're Overweight");
    } else {
      alert("Not Factoring Age.. You're Obese");
    }
  }
}
