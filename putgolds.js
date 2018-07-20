'use strict';

function findSolution(target) {
    let current1 = 1;

    for (let k = 1; 2 * current1 < target; k++) {
        current1 *= 2;
    };

    let history1 = current1;

    function find(current, history) {
        if (current == target) {
            return history;
        } else {
            let inc = 1;
            for (let k = 1; !(inc + current > target); k++) {
                inc = inc * 2;
            }
            return find(current + inc / 2, `${history} + ${inc / 2}`)
        }
    };

    return find(current1, history1);
}


const gold = document.getElementById("gold").value;
const x = document.getElementById('div1');
x.innerHTML = console.log(findSolution(gold));

