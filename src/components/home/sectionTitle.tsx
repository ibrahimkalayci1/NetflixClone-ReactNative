import React, { memo } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { SectionTitleProps } from '../../models/ui/sectionTitleProps';

const SectionTitle: React.FC<SectionTitleProps> = ({ title , onPress}) => {

// console.log("SectionTitle", title)

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>
        {title}
      </Text>
      <TouchableOpacity onPress={onPress} >
        <Text style={{ fontSize: 16, color: 'yellow', fontWeight: '500' }}>
          See All
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});

export default memo(SectionTitle);
