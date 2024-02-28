import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Kt01_JsNangCao = () => {
    const ageOne = [5, 2, 4, 1, 15, 8, 3, 10, 20];
    const ageTwo = [16, 6, 10, 5, 6, 1, 4];

    const ageAll = [...new Set(ageOne.concat(ageTwo))];

    console.log(ageAll);
    
    // async function logMovies() {
    //     const response = await fetch("https://fakestoreapi.com/products?limit=10 ");
    //     const movies = await response.json();
    //     console.log(movies);
    //   }
    //   logMovies()
    // async function logSanPham() {
    //     const response = await fetch("https://fakestoreapi.com/products?limit=10 ");
    //     const sanpham = await response.json();

    //     // Lọc mảng để tìm các sản phẩm thuộc danh mục "electronics" và "jewelery"
    //     const electronics = sanpham.filter(sanpham => sanpham.category === "electronics");
    //     const jewelery = sanpham.filter(sanpham => sanpham.category === "jewelery");

    //     // In ra số lượng sản phẩm của mỗi danh mục
    //     console.log("Số lượng sản phẩm trong danh mục electronics:", electronics.length);
    //     console.log("Số lượng sản phẩm trong danh mục jewelery:", jewelery.length);
    // }

    logSanPham();

    return (
        <View>
            <Text>Kt01_JsNangCao</Text>
        </View>
    )
}

export default Kt01_JsNangCao

const styles = StyleSheet.create({})