import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextInput, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const Container = styled.View`
  height: 45px;
  background-color: #eee;
  border-radius: 30px;
  width: 80%;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding-left: 25px;
  margin-right: 10px;
  margin-left: 20px;
  color: #f1f2f6;
`;

export const BoxButtonSearch = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  background-color: #eee;
  position: absolute;
  left: 0px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const SearchIcon = styled(Icon).attrs({
  name: 'search',
})`
  color: #bfbfbf;
  font-size: 25px;
`;