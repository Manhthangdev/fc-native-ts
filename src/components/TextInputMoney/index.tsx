import React from 'react';
import { TextInput } from 'react-native';

export const TextInputMoney = ({ value, ...res }) => {

    function formatMoney(number: any): string {
        const numero = String(number)
            .replace(/\D/g, "")
            .replace(/^0+/, "");

        let counter = 1;
        let isCommaFound = false;

        const formattedStringReversed = Array.from(numero.toString())
            .reverse()
            .reduce((acc, i, index, arr) => {
                if (counter === 3 && !isCommaFound && arr.length > 3) {
                    acc = acc + i + ".";
                    isCommaFound = true;
                    counter = 0;
                } else if (counter === 3 && arr.length !== index + 1) {
                    acc = acc + i + ".";
                    counter = 0;
                } else {
                    acc = acc + i;
                }

                counter++;
                return acc;
            }, "");

        let formattedNumber = Array.from(formattedStringReversed)
            .reverse()
            .join("");

        if (formattedNumber.length === 2) {
            formattedNumber = "0." + formattedNumber;
        } else if (formattedNumber.length === 1) {
            formattedNumber = "0.0" + formattedNumber;
        }

        return formattedNumber;
    }

    return (
        <TextInput
            value={formatMoney(value)}
            {...res}
        />
    )
}
