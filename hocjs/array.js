const Hocsinh = ['Dong', 'Anh', 'Hoang'];

console.log(Hocsinh.toString()); // Chuyển kiểu dữ liệu thành String

console.log(Hocsinh.join('_')); // Chuyển kiểu dữ liệu thành String và chèn kí tự giữa các phần tử

console.log(Hocsinh.pop()); //Xóa phần tử cuối cùng của mảng và trả về phần tử đó
console.log(Hocsinh)

console.log(Hocsinh.push("Son")); //Thêm một hoặc nhiều phần từ mới vào cuối mảng và trả về độ dài mới của mảng
console.log(Hocsinh)

console.log(Hocsinh.shift()); //Xóa phần tử đàu của mảng và trả về phần tử đó
console.log(Hocsinh)

console.log(Hocsinh.unshift("Dong","Duc")); //Thêm một hoặc nhiều phần từ mới vào đầu và trả về độ dài mới của mảng
console.log(Hocsinh)    

Hocsinh.splice(1,2) //Xóa phần tử theo index của từng phẩn tử
console.log(Hocsinh)

Hocsinh.splice(1,0, 'Anh') //Chèn thêm phần tử mới theo index của từng phần tử
console.log(Hocsinh)

const Tuoi = ['21','20','22']
console.log(Hocsinh.concat(Tuoi)) //Nối 2 mảng lại với nhau

console.log(Hocsinh.slice(1)); //Cắt mảng

let thu = "";
thu = () => "Duy Dong";
console.log(thu)