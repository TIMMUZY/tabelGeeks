import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"; 
import classes from "./WeekList.module.scss"; 

const lessonData = {
  title: "UX/UI design",
  month: "2-месяц",
  teacher: "Салиев Жумабек",
  time: "17:00 до 19:00",
  room: "5-аудитория"
};

const lessonDate = {
  title: "Frontend",
  month: "1-месяц",
  teacher: "Кубаныч",
  time: "17:00 до 19:00",
  room: "2-аудитория"
};

const schedule = [
  [lessonData, lessonDate, lessonData, lessonDate, lessonData, lessonDate, lessonData],
  [lessonDate, lessonData, lessonDate, lessonData, lessonDate, lessonData, lessonDate],
  [lessonData, lessonDate, lessonData, lessonDate, lessonData, lessonDate, lessonData],
  [lessonDate, lessonData, lessonDate, lessonData, lessonDate, lessonData, lessonDate],
];

export default function WeekList() {
    const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('week'); 

  const goToWeekView = () => {
    setActiveTab('week');
    navigate('/weeklist');

  };

  const goToMonthView = () => {
    setActiveTab('month');
    navigate('/monthlist');

  };

  return (
    <div className={classes.scheduleContain}>
      <div className={classes.titleContainer}>
        <h1 className={classes.scheduleTitle}>Ноябрь 2024</h1>
        <div className={classes.toggleSwitch}>
          <div
            className={`${classes.toggleOption} ${activeTab === 'week' ? classes.active : ''}`}
            onClick={goToWeekView}
          >
            Неделя
          </div>
          <div
            className={`${classes.toggleOption} ${activeTab === 'month' ? classes.active : ''}`}
            onClick={goToMonthView}
          >
            Месяц
          </div>
        </div>
      </div>

      <div className={classes.scheduleContainer}>
        <table className={classes.scheduleTable}>
          <thead>
            <tr className={classes.scheduleHeaderRow}>
              <th className={classes.scheduleDayHeader}>Пн</th>
              <th className={classes.scheduleDayHeader}>Вт</th>
              <th className={classes.scheduleDayHeader}>Ср</th>
              <th className={classes.scheduleDayHeader}>Чт</th>
              <th className={classes.scheduleDayHeader}>Пт</th>
              <th className={classes.scheduleDayHeader}>Сб</th>
              <th className={classes.scheduleDayHeader}>Вс</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((row, rowIndex) => (
              <tr key={rowIndex} className={classes.scheduleRow}>
                {row.map((lesson, cellIndex) => (
                  <td key={cellIndex} className={classes.scheduleLesson}>
                    <h3 className={classes.lessonTitle}>{lesson.title}</h3>
                    <h3 className={classes.lessonMonth}>{lesson.month}</h3>
                    <h3 className={classes.lessonTeacher}>{lesson.teacher}</h3>
                    <p className={classes.lessonTime}>{lesson.time}</p>
                    <p className={classes.lessonRoom}>{lesson.room}</p>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
