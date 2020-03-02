function startFunc() {
    let num1 = +prompt("Nhập số đầu tiên");
    let num2 = +prompt("Nhập số thứ 2");
    let num3 = +prompt("Nhập số thứ 3");
    alert("Số nhỏ nhất trong 3 số " + num1 + ", " + num2 +", " + num3 +
        " là: " + findMin(num1, num2, num3));
}

function findMin(num1, num2, num3) {
    let arr = [num1,num2,num3];
    let min = arr[0];
    for (let index = 1; index <= arr.length; index++) {
        if (arr[index] < min) {
            min = arr[index];
        }
    }
    return min;
}