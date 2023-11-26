import React, { useState } from 'react';

function InputBox({
    label,
    options,
    obj,
    amount,
    currency,
    onAmountChange,
    onCurrencyChange,
    }) {
  return (

    <div className={`bg-gray-400 p-3 rounded-lg text-lg flex`}>
      <div className="w-1/2">
        <label htmlFor="amountInput" className="text-black/80 mb-2 inline-block">
          {label}
        </label>
        <input
          className="text-black/80 outline-none w-full  py-1.5"
          id="amountInput"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/80 mb-2 w-full">Currency Type</p>
        <select
          className="text-black/80 rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={currency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            >
          {options.map((currency) => (
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
