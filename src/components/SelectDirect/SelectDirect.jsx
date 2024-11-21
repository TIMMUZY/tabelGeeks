import React, { useState } from 'react';
import classes from './SelectDirect.module.scss';
import selectIcon from '../../assets/icons/selectIcon.svg';
import closeBtn from '../../assets/icons/closeBtn.svg';

const SelectDirect = ({ isActive, onToggle, title = '', startOption = '', options = [] }) => {
  const [selectedOption, setSelectedOption] = useState(startOption);

  const handleToggle = () => {
    const newState = !isActive;
    onToggle(newState); // Передача состояния открытости в родительский компонент
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    onToggle(false); // Закрыть при выборе
  };

  return (
    <div className={classes.SelectDirectContainer}>
      <div className={classes.SelectDirect} onClick={handleToggle}>
        <p className={classes.text}>{title}</p>
        <img src={selectIcon} alt='selectIcon' />
      </div>
      {isActive && (
        <div className={classes.SelectOptions}>
          <div className={classes.closeSelect}>
            <span className={classes.option}>{selectedOption}</span>
            <img onClick={handleToggle} className={classes.closeBtn} src={closeBtn} alt='close' />
          </div>
          {options.map((option, index) => (
            <p key={index} className={classes.option} onClick={() => handleSelectOption(option)}>
              {option}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectDirect;
