import React from 'react'
import classes from './Header.module.scss'
import Logo from '../../assets/image/Logo.png'
import SelectDirect from '../SelectDirect/SelectDirect'

const Header = ({ onToggleBlur }) => {
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
            <SelectDirect title='ДАТА' startOption='дд/мм/гггг' options={[]} onToggleBlur={onToggleBlur} />
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
