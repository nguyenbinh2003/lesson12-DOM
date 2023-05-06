/*
	- Algorithms: Giải thuật
	- Input -> Process -> Output 
	- Xác định output => xác input
	- Find a solution (easy)
	- Tối ưu  
*/

// Viết chương trình tính tuổi cho một người. Người dùng sẽ nhập vào năm sinh và chương trình xuất ra số tuổi tương ứng.

/*
  output : số  tuổi
	input : năm sinh
*/

// Reusable (function)

function calculateAge(yearOfBirth) {
    if (yearOfBirth >= 2023) {
        console.log("From the future.");
    }

    console.log(2023 - yearOfBirth);
}

calculateAge(1998);
calculateAge(2003);

function totalOfCompany(benifitOfEmployee) {
    let sum = 0;
    for (let i = 0; i < benifitOfEmployee.length; i++) {
        sum += benifitOfEmployee[i];
    }
    return sum;
}
let ACompany = totalOfCompany([2, 3, 45, 9, 19]);
let BCompany = totalOfCompany([2, 3, -10]);

console.log(BCompany);