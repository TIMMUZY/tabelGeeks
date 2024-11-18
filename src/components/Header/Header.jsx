import React, { useState } from 'react'
import classes from './Header.module.scss'
import Logo from '../../assets/image/Logo.png'
import selectIcon from '../../assets/icons/selectIcon.svg'
import SelectDirect from '../SelectDirect/SelectDirect'

const Header = ({ onToggleBlur }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [dateValue, setDateValue] = useState('')

  const handleInputChange = (e) => {
    setDateValue(e.target.value)
  }

  const handleBlur = () => {
    if (!dateValue) {
      setIsEditing(false)
    }
  }
  
  return (
    <div className={classes.header}>
      <div className={classes.headerFlex}>
        <img className={classes.logo} src={Logo} alt='logo' />
        <div className={classes.selects}>
          <h1 className={classes.title}>ВСЕ НАПРАВЛЕНИЯ</h1>
          <div className={classes.allSelect}>
            <SelectDirect
              title='НАПРАВЛЕНИЕ'
              startOption='Frontend'
              options={['UX/UI Design', 'Backend', 'Demoday', 'Пробный урок', 'Детский']}
              onToggleBlur={onToggleBlur}
            />
            <SelectDirect
              title='ПРЕПОДОВАТЕЛЬ'
              startOption='Жумабек'
              options={['Кубаныч', 'Сыймык', 'Ислам', 'Тынчтык', 'Бекмырза']}
              onToggleBlur={onToggleBlur}
            />
            <div className={classes.dateInputContainer}>
              {!isEditing ? (
                <div className={classes.dateContainer}>
                  <div className={classes.dateLabel} onClick={() => setIsEditing(true)}>
                    <div className={classes.flex}>
                      <p className={classes.title}>ДАТА</p>
                      <img src={selectIcon} alt='selectIcon' />
                    </div>
                  </div>
                </div>
              ) : (
                <input
                  type='date'
                  className={classes.dateInput}
                  placeholder='ДД/ММ/ГГГГ'
                  value={dateValue}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  autoFocus
                />
              )}
            </div>

            <SelectDirect
              title='АУДИТОРИЯ'
              startOption='1-аудитория'
              options={['2-аудитория', '3-аудитория', '4-аудитория', '5-аудитория', 'Коворкинг']}
              onToggleBlur={onToggleBlur}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
