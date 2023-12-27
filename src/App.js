import "./App.css";

function App() {
  let input = document.getElementById("num-input");
  let buttons = document.querySelectorAll("button");

  let string = "";
  let arr = Array.from(buttons);
  arr.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (e.target.innerHTML == "=") {
        string = eval(string);
        input.value = string;
      } else if (e.target.innerHTML == "AC") {
        string = "";
        input.value = string;
      } else if (e.target.innerHTML == "DEL") {
        string = string.substring(0, string.length - 1);
        input.value = string;
      } else {
        string += e.target.innerHTML;
        input.value = string;
      }
    });
  });

  return (
    <>
      <h1>Calculator</h1>
      <div className="calculator">
        <input type="text" id="num-input" placeholder="0" readOnly />
        <div>
          <button className="button operator-Btn">AC</button>
          <button className="button operator-Btn">DEL</button>
          <button className="button operator-Btn">%</button>
          <button className="button operator-Btn">/</button>
        </div>
        <div>
          <button className="button num-Btn">7</button>
          <button className="button num-Btn">8</button>
          <button className="button num-Btn">9</button>
          <button className="button operator-Btn">*</button>
        </div>
        <div>
          <button className="button num-Btn">4</button>
          <button className="button num-Btn">5</button>
          <button className="button num-Btn">6</button>
          <button className="button operator-Btn">-</button>
        </div>
        <div>
          <button className="button num-Btn">1</button>
          <button className="button num-Btn">2</button>
          <button className="button num-Btn">3</button>
          <button className="button operator-Btn">+</button>
        </div>

        <div>
          <button className="button num-Btn">00</button>
          <button className="button num-Btn">0</button>
          <button className="button num-Btn">.</button>
          <button className="button equal-Btn">=</button>
        </div>
      </div>
    </>
  );
}

export default App;
