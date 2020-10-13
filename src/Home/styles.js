import styled from 'styled-components/native';

import {Dimensions} from 'react-native';
const {height} = Dimensions.get('screen');

export const Container = styled.View`
    justify-content: center;
    align-items: center;
`;

export const New = styled.View`
    background-color: #fff;
    width: 95%;
    border-radius: 8px;
    padding: 15px;
    margin: 15px
    position: relative;
    marginTop: 0px
`;