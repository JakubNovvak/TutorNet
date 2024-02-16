import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { Box } from '@mui/material';
import { TimePickerProps } from '@mui/x-date-pickers/TimePicker/TimePicker.types';
import { plPL } from '@mui/x-date-pickers/locales';

import 'dayjs/locale/pl';
import { TimeView } from '@mui/x-date-pickers';

//Testing Elements

const blockedDays: Dayjs[] = [
    dayjs('2024-02-18'),
    dayjs('2024-02-19'),
    dayjs('2024-02-20'),
];

const blockedHours: number[] = [20, 21, 22, 23];

//Testing Elements

function shouldDisableDate(date: Dayjs): boolean {
    return blockedDays.some(blockedDate => dayjs(date).isSame(blockedDate, 'day'));
}

function shouldDisableTime(value: dayjs.Dayjs, view: TimeView): boolean {
    if(view === 'minutes' && value.minute() >= 1)
        return true;

    if(view === 'hours' && blockedHours.some(blockedHour => value.hour() == blockedHour))
        return true;

    return false;
}

// const shouldDisableTime: TimePickerProps<Dayjs>['shouldDisableTime'] = (
//     value,
//     view,
//   ) => (view === 'minutes' && value.minute() >= 1);


export default function ReservationTime()
{
    const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'));
    const today = dayjs();
    const todayStartOfTheDay = today.startOf('day');
    const todayStartOfTheHour = today.startOf('hour'); 
    const maxDate = todayStartOfTheDay.add(1, 'month');
    const minDate = today.startOf('year');

    return(
        <Box sx={{paddingTop: "25px"}}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='pl' localeText={plPL.components.MuiLocalizationProvider.defaultProps.localeText}>
                <DateTimePicker disablePast sx={{width: "418px"}} ampm={false} timeSteps={{minutes: 60}} defaultValue={todayStartOfTheHour} maxDate={maxDate} minDate={minDate} 
                shouldDisableTime={shouldDisableTime}
                shouldDisableDate={shouldDisableDate}
                />
            </LocalizationProvider>
        </Box>
    );
}