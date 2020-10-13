import React from 'react';

import {Dimensions, View, Text} from 'react-native';
import {Input, Container, BoxButtonSearch, SearchIcon} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SearchBar() {
  const {width} = Dimensions.get('window');


  return (
    <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between"}}>
        <Container>
            <Input placeholder="Buscar"/>
            <BoxButtonSearch>
                <SearchIcon />
            </BoxButtonSearch>
        </Container>
        <Icon name="add-circle" size={50} color="red"/>
    </View>
  );
}