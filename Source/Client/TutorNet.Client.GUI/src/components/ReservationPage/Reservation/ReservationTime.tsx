//import * as React from 'react';
import 'dayjs/locale/pl';
import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import  RouterContext from 'react-router-dom';
import { TimeView } from '@mui/x-date-pickers';
import GetArrayOfCalendarEntries from "../API/FetchData";
import { plPL } from '@mui/x-date-pickers/locales';
import { useContext, useEffect, useState } from 'react';
import { Box, CircularProgress, Typography, /*Paper*/ } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

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

//TODO: API will send disabled hours with "true" for disabled, so change is necessary
//Disables "value == false" hours
function shouldDisableTime(value: dayjs.Dayjs, view: TimeView, monthArray: boolean[][], isArrayLoading: boolean): boolean {
    
    //CAUTION: Hard coded 8-20 hours to choose. Maybe add a change from the dashboard
    //Initial statement
    if(view === 'hours' && (value.hour() <=7 || value.hour() >= 21))
        return true;

    const date1 = dayjs(value.toDate()).hour(0).minute(0).second(0).millisecond(0);
    const date2 = dayjs().hour(0).minute(0).second(0).millisecond(0);
    //console.log("Test: " + date1.toISOString() + " | " + date2.toISOString());
    //const arrayDayIndex = Math.abs(dayjs(value.toDate()).diff(dayjs(), "day"));
    const arrayDayIndex = Math.abs(date1.diff(date2, 'day'));
    //console.log("Day: "+ dayjs(value.toDate()).date() + "arrayDayIndex: " + arrayDayIndex + " | value.hour(): " + value.hour());
    //console.log(date1.date() + "-" + date2.date()+"="+arrayDayIndex);
    console.log("["+ arrayDayIndex +"]" + "["+ value.hour() +"]: " + monthArray[arrayDayIndex][value.hour()]);
    if((!isArrayLoading && monthArray !== undefined && arrayDayIndex >= 0))
        if(view === 'hours' && monthArray[arrayDayIndex][value.hour()] == true)
            return true;

    //Disable Minutes
    if(view === 'minutes' && value.minute() >= 1)
        return true;

    //Disable chosen hours
    // if(view === 'hours' && hoursOfTheDay[value.hour()] == false)
    //     return true;

    return false;
}

function SaveDateToSessionStorage(key: string, object: Dayjs | null, isDateValid: boolean)
{
    if(isDateValid && object != null)
    {
        object.utcOffset();
        console.log(dayjs(object) + " | " + object.format() + " | Offset: " + object.utcOffset());
        sessionStorage.setItem(key, object.format());
        location.href = "/onlinereservation/finalize";
    }
}

export default function ReservationTime({monthArray, isArrayLoading}: {monthArray: boolean[][], isArrayLoading: boolean})
{
    const [pickedDate, setPickedDate] = React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'));
    const [isDateValid, setIsDateValid] = useState<boolean>(false);
    //const [isLoading, setIsLoading] = useState<boolean>(false);
    const today = dayjs();
    const todayStartOfTheDay = today.startOf('day');
    const todayStartOfTheHour = today.startOf('hour');
    const maxDate = todayStartOfTheDay.add(1, 'month');
    const minDate = today.startOf('year');
    
    useEffect(() => {
        setPickedDate(todayStartOfTheHour);
    }, []);

    if(isArrayLoading)
        return(
            <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", width: "100%", height: "25rem"}}>
                <CircularProgress size={50} />
            </Box>
        );

    return(

            <Box sx={{paddingTop: "0px"}}>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='pl' localeText={plPL.components.MuiLocalizationProvider.defaultProps.localeText}>
                    <Typography variant='h5' sx={{paddingBottom: "1rem"}}>
                        1. Choose your date
                    </Typography>
                    <DateTimePicker open closeOnSelect={false} skipDisabled disablePast sx={{width: "418px"}} ampm={false} timeSteps={{minutes: 60}} defaultValue={todayStartOfTheHour}
                    maxDate={maxDate}
                    minDate={minDate}
                    shouldDisableTime={(value, view) => {return shouldDisableTime(value, view, monthArray, isArrayLoading);}}
                    shouldDisableDate={shouldDisableDate}
                    onError={() => {setIsDateValid}}
                    onChange={(event) => {setPickedDate(event); setIsDateValid(true)}}
                    onAccept={() => {SaveDateToSessionStorage('ReservationDate', pickedDate, isDateValid)}}
                    />
                </LocalizationProvider>
            </Box>

    );
}