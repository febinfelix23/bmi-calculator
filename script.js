// BMI Calculator

const myRadio = document.getElementById('male');
myRadio.checked = true;

function calculate() {
    if(age.value>=2 && age.value<100){
        const weightValue = weight.value;
        const heightValue = height.value;
        const bmi = weightValue/(heightValue/100)**2;
        document.getElementById('bmi').innerHTML = bmi.toFixed(2);

        if(bmi > 0 && bmi <= 18.5){
            document.getElementById('pointer').style.left = '12%';
            document.getElementById('comments').style.visibility = 'visible';
            document.getElementById('motivation').textContent = 'Time to grab a bite!';
            document.getElementById('motivation').style.color = 'red';
        }
        else if(bmi > 18.5 && bmi <= 25){
            document.getElementById('pointer').style.left = '37%';
            document.getElementById('comments').style.visibility = 'visible';
            document.getElementById('motivation').textContent = 'Great shape';
            document.getElementById('motivation').style.color = 'green';
        }
        else if(bmi > 25 && bmi <= 30){
            document.getElementById('pointer').style.left = '62%';
            document.getElementById('comments').style.visibility = 'visible';
            document.getElementById('motivation').textContent = 'Time to run!';
            document.getElementById('motivation').style.color = 'red';
        }
        else if(bmi > 30){
            document.getElementById('pointer').style.left = '87%';
            document.getElementById('comments').style.visibility = 'visible';
            document.getElementById('motivation').textContent = 'Time to run!';
            document.getElementById('motivation').style.color = 'red';
        }
        else{
            document.getElementById('pointer').style.left = 0;
        }

        document.getElementById('warning').style.visibility = 'hidden';
        document.getElementById('age').style.borderColor = '';
    }
    else{
        document.getElementById('warning').style.visibility = 'visible';
        document.getElementById('age').style.borderColor = 'red';
    }
}

// Reset
function reset(){
    weight.value = '';
    height.value = '';
    age.value = '';
    myRadio.checked = true;
    document.getElementById('bmi').innerHTML = '--';
    document.getElementById('pointer').style.left = 0;
    document.getElementById('comments').style.visibility = '';
}