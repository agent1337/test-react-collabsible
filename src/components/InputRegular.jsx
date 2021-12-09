import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { disabledComponent } from "../app/actions/action";

const InputRegular = () => {
  const isDisabled = useSelector((state) => state.list.isDisabled);
  const dispatch = useDispatch();

  const clickEnable = () => {
    dispatch(disabledComponent(true))
  }

  return (
    <div className="container">
      <input type="radio" id="input" className="radio-input" name="option" onChange={clickEnable}/>
      <label className="label">
        This is disabled option. Once it enabled - enable the input in section
      </label>

      <div className="block">
        <p>Label for input</p>
        <input type="text" className="input" disabled={ isDisabled === null ? true : !isDisabled }/>
      </div>
    </div>
  );
};

export default InputRegular;
