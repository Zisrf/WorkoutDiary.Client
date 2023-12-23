class Exercise {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

function onCreateExerciseClicked() {
    let name = document.getElementById("exercise_name").value;

    if (name === "") {
        alert("Name cannot be empty");
        return;
    }

    let exercisesStr = localStorage.getItem("exercises");
    let exercises;

    if (!exercisesStr) {
        exercises = [];
    } else {
        exercises = JSON.parse(exercisesStr);
    }

    let newExercise = new Exercise(exercises.length + 1, name);

    exercises.push(newExercise);

    localStorage.setItem("exercises", JSON.stringify(exercises));

    update()
}

function update() {
    let list = document.getElementById("exercises-list");

    let exercisesStr = localStorage.getItem("exercises");
    let exercises;
    if (!exercisesStr) {
        exercises = [];
    } else {
        exercises = JSON.parse(exercisesStr);
    }

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    exercises.forEach(exercise => {
        let section = document.createElement("section");
        section.className = "exercise";

        section.appendChild(document.createTextNode(exercise.name));

        list.appendChild(section)
    });
}

window.addEventListener('load', () => {
    update();
});