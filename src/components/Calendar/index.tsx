import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { CalendarList } from 'react-native-calendars';

export const currentDate = () => {
  let date: any = new Date().getDate();
  let month: any = new Date().getMonth() + 1;
  if (date < 10) {
    date = '0' + date;
  }
  if (month < 10) {
    month = '0' + month;
  }
  let year = new Date().getFullYear();
  return `${year}-${month}-${date}`;
};

const _renderHeader = (date: any) => {
  const Date = date.slice(7, 16);
  return (
    <View style={{ width: '100%', flexDirection: 'row' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>
        {Date}
      </Text>
    </View>
  );
};

export const Choose2Days = ({
  setVisibleLich,
  setChonHaiNgay,
  colors
}: any): JSX.Element => {
  const today = currentDate();
  const [listDays, setList] = useState<any>({});
  const [twoDays, setTwoDay] = useState<any>([]);

  const handleSubmitTwoDays = () => {
    setChonHaiNgay({
      fromDate: twoDays[0],
      toDate: twoDays[1],
    });
    setVisibleLich(false);
  };

  const handleAddDay = (day: any) => {
    setTwoDay([...twoDays, day]);
    setList({ ...listDays, [day]: { color: 'red', selected: true } });
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setVisibleLich(false)}
        style={{
          backgroundColor: 'rgba(0,0,0,0.7)',
          flex: 1,
        }}
      />
      <View style={{ position: 'absolute', bottom: 0 }}>
        <CalendarList
          markingType={'custom'}
          markedDates={
            listDays

          }
          current={today}
          onDayPress={
            (day) =>
              twoDays.length === 2
                ? (setVisibleLich(false), Alert.alert('Vui lòng chọn lại ngày'))
                : handleAddDay(day.dateString)

          }
          pagingEnabled={true}
          monthFormat={'yyyy MM'}
          hideArrows={true}
          hideExtraDays={true}
          firstDay={0}
          horizontal={true}
          onPressArrowLeft={(subtractMonth) => subtractMonth()}
          onPressArrowRight={(addMonth) => addMonth()}
          disableArrowLeft={false}
          disableArrowRight={false}
          enableSwipeMonths={true}
          disableAllTouchEventsForDisabledDays={true}
          renderHeader={(date) => _renderHeader(date.toString())}
        />
        <View
          style={{
            backgroundColor: '#fff',
          }}>
          {twoDays.length === 1 && (
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Text
                style={{ textAlign: 'center', color: 'red', marginBottom: 10 }}>
                chọn thêm 1 ngày bất kì để kết thúc !
              </Text>
            </View>
          )}
          {twoDays.length === 0 && (
            <Text
              style={{ textAlign: 'center', color: 'red', marginBottom: 10 }}>
              Mời bạn chọn 2 ngày bất kì !
            </Text>
          )}
          {twoDays.length > 1 && (
            <TouchableOpacity
              onPress={() => handleSubmitTwoDays()}
              style={{
                alignSelf: 'center',
                paddingHorizontal: 50,
                paddingVertical: 10,
                borderRadius: 10,
                backgroundColor: colors.PRIMARY,
                marginBottom: 10,
              }}>
              <Text style={{ color: '#fff' }}>OK</Text>
            </TouchableOpacity>
          )}
        </View>
        <View
          style={{
            backgroundColor: '#fff',
          }}>
          <TouchableOpacity
            onPress={() => setVisibleLich(false)}
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 10,
            }}>
            <Text style={{ color: 'grey' }}>Quay lại</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Choose2Days;
