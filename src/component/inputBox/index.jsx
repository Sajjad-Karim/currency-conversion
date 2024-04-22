import "./style.css";
const InputBox = () => {
  return (
    <>
      <div className="InputBox-container">
        <div className="amount">
          <label className="label">From</label>
          <input type="number" placeholder="Amount" />
        </div>
        <div className="select-currency">
          <p className="label">Currency Type</p>
          <select className="select">
            <option>Usd</option>
          </select>
        </div>
      </div>
    </>
  );
};
export default InputBox;
