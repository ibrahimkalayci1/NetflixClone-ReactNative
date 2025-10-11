import React from 'react';
import { TabbarIconProps } from '../../models/ui/tabbarIconProps';
import { ArrowCircleDown2, Home2, SearchNormal,  VideoPlay } from 'iconsax-react-nativejs';
import { DOWNLOADS, HOME, MYLIST, SEARCH } from '../../utils/routes';

const TabbarIcon: React.FC<TabbarIconProps> = ({
  name,
  color,
  size,
  focused,
}) => {
  switch (name) {
    case HOME:
      return <Home2 size={size} color={color}  variant={focused ? "Bold" : "Outline" } />;
    case MYLIST:
      return <VideoPlay size={size} color={color} variant={focused ? "Bold" : "Outline" } />;
    case SEARCH:
      return <SearchNormal size={size} color={color} variant={focused ? "Bold" : "Outline" } />;
    case DOWNLOADS:
      return <ArrowCircleDown2 size={size} color={color} variant={focused ? "Bold" : "Outline" } />;
  }
};



export default TabbarIcon;
