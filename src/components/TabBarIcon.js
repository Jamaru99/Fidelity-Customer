import * as React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors } from '@utils';

export default function TabBarIcon(props) {
  return (
    <MaterialCommunityIcons
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? colors.tabIconSelected : colors.tabIconDefault}
    />
  );
}
