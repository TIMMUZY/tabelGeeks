import React, { useState } from 'react'
import classes from './SelectDirect.module.scss'
import selectIcon from '../../assets/icons/selectIcon.svg'
import closeBtn from '../../assets/icons/closeBtn.svg'

const SelectDirect = ({ onToggleBlur, title = '', startOption = '', options = [] }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [setSelectedOption] = useState(startOption)


  const toggleSelect = () => {
    const newState = !isOpen
    setIsOpen(newState)
    onToggleBlur(newState) 
  }

  const handleSelectOption = (option) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <div className={classes.SelectDirectContainer}>
      <div className={classes.SelectDirect} onClick={toggleSelect}>
        <p className={classes.text}>{title}</p>
        <img src={selectIcon} alt='selectIcon' />
      </div>
      {isOpen && (
        <div className={classes.SelectOptions}>
          <div className={classes.closeSelect}>
            <span className={classes.option}>{startOption}</span>
            <img onClick={toggleSelect} className={classes.closeBtn} src={closeBtn} alt='close' />
          </div>
          {options.map((option, index) => (
            <p key={index} className={classes.option} onClick={() => handleSelectOption(option)}>
              {option}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

export default SelectDirect
