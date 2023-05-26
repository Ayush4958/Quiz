const score = document.getElementById('result')

const ans1 = document.getElementById('place_for_ans1');
const ans2 = document.getElementById('place_for_ans2');
const ans3 = document.getElementById('place_for_ans3');
const ans4 = document.getElementById('place_for_ans4');
const ans5 = document.getElementById('place_for_ans5');


score.addEventListener("click", showresult)

// for cheeking the anwers
function showresult() {
    let count = 0;

    //Checking the answer 1
    if (ans1.value == "Charles") {
        count++
        ans1.style.backgroundColor = "Green"
    }
    else {
        ans1.style.backgroundColor = "red"
    }

    //Checking the answer 2
    if (ans2.value == "Guido") {
        count++
        ans2.style.backgroundColor = "Green"
    }
    else {
        ans2.style.backgroundColor = "red"
    }

    //Checking the answer 3
    if (ans3.value == "Brendan") {
        count++
        ans3.style.backgroundColor = "Green"
    } else {
        ans3.style.backgroundColor = "red"
    }

    //Checking the answer 4
    if (ans4.value == "James") {
        count++
        ans4.style.backgroundColor = "green"
    }
    else {
        ans4.style.backgroundColor = "red"
    }

    //Checking the answer 5
    if (ans5.value == "Dennis") {
        count++
        ans5.style.backgroundColor = "green"
    }
    else {
        ans5.style.backgroundColor = "red"
    }

    // it will print your scor on web by checking your answer and also tell you which answer was wrong
    score.innerHTML = `you scored ${count} by 5`
}




