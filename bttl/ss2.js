// Some : kt co it nhat 1 phan tu thoa dk
let arr = [3,6,9,12,1,3,5,7,9]
let check = arr.some((element)=>element%3==0)
console.log(check);

// Every : kt tat ca phan tu co chia het cho 3 ko
let checkDiv3 = arr.every((element)=>element%3==0)
console.log(checkDiv3);

// Sort
let strings = ["anh","nam","huy"]
console.log(strings.sort((a,b)=>{
    if (a>b) {
        return 1;
    } else if (a<b) {
        return -1;
    }
    return 0
}));
