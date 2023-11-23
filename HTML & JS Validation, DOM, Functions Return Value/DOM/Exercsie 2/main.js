
function getSumOfNumbers(){
    const textBox1 = document.getElementById("textBox1");
    const textBox2 = document.getElementById("textBox2");
    const textBox3 = document.getElementById("textBox3");
    const sum = +(textBox1.value) + +(textBox2.value) + +(textBox3.value);
    alert(sum);
}

function getAverageOfNumbers(){
    const textBox1 = document.getElementById("textBox1");
    const textBox2 = document.getElementById("textBox2");
    const textBox3 = document.getElementById("textBox3");
    const sum = +(textBox1.value) + +(textBox2.value) + +(textBox3.value);
    const avg = sum / 3;
    alert(avg.toFixed(2));
}