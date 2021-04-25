import aphroditeInterface from 'react-with-styles-interface-aphrodite'
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';
import Theme from './Theme';

ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme(Theme);

export { css, withStyles, withStylesPropTypes, ThemedStyleSheet };
