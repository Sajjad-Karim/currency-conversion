import "./style.css";
import InputBox from "../inputBox";
const CurrencyConversion = () => {
  return (
    <>
      <div className="currency-conver-container">
        <InputBox />
        <div className="button-container">
          <button>Swap</button>
        </div>
        <InputBox />
      </div>
    </>
  );
};
export default CurrencyConversion;
