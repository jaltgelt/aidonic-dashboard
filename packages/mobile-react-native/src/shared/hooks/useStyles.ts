import { useMemo } from 'react';
import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

type Style = ViewStyle | TextStyle | ImageStyle;

export const useStyles = () => {
  const composeStyles = useMemo(() => {
    return (...styles: (Style | undefined | null | false)[]): Style => {
      return styles.reduce<Style>((composed, style) => {
        if (style && typeof style === 'object') {
          return { ...composed, ...style };
        }
        return composed;
      }, {});
    };
  }, []);

  const conditionalStyle = useMemo(() => {
    return (condition: boolean, trueStyle: Style, falseStyle?: Style): Style => {
      return condition ? trueStyle : (falseStyle || {});
    };
  }, []);

  return {
    composeStyles,
    conditionalStyle,
  };
};
