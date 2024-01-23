import {
    View, Text,
    StyleSheet, Image,
    TouchableOpacity, ScrollView,
    SafeAreaView, FlatList
} from 'react-native'
import React from 'react'
const Profile_1 = () => {
    // dữ liệu mẫu testing
    const USERS = [{
        "id": 1,
        "name": "Gwenore",
        "email": "https://robohash.org/magnamutenim.png?size=50x50&set=set1",
        "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHdSURBVDjLpZNraxpBFIb3a0ggISmmNISWXmOboKihxpgUNGWNSpvaS6RpKL3Ry//Mh1wgf6PElaCyzq67O09nVjdVlJbSDy8Lw77PmfecMwZg/I/GDw3DCo8HCkZl/RlgGA0e3Yfv7+DbAfLrW+SXOvLTG+SHV/gPbuMZRnsyIDL/OASziMxkkKkUQTJJsLaGn8/iHz6nd+8mQv87Ahg2H9Th/BxZqxEkEgSrq/iVCvLsDK9awtvfxb2zjD2ARID+lVVlbabTgWYTv1rFL5fBUtHbbeTJCb3EQ3ovCnRC6xAgzJtOE+ztheYIEkqbFaS3vY2zuIj77AmtYYDusPy8/zuvunJkDKXM7tYWTiyGWFjAqeQnAD6+7ueNx/FLpRGAru7mcoj5ebqzszil7DggeF/DX1nBN82rzPqrzbRayIsLhJqMPT2N83Sdy2GApwFqRN7jFPL0tF+10cDd3MTZ2AjNUkGCoyO6y9cRxfQowFUbpufr1ct4ZoHg+Dg067zduTmEbq4yi/UkYidDe+kaTcP4ObJIajksPd/eyx3c+N2rvPbMDPbUFPZSLKzcGjKPrbJaDsu+dQO3msfZzeGY2TCvKGYQhdSYeeJjUt21dIcjXQ7U7Kv599f4j/oF55W4g/2e3b8AAAAASUVORK5CYII=",
        "postion": "Graphic Designer"
    }, {
        "id": 2,
        "name": "Reggis",
        "email": "https://robohash.org/deseruntmagnamblanditiis.png?size=50x50&set=set1",
        "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKGSURBVDjLpZNPSFRhFMV/33vfzDjOvBmlRkuz0THKIjGN2qSrFkFEBUFBG1fhtkW7aB1UUNDCyIJaRC3aRAXWxkroHxpCRGaY2uS/GWfUGUfffPPe+1poUbvCs77n3HPvuVdorVkP5P8Ujz3ae0IVtj80w80U5l4i7MlO8a8OfvQmTsvAyXvBjR1EG1pZGHvD8PNbs/JCz7u+snKrdS5fCi3ZjuFp8NC4nsbTGldrmq234kx7p4hWtJEd/YxfKKzIJsoq4zEZq4zWdR3bHimWtCgLmH91FYDKvEKlM0QThyhOP8BfLpgYGsb1/Fwe25c0UjknoRxP3OubJjmnKBQ1ExmPZNYjOdaHSvUSbTyMPdWD8M3jC1tgz2Hu7WK5YvdWo1B0RcBnULs5wvPBFAtLJaojgpXxx5QvPCO67Sj2ZDeGr4TK1TP1YoiB6vPE6psAhFy2HQASm8IIDb0DKdo3DOLLvaaq/Qhq5hamX2Mvxpnp/8DgtmtsrGtE6FWeUbDd1TxNSNSEiWaeYWbfo9wapj9ex8OmkK0l2f+JgcQVahsaCf4RviysrCoJAU7JwTd9n13Hb/PlwTlG+l8T2NqCPZ9mvu0ivnAMQztIn/y9ZWO56KIBpRxms3lGvqVRn57Q0NJBKLSDyaFR9IFLNDXvoX6zRXYhj+c4aA1ogVwuOtr1tEhl8tTFLO58TXH1Zjf7dzbgj7fQfOou/sgWPDSy3I+ssphK51ipCIL2tCxkJ8eLyok3bQmKcNAQN54mMdZGEkKsOfUQvw4DSbzS8sZn8iqX/jEl1VJ64uDZ3sqAFQrJgCmkNDFMgWmAYQgMucpb00KAdh2lVhbnM+nR5Hex3m80WCd+AqUYHPPwkaN5AAAAAElFTkSuQmCC",
        "postion": "Teacher"
    }, {
        "id": 3,
        "name": "Sasha",
        "email": "https://robohash.org/velitetipsum.png?size=50x50&set=set1",
        "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAI9SURBVDjLpZPNS5VBFIef+77X4lYayfVqpQY3XPiRGogp9rEpa2NRQpAELaJl5LKVJGSrFm36A6RMCpSilu5StETLaGcophTeNMyv+/rOmTMtrp87o4FhOOdwnvObHzMR5xz/s6IAz98vtDnHHeu0UFWxCqKKtYpVh1jdti1WHFZ1uONmSW0UQJ2721ybHf+XyQ9efqvcVGBV4wBvJjoRFcQKRgVjzdZpZbN2v74DY+zebYCMDy1lt3c1fSUQjNgtD6xVALr7U7sCXK7JJdwOkHUAwI3TCV4NzHK9IX8z1zM0S3PdVjy3GOxUYKyizhH1oWcwhe979A6liHjgrTfd6zpH2izRVP6aiqJDhCYD8Dau4ICoH6G5PkHUg2t1Ca7WJrhSmwDAOENhvJSu0YsEJkBEdypwClEP3o38wveh9cVZnBpCFUIRjuSWUFpwiqVghdbeKrJ5tg0ginOOLB8uncyjb2wO0ZAL5bewTrFqURw//kxzorCB5TDNyPcmKh8GBzMmakaO70XoG5sDIJAQ65Sp+XGMCqIGYw2La0tUF51h2azyYbJ/3gMQkYwHHpyvihP1IZAAsUJ+TjEFOcc4fDBJlh8jL/soo9MDfJz4ympIzZYHzlFRfICfv9Mcz4+RljU6Bx8TakggIcl4GXXJRoan+hmdGaMi9lR72ls+rz8kN9DePV4dWt1vxGLEEpNuolYRK+QAn2YaiXgxBsa/ULLnCQsribcAkd1+52RbZMWqvy+tNpl65CY38n8B/ZBP7EKNHesAAAAASUVORK5CYII=",
        "postion": "Business Systems Development Analyst"
    }, {
        "id": 4,
        "name": "Eveleen",
        "email": "https://robohash.org/placeatquisquamesse.png?size=50x50&set=set1",
        "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAH2SURBVDjLjZNLTxNRGIaJv6ZNWeBwkZFLQtGAC4l/wKULV+7YILeSYukEUhJoSASVuCI0hpAYDSUQCJBSoAaC0wbBUi4aWphpO52Zlpa+nnOqCAptJ3k3M3me73LOlAAoyZfDqQdOEvyO89/vRcGZ5HeWmySFYdWHVOQN0vE58jrLJMFJ82hewVU4+bMfqdPxP9VBn+A4D88wP59PwFqmsH7UgeTJEMlsTuIyI5uRsDfCMcmtAtoyhVmOu5kkHZuFsiNA3XuEi+QCdhxluL0D/SvpoO+vhIksiItNiPqqyXgfIL403gjfoTsIL70gQBdim3VQvz2FFnwOxf8E8kYF0rIVYqcRM70Vgf/Pe/ohwsutOJdcpBpP4Mek+jPEfbWQVzkG+7tNcNsqt68tkcLZTIzM6YZ21IbolgHq9j1o+z04nKhHRnlH2p6A32LCvFD55fIYr960VHgSSqCFVDJBEeugh+zw2jnpc0/5rthuRMBaioWBqrVrFylXOUpankIi0AjJY0DC3wD9oA9rAnc2bat+n++2UkH8XHaTZfGQlg3QdlsIbIVX4KSPAv+60L+SO/PECmJiI1lYM9SQBR7b3einfn6kEMwEIZd5Q48sQQt1Qv/xFqt2Tp5x3B8sBmYC71h926az6njdUR6hMy8O17wqFqb5Bd2o/0SFzIZrAAAAAElFTkSuQmCC",
        "postion": "Food Chemist"
    }, {
        "id": 5,
        "name": "Wanids",
        "email": "https://robohash.org/debitisimpediteligendi.png?size=50x50&set=set1",
        "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKDSURBVDjLhZNrSJNRGMc3HeoQL1ObhEMhcWyB5IWScn1KRPoSBBFUFBmpJOQXv4RhXlasRbZFXmDkXLowIxesrSGTodvaLWcEKdTMyWAtQteFsWSLf+e8zlHo6sD/fd7nPOf/e877cg4LAIuKDLZYLG5QKpVuoVDYRHIOnUuIU1NTI1GpVA66hs4lffThI8FB5DEYEAwG4dLrmdyXEH33mkxMbcFoTNYSjVlsmrzNzMSSzYZAIIB3JL5JT8d6WhqjRTYbS3Y7U6NrFhOAxO62AO+zszGt0cDv92NarYa3qAhrBQVYy83Fay4X06OjWzUSl3cDfMnLw6xIhBGBAOayMqyUlmK1pAQf+XwsE5AhJwf3s7LwIiMDQbKjHYAfhYX4XF+PUG0tPlVWIkBga+XlWCWgFQLyFRfjA9mVj8fDOofzN8DlciEej6dULBZDNBplRAedo56UgEgkAo/Hg42NDbjdbjgcDlydkOCyuho/Y9H/A6hZp9MxnTc3NxEKhdA6Vode/RmcHhHhe+QrnE7nTgA1bEM6tEdJ18Noe3QQzQ+rcF13ClMeJTqfnkCjYi/m7JbdAdtqH6/Dc+8Qni08YIyTHgUU5k5oHHK0aRtxSMbF/i52fkrAJfK91Dww04HbpnbcNLagR38RfYZWjMz349yYBBU3WHHmKFMAMf36E3BWJcYTtwJa511oXskxapcRyBUMz/ehRduEA1IeSq6xqhiA2WxGOBz+RiHb/+Dk8D4cVwrQcI8PyZ18nFcfwdBcD5rHG1ErK8bUzGMkL9Pg4CAsFgusVmtKVd/i4oLmGKr792Dy5QSoJwmQSqU2co3xL1V0Z6C0Kx29A91MLpfL/dT7G1NDhMW9KO0jAAAAAElFTkSuQmCC",
        "postion": "Research Assistant III"
    }, {
        "id": 6,
        "name": "Minnie",
        "email": "https://robohash.org/oditrepudiandaeut.png?size=50x50&set=set1",
        "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALISURBVDjLpZNpMNRhHMc31ExNmjRTDdVMsxXLkntnTcmxJTKFMK6JnK1KcheKDDZXubbSoRdlNFFNGFTIbeiNsyjHnzI0ZrFk/621+21bx6wx9caLz/Pi+T3fz/Ob56AAoKwH2WAU2QyP+wNO6xKY3WgOsMseKJQvTrm6p0ohplzcuqR4/lsQ0QQmhzA0SxkUW6QPbv47xz9t3zBjd3ZeStu0g+OAFJGUESnUtYLwRqjHjyhqxxFCvVtE+dwxC84vc5ZklmV1dHnhrJUNlW9ty588ZS+wzSHiVwkMwxpAPRm/b0/kcOqF82/m5wyYpIBhwpXfyTCOyAjKLJT0Frji29sktD+xQgeX7ikrGoTVY3nhhJaJZFj/hFA+vD+YeMFOe7QwVhOF6c4yYHYUU53FaEm3Hl8UhNbKBKJdagVC1b0i0zPvyS3eRLayz7Didp+hSteb+fMT3XELwu8lGKtNg6DrNRaIRnQ9DSBlAr2QGsTo2euKlVUkC9t2JFNciUSKCwEFF0LMCi2S8LpjJWJBIwQDl8FrC8KXZ77oyXZDW7aD+qIguBrYsNEOCpv65VsPiE3Kn+y6DjHZgrl+L5AjHpj5HI2hPPPxKeNDH1cOUffKBwgpSk4iitLu5fDd9IOcsU9RS2FPkMPu4HfHoI9rSfalM4yk3aqtCA4HvcPjnTTz5XBkskZlZ0UIxIJ6kEO++D1yDtPSTnq5LJFjlh5/zTvQuVQBk3BtVWYEPc/7qjqvpzwaHRWZ+NHqjLkhD/Dar+FrrsXPqjSGJjNBe5CRSM9ZLbhYDgO2pp0+W8PqZQoLmCHQ+9AJNdFqaHpgg7oEo9E7/keOy24sWEON5q7NNg6jbV0R0APLQGeXQotdggR/HQhbciFszUJrkgWe+x0AK/AeaH6vligGzbdIxopAHmdTFZLjRRNV37YRVWVY1pVG6VD/9xv/AJGzmhVs7+fUAAAAAElFTkSuQmCC",
        "postion": "Programmer I"
    }, {
        "id": 7,
        "name": "Ferdinand",
        "email": "https://robohash.org/magnamporrotempora.png?size=50x50&set=set1",
        "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAL+SURBVBgZBcFNaJtlAMDx//ORjzZbs7TJkmowbJcdZqr1oNavCiIIMraBh0IY7uZx8+OiVw9SQZgXp3gR3A5OtIigcxMcylyqVPADh0WNpO2bpk2bvm3e5P163sffT1hrATj/2drDwKXjR7JzwyhhGCVEScIoTlzgAOgBBugDO8DHwA0NAJDE8SMPVA7NvTpfAgAAwAuT/DBM8n3fVMMIDgLDf70BX//jPQtc1AAASRyXJ9ICgLU9Q0oItAClIZOS3JeRKClJKZitjnFPPjf54U/OOxIAwETRRE5DnMBBKHAj2AvA9cH1YWcEWwMDwOtX28wdy3F/MVXSAAAmiiYPpyVeAJ5vkFKgAaVAKlAIlIAEEGaf5r99fmm7jgYAMGFYzo8p3FHMMLBIaVESpBEoCQqLUoBVdPcD3r359z5wXgMAxGFYK0+kcH1LDGBBGYG0gAGFRVtJYsGkDHEYH/vi5cd3JQCACYNaJZ/BCy1CghICCUhAAADCgrUQBwEmDAyABnjuzetjWsl0JiUJjUFiAYsFDAIAAUgJkTEMvGEM7ANogDgIS7lcFinAD3xav/2Iu/4npakCTneHk0+d4dDhSW5f/4jfiwUek1uy67Rfm59/6z0NYMJgXOfSWBOxfONT8tLjxXMNPM9jfX2dZvMrVCrL2dOn0FrR6XTkysrK2+12uySeuHClCFw+Mz/7wvHsFs3vv2WhscDVT77kr1/vMF2pUK/X6XQ69Ho9OpubpI9Ut155qXF0aWnJ1SYMnwGeX7nb4k77Z2aq4wD0y6cYDG+xsLBAoVBgMBiwvb3N5fc/YHf8wW+Ac/l8PqNNFD10+umZsTcaj3Ltmkez2QSgtvs5a9KyuLhILpcDwPM8bJIwtXv7STjJxsaGr00UtTZ7Lldu3iXU0/TdAT98d4v6zAz1ep1ut8vq6iqZTIZarUa5XMYPo6PLy8t7juNsitnGpSJwEahhk6KK9qpToz9O3Fsp6kw6LYSA1qhEdnyCaVpYm9go8H3Hcbqe5539H/YvZvvl5HpaAAAAAElFTkSuQmCC",
        "postion": "Help Desk Operator"
    }, {
        "id": 8,
        "name": "Nichol",
        "email": "https://robohash.org/assumendaipsaminima.png?size=50x50&set=set1",
        "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFFSURBVCjPhZG/K8RxHMZfdy5OnEEMhhuMJCMldVl0JcOV7Bb2K/+CRakbTOdOsSjWK2WRZMDiR1eK7sJEuYsv98P3/XkM93Uj72d51+vp6aknJP6+yO+z3U/azTGsDt2rQGb5NQBCiHxqz3tUU5LUUFm73uZCi7Rw4lQ1OdVVVUUfaupLa5pJChESud5YcT4e4RPD4TDEDfs8lNz4iRcG0pPxKB7WVp4VYgwMaxXC4JJD1PHb2ibLN7f0oSSEQROdfGL4GEaOLN84rojiJiACAgwfhyPPFsIwhCFaCed1ujB8cmTbSSN4cA5hsMNnuvHJs4UFPYxRqthhK2Hj7KlBkWyADJ9FKryUtA4hAZnE23GZHq65I0KcMTxe8WYvjgIDTKe0M9gboxOjwTsvnpYuD6BtgKl+pZmzUdUoUVDmMhgr9N/cP2kRvjgCZVaBAAAAAElFTkSuQmCC",
        "postion": "Financial Advisor"
    }]
    return (
        <View style={styles.container}>
            <View style={styles.vertical}>
                <View style={[styles.horizontal]}>
                    <TouchableOpacity style={[styles.img_avt, styles.btn_avt]}>
                        <Image style={styles.img_avt} source={require('../assets/image/img_avt2.jpg')}></Image>
                    </TouchableOpacity>
                    <View style={styles.flex}>
                        <TouchableOpacity style={styles.btn_container}>
                            <Text style={styles.txt_myActivity}>My Activity</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.horizontal]}>
                        <View>
                            <TouchableOpacity style={styles.btn_icon}>
                                <Image style={styles.cs_icon} source={require('../assets/image/ic_vouchers.png')}></Image>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.btn_icon}>
                                <Image style={styles.cs_icon_mess} source={require('../assets/image/ic_mess.png')}></Image>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.btn_icon}>
                                <Image style={styles.cs_icon_setting} source={require('../assets/image/ic_setting.png')}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.txt_tilte}>Hello, Romina!</Text>
                    <TouchableOpacity style={styles.btn_container_thongbao}>
                        <Text style={styles.txt_thongbao}>Announcement</Text>
                        <View style={styles.horizontal}>
                            <Text style={[styles.txt_thongbaoS, styles.flex]}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit luctus libero ac vulputate.</Text>
                            <TouchableOpacity style={{ marginEnd: '3%' }}>
                                <Image source={require('../assets/image/ic_seemess.png')}></Image>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.txt_tilte_rv}>Recently viewed</Text>
                </View>

                <SafeAreaView style={styles.container}>
                    <ScrollView
                        horizontal={true}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        style={styles.scrollView}>
                        <TouchableOpacity style={[styles.scv_btn, styles.scv_imgContainer]}><Image style={styles.scv_img} source={require('../assets/image/img_Rv5.png')} /></TouchableOpacity>
                        <TouchableOpacity style={[styles.scv_btn, styles.scv_imgContainer]}><Image style={styles.scv_img} source={require('../assets/image/img_Rv1.png')} /></TouchableOpacity>
                        <TouchableOpacity style={[styles.scv_btn, styles.scv_imgContainer]}><Image style={styles.scv_img} source={require('../assets/image/img_Rv2.png')} /></TouchableOpacity>
                        <TouchableOpacity style={[styles.scv_btn, styles.scv_imgContainer]}><Image style={styles.scv_img} source={require('../assets/image/img_Rv3.png')} /></TouchableOpacity>
                        <TouchableOpacity style={[styles.scv_btn, styles.scv_imgContainer]}><Image style={styles.scv_img} source={require('../assets/image/img_Rv4.png')} /></TouchableOpacity>
                    </ScrollView>
                </SafeAreaView>
                <Text style={styles.txt_or}>My Orders</Text>
                <View style={[styles.horizontal]}>
                    <View style={{ width: '25%' }}>
                        <TouchableOpacity style={styles.btn_or}>
                            <Text style={styles.btn_text_or}>To Pay</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.flex}>
                        <TouchableOpacity style={styles.btn_or}>
                            <Text style={styles.btn_text_or}>To Recieve</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.flex}>
                        <TouchableOpacity style={styles.btn_or}>
                            <Text style={styles.btn_text_or}>To Review</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.horizontal_seeall]}>
                    <Text style={[styles.txt_newItems, styles.flex]}>New Items</Text>
                    <Text style={styles.txt_seeall}>See All</Text>
                    <TouchableOpacity style={{ marginStart: 10 }}>
                        <Image source={require('../assets/image/ic_seemess.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View>

                </View>


            </View>

        </View>
    )
}

