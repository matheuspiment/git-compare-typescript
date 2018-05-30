import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

interface IProps {
  withError: boolean;
}

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<IProps>;

export { css, injectGlobal, keyframes, ThemeProvider, IProps };
export default styled;
