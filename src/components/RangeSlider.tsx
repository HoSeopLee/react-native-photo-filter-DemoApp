import {View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Rail, RailSelected, Thumb} from './Range_Component';
import Slider from 'rn-range-slider';

interface Props {
  low: number;
  EditLow: (dataLow: number) => void;
}

const RangeSlider = ({low = 0, EditLow = () => {}}: Props) => {
  const [lowData, setLowData] = useState(low);
  const renderThumb = useCallback(() => <Thumb />, [low]);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const handleValueChange = useCallback(
    (data_low: number) => {
      setLowData(data_low);
    },
    [low],
  );
  const handleValueChange2 = useCallback(
    (data_low: number) => {
      setLowData(data_low);
      EditLow(data_low);
    },
    [low],
  );

  return (
    <View style={{marginTop: 10}}>
      <Slider
        min={0}
        max={100}
        step={1}
        low={lowData}
        disableRange={true}
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        selectionColor="#3df"
        blankColor="#f618"
        onValueChanged={handleValueChange}
        onTouchEnd={handleValueChange2}
        style={{width: '100%'}}
      />
    </View>
  );
};

export default React.memo(RangeSlider);
