import React from 'react';
import { TextInput } from 'react-native';

export const TextInputMoney = ({ value, ...res }) => {

    function formatMoney(number) {
        const numero = String(number)
            .replace(/\D/g, "")
            .replace(/^0+/, "");

        let counter = 1;
        let isCommaFound = "notFound"

        const formattedStringReversed = Array
            .from(numero.toString())
            .reverse()
            .reduce((acc, i, index, arr) => {
                if (counter == 2 &&
                    isCommaFound == "notFound" &&
                    (arr.length > 2)) {
                    acc = acc + i + ',';
                    isCommaFound = "found";
                    counter = 0;
                } else if (counter === 3 && (arr.length != (index + 1))) {
                    acc = acc + i + '.'
                    counter = 0;
                } else {
                    acc = acc + i
                }

                counter++
                return acc

            }, "")

        let formmatedNumber = Array.from(formattedStringReversed)
            .reverse().join("")

        if (formmatedNumber.length == 2) {
            formmatedNumber = "0," + formmatedNumber
        } else if (formmatedNumber.length == 1) {
            formmatedNumber = "0,0" + formmatedNumber
        }

        return formmatedNumber
    }

    return (
        <TextInput
            value={formatMoney(value)}
            {...res}
        />
    )
}
