import { ColorProvider } from '../contexts/color';
import ColorBox from './ColorBox';
import SelectColors from './SelectColors';

const ColorPage = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default ColorPage;
