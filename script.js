const questionSets = document.getElementsByClassName('question-set');

for (const element of questionSets) {

    element.addEventListener('click', openSet, false);

}

function openSet() {
    deactivateSet(this);

    let question = this.children[0];
    let arrowBtn = this.children[1];
    let answer = this.children[3];

    question.classList.toggle('active');
    arrowBtn.classList.toggle('open');
    answer.classList.toggle('opened');
}

function deactivateSet(targetElement) {
    
    for (const element of questionSets) {
        if (targetElement == element) {
            continue;
        } else {

            let question = element.children[0];
            let arrowBtn = element.children[1];
            let answer = element.children[3];

            question.classList.remove('active');
            arrowBtn.classList.remove('open');
            answer.classList.remove('opened');
        }
    }
}