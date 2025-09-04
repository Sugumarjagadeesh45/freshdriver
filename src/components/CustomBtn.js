import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomBtn = ({ onPress, btnText, btnStyle = {} }) => {
    return (
        <TouchableOpacity
            style={[styles.btnStyle, btnStyle]}
            onPress={onPress}
        >
            <Text style={styles.btnTextStyle}>{btnText}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btnStyle: {
        height: 48,
        backgroundColor: 'black',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnTextStyle: {
        fontSize: 16,
        textTransform: 'uppercase',
        color: 'white',
        fontWeight: 'bold'
    }
});

export default CustomBtn;




// import React, { Component } from 'react';
// import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';


// const CustomBtn = ({
//     onPress = () => {},
//     btnStyle = {},
//     btnText
// }) => {
//     return (
//      <TouchableOpacity
//      onPress={onPress}
//      style={{...styles.btnStyle, ...btnStyle}}
//      >
//          <Text>{btnText}</Text>
//      </TouchableOpacity>
//     );
// };

// const styles = StyleSheet.create({
//         btnStyle: {
//             height: 48,
//             justifyContent:'center',
//             alignItems:"center",
//             backgroundColor: 'white',
//             paddingHorizontal: 16,
//             borderWidth:1
//         }
// });


// export default CustomBtn;
