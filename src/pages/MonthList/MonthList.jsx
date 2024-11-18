import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from '../../components/Modal/Modal';
import classes from './MonthList.module.scss';

const lessonData = {
    title: "UX/UI design",
    month: "UX/UI design",
    teacher: "Front-end",
    time: "Front-end",
    room: "Back-end"
};

const schedule = [
    [lessonData, lessonData, lessonData, lessonData, lessonData, lessonData, lessonData],
    [lessonData, lessonData, lessonData, lessonData, lessonData, lessonData, lessonData],
    [lessonData, lessonData, lessonData, lessonData, lessonData, lessonData, lessonData],
    [lessonData, lessonData, lessonData, lessonData, lessonData, lessonData, lessonData],
];

const MonthList = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('month');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedLesson, setSelectedLesson] = useState(null);

    const openModal = (lesson) => {
        setSelectedLesson(lesson);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedLesson(null);
    };
    const goToWeekList = () => {
        setActiveTab('week');
        navigate('/weeklist');
    };

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
                                    <td key={cellIndex} className={classes.scheduleLesson} onClick={() => openModal(lesson)}>
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

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                {selectedLesson && (
                    <div>
                        <h2>{selectedLesson.title}</h2>
                        <p><strong>Учитель:</strong> {selectedLesson.teacher}</p>
                        <p><strong>Время:</strong> {selectedLesson.time}</p>
                        <p><strong>Аудитория:</strong> {selectedLesson.room}</p>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default MonthList;
