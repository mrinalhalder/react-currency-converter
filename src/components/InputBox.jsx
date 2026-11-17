import React from 'react';

function InputBox({
   label,
   amount,
   currency = "usd",
   onAmountChanged,
   onCurrencyChanged,
   amountDisable = false,
   currencyDisable = false,
   allCurrency = [],
   className = "",
}) {
   return (
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
         <div className="w-1/2">
            <label className="text-black/40 mb-2 inline-block">{label}</label>
           <input
               className = "outline-none w-full bg-transparent py-1.5"
               type = "number"
               placeholder = "Amount"
               value = { isNaN(amount) ? "" : amount } // Protected NaN
               onChange = {
                  (e) =>
                  onAmountChanged && onAmountChanged(e.target.value === "" ? "" : Number(e.target.value))
               }
               disabled = { amountDisable }
            />
         </div>
         <div className="w-1/2 flex flex-wrap justify-end text-right">
            <p className="text-black/40 mb-2 w-full">Currency Type</p>
            <select
               value={currency}
               onChange={(e) => onCurrencyChanged && onCurrencyChanged(e.target.value)}
               disabled={currencyDisable}
               className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
            >
               {allCurrency.map((currency) => (
                  <option key={currency} value={currency}>
                     {currency}
                  </option>
               ))}
            </select>
         </div>
      </div>
   );
}

export default InputBox;
