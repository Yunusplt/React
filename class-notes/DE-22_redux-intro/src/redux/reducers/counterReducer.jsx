const counterReducer = (state = { counterSonuc: 0 }, action1) => {
  console.log(action1);
  console.log(state);
  switch (action1.type) {
    case "ARTTIR":
      return {
        counterSonuc: state.counterSonuc + 1,
        text1: action1.payload1, //* mevcut state e text1 valuesunu da eklemis olduk.
      };
    case "AZALT":
      return {
        counterSonuc: state.counterSonuc - 1,
      };

    case "RESET":
      return {
        counterSonuc: 0,
        text1: action1.payload1,
      };

    default:
      return state;
    //todo  arttir butonuna basilmadan önce baslangic degerlerinin sayfaya bastirilmasi icin gerekli default state
  }
};

export default counterReducer;