export default Profile_1
const styles = StyleSheet.create({
    // container
    container: {
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    // cloumn
    vertical: {
        flexDirection: 'column',
    },
    horizontal: {
        flexDirection: 'row',
    },
    // flex
    flex: {
        flex: 1,
    },
    // custom avt
    img_avt: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginEnd: '3%',
        paddingStart: '1.4%',
        shadowOpacity: 0.5,
    },
    btn_avt: {
        backgroundColor: 'white',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
    },
    // custom button
    btn_container: {
        backgroundColor: '#004CFF',
        width: '65%',
        height: 35,
        borderRadius: 20,
        justifyContent: 'center',
        marginVertical: '4%',
    },
    txt_myActivity: {
        color: 'white',
        textAlign: 'center',
    },
    // custom icon
    btn_icon: {
        backgroundColor: '#F8F8F8',
        width: 38,
        height: 38,
        borderRadius: 20,
        marginStart: 10,
        justifyContent: 'center',
        marginVertical: '16%',
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    cs_icon: {
        width: 18,
        height: 18,
        marginStart: '25%'

    },
    cs_icon_mess: {
        width: 15,
        height: 10,
        marginStart: '25%'
    },
    cs_icon_setting: {
        width: 35,
        height: 35,
        marginStart: '10%'
    },
    // custom tilte
    txt_tilte: {
        fontSize: 35,
        lineHeight: 80,
        fontWeight: '700',
        fontFamily: 'raleway',
    },
    // custom thongBao
    btn_container_thongbao: {
        width: '100%',
        height: 70,
        backgroundColor: '#F8F8F8',
        borderRadius: 10,
        paddingStart: 14,
        paddingTop: 10,
    },
    txt_thongbao: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    txt_thongbaoS: {
        fontSize: 10,
        paddingEnd: '10%',
        paddingTop: '1%',
    },
    // custom Recently viewed
    txt_tilte_rv: {
        fontSize: 21,
        lineHeight: 70,
        fontWeight: '700',
        fontFamily: 'raleway',
    },
    // custom scrollView
    scrollView: {

    },
    text: {
        fontSize: 42,
    },
    scv_btn: {
        marginEnd: 10,
    },
    scv_img: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    scv_imgContainer: {
        backgroundColor: 'white',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        paddingStart: '1%',
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    // custom MyOrder
    txt_or: {
        fontWeight: 'bold',
        fontSize: 20, marginTop: '5%'
    },
    btn_or: {
        backgroundColor: '#E5EBFC',
        height: 35,
        borderRadius: 20,
        justifyContent: 'center',
        marginVertical: '4%',
        marginEnd: 5,
        marginTop: 10,
    },
    btn_text_or: {
        color: '#0042E0',
        textAlign: 'center',
    },
    // custom see all
    txt_seeall: {
        fontStyle: 'italic',
        fontWeight: '500',
        fontSize: 16,
        paddingTop: '1%',
    },
    horizontal_seeall: {
        flexDirection: 'row',
        marginTop: 20,
    },
    txt_newItems: {
        fontWeight: '700',
        fontSize: 20,
    },

});

