import React from 'react';
import moment from 'moment';

export const CustomDateFormat = (date) => {
    return moment(date).format('ll');
};

export const dateAndTimeConverter = {
    dateWithTime: function (value, timeFormat) {
        const formattedTime = moment(value, "YYYY-MM-DD HH:mm").format(timeFormat === "12" ? "hh:mm a" : "HH:mm");
        return formattedTime;
    },
};
