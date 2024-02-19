//import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { Box, Typography, /*Paper*/ } from '@mui/material';
//import { TimePickerProps } from '@mui/x-date-pickers/TimePicker/TimePicker.types';
import { plPL } from '@mui/x-date-pickers/locales';
import 'dayjs/locale/pl';
import { TimeView } from '@mui/x-date-pickers';
import  RouterContext from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import React from 'react';

//Testing Elements

const blockedDays: Dayjs[] = [
    dayjs('2024-02-18'),
    dayjs('2024-02-19'),
    dayjs('2024-02-20'),
];

//const blockedHours: number[] = [20, 21, 22, 23];
const hoursOfTheDay: boolean[] = [
    false, false, false, false, false, false,
    false, false, true, true, false, true,
    true, true, true, true, true, true,
    true, true, true, false, false, false,
];

//Testing Elements


function shouldDisableDate(date: Dayjs): boolean {
    return blockedDays.some(blockedDate => dayjs(date).isSame(blockedDate, 'day'));
}

function shouldDisableTime(value: dayjs.Dayjs, view: TimeView): boolean {
    //test statement
    // if(value.day() == 5 && value.hour() >= 9)
    //     return true;

    //Initial statement
    if(view === 'hours' && (value.hour() <=7 || value.hour() >= 21))
        return true;
    
    //Disable Minutes
    if(view === 'minutes' && value.minute() >= 1)
        return true;

    //Disable chosen hours
    if(view === 'hours' && hoursOfTheDay[value.hour()] == false)
        return true;

    return false;
}

function SaveDateToSessionStorage(key: string, object: any, isDateValid: boolean)
{
    if(isDateValid)
    {
        sessionStorage.setItem(key, JSON.stringify(object));
        location.href = "/onlinereservation/finalize";
    }
}

export default function ReservationTime()
{
    const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'));
    const [isDateValid, setIsDateValid] = useState<boolean>(false);
    const today = dayjs();
    const todayStartOfTheDay = today.startOf('day');
    const todayStartOfTheHour = today.startOf('hour');
    const maxDate = todayStartOfTheDay.add(1, 'month');
    const minDate = today.startOf('year');
    
    useEffect(() => {
        setValue(todayStartOfTheHour);
    }, []);

    return(

            <Box sx={{paddingTop: "0px"}}>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='pl' localeText={plPL.components.MuiLocalizationProvider.defaultProps.localeText}>
                    <Typography variant='h5' sx={{paddingBottom: "1rem"}}>
                        1. Choose your date
                    </Typography>
                    <DateTimePicker open closeOnSelect={false} skipDisabled disablePast sx={{width: "418px"}} ampm={false} timeSteps={{minutes: 60}} defaultValue={todayStartOfTheHour}
                    maxDate={maxDate}
                    minDate={minDate}
                    shouldDisableTime={shouldDisableTime}
                    shouldDisableDate={shouldDisableDate}
                    onError={() => {setIsDateValid}}
                    onChange={(event) => {setValue(event); setIsDateValid(true)}}
                    onAccept={() => {SaveDateToSessionStorage('ReservationDate', value, isDateValid);}}
                    />
                </LocalizationProvider>
            </Box>

    );
}