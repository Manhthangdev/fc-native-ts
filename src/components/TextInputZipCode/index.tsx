import React from 'react';
import { TextInput } from 'react-native';

export const TextInputZipCode = ({ value, ...res }) => {

    function mCEP(cep) {

        if (cep.length <= 10) {
            cep = cep.replace(/\D/g, "")
            cep = cep.replace(/^(\d{2})(\d)/, "$1.$2")
            cep = cep.replace(/\.(\d{3})(\d)/, ".$1-$2")
        } else {
            return cep.length - 1
        }
        return cep
    }

    return (
        <TextInput
            value={mCEP(value)}
            {...res}
        />
    )
}