import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SelectCountry } from 'react-native-element-dropdown';

const local_data = [
  {
    value: '1',
    lable: 'Country 1',
    image: require('../../../assets/image/vn.png'),
  },
  {
    value: '2',
    lable: 'Country 2',
    image: require('../../../assets/image/England.png'),
  },
  {
    value: '3',
    lable: 'Country 3',
    image: require('../../../assets/image/England.png'),
  },
  {
    value: '4',
    lable: 'Country 4',
    image: require('../../../assets/image/England.png'),
  },
  {
    value: '5',
    lable: 'Country 5',
    image: require('../../../assets/image/England.png'),
  },
];

const SelectCountryScreen = _props => {
  const [country, setCountry] = useState('1');

  return (
    <SelectCountry
      style={styles.dropdown}
      selectedTextStyle={styles.selectedTextStyle}
      placeholderStyle={styles.placeholderStyle}
      imageStyle={styles.imageStyle}
      iconStyle={styles.iconStyle}
      maxHeight={200}
      value={country}
      data={local_data}
      valueField="value"
      
      imageField="image"
      placeholder="Select country"
      searchPlaceholder="Search..."
      onChange={e => {
        setCountry(e.value);
      }}
    />
  );
};

export default SelectCountryScreen;

const styles = StyleSheet.create({
  dropdown: {
    margin: 1,
    height: 50,
    width: 80,
    backgroundColor: '#f8f8f8',
    borderRadius: 22,
    paddingHorizontal: 8,
  },
  imageStyle: {
    width: 30,
    height: 24,
    // borderRadius: 12,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});