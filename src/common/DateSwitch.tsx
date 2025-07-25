import React, { useState } from "react";
import {
  Modal,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { Calendar } from "react-native-calendars";
import { CustomButton, CustomText } from "@src/components/shared";
import { colors } from "@src/resources/color/color";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";

export const DateSwitch: React.FC = () => {
  const [calendarVisible, setCalendarVisible] = useState(false);

  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split("T")[0] // today's date in YYYY-MM-DD
  );

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate(); // last day of the month
  };

  const onAdd = () => {
    if (!selectedDate) return;

    const date = new Date(selectedDate);
    const maxDay = getDaysInMonth(date.getFullYear(), date.getMonth());

    if (date.getDate() < maxDay) {
      date.setDate(date.getDate() + 1);
    } else {
      // go to 1st of next month
      date.setMonth(date.getMonth() + 1);
      date.setDate(1);
    }

    setSelectedDate(date.toISOString().split("T")[0]);
  };

  const onSubtract = () => {
    if (!selectedDate) return;

    const date = new Date(selectedDate);

    if (date.getDate() > 1) {
      date.setDate(date.getDate() - 1);
    } else {
      // move to last day of previous month
      date.setMonth(date.getMonth() - 1);
      const newMaxDay = getDaysInMonth(date.getFullYear(), date.getMonth());
      date.setDate(newMaxDay);
    }

    setSelectedDate(date.toISOString().split("T")[0]);
  };

  const formattedDisplay = selectedDate
    ? `${new Date(selectedDate)
        .getDate()
        .toString()
        .padStart(2, "0")}/${new Date(selectedDate)
        .getFullYear()
        .toString()
        .slice(-2)}`
    : "--/--";

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.controlBtn} onPress={onSubtract}>
            <MaterialIcons
              name='keyboard-arrow-left'
              size={moderateScale(20)}
              color={"#9C9C9C"}
            />
          </TouchableOpacity>
          <View style={styles.numberContainer}>
            <CustomText type='medium' size={12} lightGrey>
              {formattedDisplay}
            </CustomText>
          </View>
          <TouchableOpacity style={styles.controlBtn} onPress={onAdd}>
            <MaterialIcons
              name='keyboard-arrow-right'
              size={moderateScale(20)}
              color={"#9C9C9C"}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => setCalendarVisible(!calendarVisible)}>
          <Feather
            name='calendar'
            size={moderateScale(20)}
            color={colors.white}
          />
        </TouchableOpacity>
      </View>

      <View>
        <Modal
          visible={calendarVisible}
          transparent
          animationType='slide'
          onRequestClose={() => setCalendarVisible(false)}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}>
            <View
              style={{
                backgroundColor: "#242222",
                width: "90%",
                borderRadius: 12,
              }}>
              <Calendar
                onDayPress={(day) => {
                  setSelectedDate(day.dateString);
                }}
                style={{
                  borderRadius: 10,
                }}
                markedDates={{
                  [selectedDate]: {
                    customStyles: {
                      container: {
                        backgroundColor: colors.purple,
                        borderRadius: 100,
                      },
                      text: {
                        color: "#ffffff",
                        fontWeight: "bold",
                      },
                    },
                  },
                }}
                markingType={"custom"}
                theme={{
                  backgroundColor: "#242222",
                  calendarBackground: "#242222",
                  textSectionTitleColor: "#ccc",
                  selectedDayBackgroundColor: "red",
                  selectedDayTextColor: "#fff",
                  todayTextColor: colors.purple,
                  dayTextColor: colors.lightGrey,
                  textDisabledColor: "#444444",
                  monthTextColor: "#fff",
                  arrowColor: "#fff",
                  textDayFontWeight: "500",
                  textMonthFontWeight: "bold",
                  textDayFontSize: moderateScale(15),
                  textMonthFontSize: 18,
                  textDayHeaderFontSize: 14,
                }}
              />
            </View>
            <CustomButton
              title='X'
              textType='semi-bold'
              textSize={13}
              purple
              textWhite
              buttonType='Solid'
              onPress={() => setCalendarVisible(false)}
              btnStyle={styles.closeBtn}
            />
          </View>
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: moderateScale(10),
  },
  container: {
    paddingVertical: moderateScale(1),
    paddingHorizontal: moderateScale(1),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#242222",
    borderRadius: moderateScale(6),
  },
  controlBtn: {
    paddingVertical: moderateScale(2),
    paddingHorizontal: moderateScale(4),
  },
  numberContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: moderateScale(3),
    paddingHorizontal: moderateScale(10),
  },
  closeBtn: {
    width: Platform.OS === "ios" ? DVW(12) : DVW(13),
    height: Platform.OS === "ios" ? DVH(5.5) : DVH(6.5),
    borderRadius: moderateScale(100),
    marginVertical: moderateScale(20),
    justifyContent: "center",
    alignItems: "center",
  },
});
