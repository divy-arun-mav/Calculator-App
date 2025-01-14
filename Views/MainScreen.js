import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { styles } from './MainScreenStyles';

const operators = ['+', '-', 'x', '/', '%', '.'];

const MainScreen = () => {
    const [bracket, setBracket] = useState(0);
    const [value, setValue] = useState('0');

    const isOperator = (char) => operators.includes(char);

    const handlePress = (val) => {
        if (val === 'AC') {
            setValue('0');
            setBracket(0);
        } else if (val === '=') {
            try {
                const expression = value.replace(/x/g, '*');
                const result = eval(expression); 
                setValue(String(result));
            } catch {
                setValue('Error');
            }
        } else if (val === 'C') {
            setValue(value.length > 1 ? value.slice(0, -1) : '0');
        } else if (val === '()') {
            if (value === '0' || isOperator(value.slice(-1))) {
                setValue(value + '(');
                setBracket(bracket + 1);
            } else if (bracket > 0) {
                setValue(value + ')');
                setBracket(bracket - 1);
            }
        } else {
            if (value === '0') {
                setValue(isNaN(val) ? '0' + val : val);
            } else if (isOperator(val)) {
                if (!isOperator(value.slice(-1))) {
                    setValue(value + val);
                }
            } else {
                setValue(value + val);
            }
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.main_display}>
                <Text style={styles.display_text}>{value}</Text>
            </ScrollView>
            <View style={styles.keypad}>
                {[
                    ['AC', '()', '%', '/'],
                    ['7', '8', '9', 'x'],
                    ['4', '5', '6', '-'],
                    ['1', '2', '3', '+'],
                    ['0', '.', 'C', '=']
                ].map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.keypad_row}>
                        {row.map((btn, btnIndex) => (
                            <Pressable key={btnIndex} onPress={() => handlePress(btn)}>
                                <View style={btn === 'AC' || btn === 'C' ? styles.btn1_outer : btn === '=' ? styles.btn2_outer : operators.includes(btn) ? styles.btn2_outer : btn === '.' ? styles.btn_outer : styles.btn_outer}>
                                    <Text style={btn === 'AC' || btn === 'C' ? styles.bg1_btn : btn === '=' ? styles.bg2_btn : operators.includes(btn) ? styles.bg2_btn : btn === '.' ? styles.bg2_btn : styles.bg_btn}>
                                        {btn}
                                    </Text>
                                </View>
                            </Pressable>
                        ))}
                    </View>
                ))}
            </View>
        </View>
    );
};

export default MainScreen;