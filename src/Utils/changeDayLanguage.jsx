export const changeDayLanguage = (day) => {
  const daysInThai = {
    SUNDAY: "วันอาทิตย์ที่",
    MONDAY: "วันจันทร์ที่",
    TUESDAY: "วันอังคารที่",
    WEDNESDAY: "วันพุธที่",
    THURSDAY: "วันพฤหัสบดีที่",
    FRIDAY: "วันศุกร์ที่",
    SATURDAY: "วันเสาร์ที่",
  };

  return daysInThai[day.toUpperCase()] || day;
};
