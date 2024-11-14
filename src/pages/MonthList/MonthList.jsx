import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import classes from './MonthList.module.scss'; // Import the correct stylesheet

const lessonData = {
    title: "UX/UI design Урок...",
    month: "UX/UI design Пробный...",
    teacher: "Front-end урок...",
    time: "Front-end Пробный...",
    room: "Back-end Урок"
};

const schedule = [
    [lessonData, lessonData, lessonData, lessonData, lessonData, lessonData, lessonData],
    [lessonData, lessonData, lessonData, lessonData, lessonData, lessonData, lessonData],
    [lessonData, lessonData, lessonData, lessonData, lessonData, lessonData, lessonData],
    [lessonData, lessonData, lessonData, lessonData, lessonData, lessonData, lessonData],
];

const MonthList = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('month'); // State to track active tab

    // Function to navigate to WeekList page
    const goToWeekList = () => {
        setActiveTab('week');
        navigate('/weeklist');
    };

    // Function to navigate to MonthList page
    const goToMonthList = () => {
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
                        onClick={goToWeekList}
                    >
                        Неделя
                    </div>
                    <div 
                        className={`${classes.toggleOption} ${activeTab === 'month' ? classes.active : ''}`} 
                        onClick={goToMonthList}
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
};

export default MonthList;
