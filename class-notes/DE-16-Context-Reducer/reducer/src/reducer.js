//todo initialState baslangic degerlerini temsil eder const [loading,setLoading]=useState(false) gibi. 
export const initialState = {
  loading: false,
  dog: "",
  error: "",
};
//todo reducer adinda bir islev tanimlanir. İşlevin parametreleri state (mevcut durum) ve action (gerçekleştirilen eylem) olarak adlandırılır.
export const reducer = (state, action) => {
 
  switch (action.type) {
    case "START":
      return { ...state, dog: "", error: "", loading: true };
    case "SUCCESS":
      return { ...state, dog: action.payload, error: "", loading: false };
    case "FAIL":
      return { ...state, dog: "", error: action.payload, loading: false }
      default:
  }
};
 