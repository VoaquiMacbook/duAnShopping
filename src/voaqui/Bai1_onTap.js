import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Bai1_onTap = () => {
    //     // Mảng ban đầu
    // let arr = ["t", "c", "e", "j", "b", "o", "-", "y", "a", "r", "r", "a"];
    // // Xóa phần tử "-"
    // arr = arr.filter(item => item !== "-");
    // // Thêm vào phần tử khoảng trắng
    // arr.push(" ");

    // // Đảo ngược mảng và chuyển thành chuỗi in hoa
    // const reversedUpperCaseString = arr.reverse().join('').toUpperCase();

    // // In ra màn hình
    // console.log(reversedUpperCaseString);
    // console.log(arr);



    // // // Tìm và thay thế chuỗi
    // // for (let i = 0; i < arr.length; i++) {
    // //   if (arr[i] === "o") {
    // //     arr[i] = "s";
    // //   }
    // // }

    // // In ra mảng sau khi thay thế
    // console.log(arr);


    // const str1 = "data ";
    // const str2 = "structures";

    // // Sử dụng concat để nối hai chuỗi
    // const resultString = str1.concat(str2);

    // // In ra chuỗi kết quả
    // console.log(resultString);


    // const cutString = resultString.slice(5);

    // // In ra chuỗi cắt được
    // console.log(cutString);




// // ham mau
//     function sortArray(arr) {
//         arr.sort((a, b) => a - b);
//         return arr;
//     }

// //arrow function:
//     const sortArray = arr => {
//         arr.sort((a, b) => a - b);
//         return arr;
//     };

// anonymous function
    const sortArray = arr => {
        arr.sort(function (a, b) {
            return a - b;
        });
        return arr;
    };
    const displaySortedArray = callback => {
        const userArray = [1,2,5,4,7,8,9,11,25,0];
        const sortedArray = callback(userArray.slice()); // Sử dụng slice để tạo một bản sao của mảng gốc và tránh ảnh hưởng đến mảng gốc
        console.log(sortedArray);
    };

    // Gọi hàm và truyền hàm sắp xếp làm đối số
    displaySortedArray(sortArray);




    return (
        <View>
            <Text>Bai1_onTap</Text>
        </View>
    )
}

export default Bai1_onTap

const styles = StyleSheet.create({})