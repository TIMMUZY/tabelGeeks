import React, { useState } from 'react'
import classes from './Header.module.scss'
import Logo from '../../assets/image/Logo.png'
import selectIcon from '../../assets/icons/selectIcon.svg'
import SelectDirect from '../SelectDirect/SelectDirect'

const Header = ({ onToggleBlur }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [dateValue, setDateValue] = useState('')
  const [activeSelect, setActiveSelect] = useState(null)

  const handleInputChange = (e) => {
    setDateValue(e.target.value)
  }

  const handleBlur = () => {
    if (!dateValue) {
      setIsEditing(false)
    }
  }

  const handleToggleSelect = (id, newState) => {
    const newActiveSelect = newState ? id : null
    setActiveSelect(newActiveSelect)
    onToggleBlur(newState) // Вызов функции для изменения состояния блюра
  }

  return (
    <div className={classes.header}>
      <div className={classes.headerFlex}>
        <img className={classes.logo} src={Logo} alt='logo' />
        <div className={classes.selects}>
          <h1 className={classes.title}>ВСЕ НАПРАВЛЕНИЯ</h1>
          <div className={classes.allSelect}>
            <SelectDirect
              id='direction'
              title='НАПРАВЛЕНИЕ'
              startOption='Frontend'
              options={['UX/UI Design', 'Backend', 'Demoday', 'Пробный урок', 'Детский']}
              isActive={activeSelect === 'direction'}
              onToggle={(newState) => handleToggleSelect('direction', newState)}
              onToggleBlur={onToggleBlur}
            />
            <SelectDirect
              id='teacher'
              title='ПРЕПОДОВАТЕЛЬ'
              startOption='Тынчтык'
              options={['Кубаныч', 'Сыймык', 'Ислам', 'Жумабек', 'Бекмырза']}
              isActive={activeSelect === 'teacher'}
              onToggle={(newState) => handleToggleSelect('teacher', newState)}
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
              id='audience'
              title='АУДИТОРИЯ'
              startOption='1-аудитория'
              options={['2-аудитория', '3-аудитория', '4-аудитория', '5-аудитория', 'Коворкинг']}
              isActive={activeSelect === 'audience'}
              onToggle={(newState) => handleToggleSelect('audience', newState)}
              onToggleBlur={onToggleBlur}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
