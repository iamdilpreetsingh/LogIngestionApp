import dayjs from 'dayjs';

export const formatDate = (date) => {
    return date.valueOf();
}

export const getCurrentDate = () => {
    return dayjs().valueOf();
}