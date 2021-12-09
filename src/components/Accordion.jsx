import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { openAccordion, disabledComponent } from "../app/actions/action";

const Accordion = () => {
  const listData = useSelector((state) => state.list.list);
  const isDisabled = useSelector((state) => state.list.isDisabled);
  const dispatch = useDispatch();

  const clickEnable = () => {
    dispatch(disabledComponent(false));
  }

  const handleClick = (index) => {
    dispatch(openAccordion(index));
  }

  return (
    <div className="container">
      <input type="radio" id="accord" className="radio-input" name="option" onChange={clickEnable}/>
      <label className="label">
        Enable component in this section only if this option selected
      </label>

      <div className="accordion">
        {listData.map((item, index) => {
          return (
            <div className="item" key={index}>
              <div className="inner">
                <p className="text">{item.title}</p>
                <button className="btn" onClick={() => handleClick(index)} disabled={ isDisabled === null ? true : isDisabled }>
                  <div className="triangle-bottom"></div>
                </button>
              </div>
              <div className={!item.active ? "content" : "showContent"}>
                <p>{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
