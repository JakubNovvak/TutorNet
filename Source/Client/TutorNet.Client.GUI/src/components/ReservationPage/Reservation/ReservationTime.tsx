import 'dayjs/locale/pl';
import dayjs, { Dayjs } from 'dayjs';
import { TimeView } from '@mui/x-date-pickers';
import { plPL } from '@mui/x-date-pickers/locales';
import { useEffect, useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const blockedDays: Dayjs[] = [
    dayjs('2024-03-01'),
    dayjs('2024-02-27'),
    dayjs('2024-03-02'),
    dayjs('2024-03-14'),
    dayjs('2024-03-15'),
    dayjs('2024-03-16'),

];

function shouldDisableDate(date: Dayjs): boolean {
    return blockedDays.some(blockedDate => dayjs(date).isSame(blockedDate, 'day'));
}

function shouldDisableTime(value: dayjs.Dayjs, view: TimeView, monthArray: boolean[][], isArrayLoading: boolean): boolean {

    //Initial statement
    //Caution: Hard coded 8-20 hours to choose. Maybe add an API and ability to change from the dashboard
    if(view === 'hours' && (value.hour() <=7 || value.hour() >= 21))
        return true;

    // const date1 = dayjs(value.toDate()).hour(0).minute(0).second(0).millisecond(0);
    // const date2 = dayjs().hour(0).minute(0).second(0).millisecond(0);

    // const arrayDayIndex = Math.abs(date1.diff(date2, 'day'));

    // if((!isArrayLoading && monthArray !== undefined && arrayDayIndex >= 0))
    // {
    //     if(view === 'hours' && monthArray[arrayDayIndex][value.hour()] == true)
    //         return true;
    // }

    //Disable Minutes
    if(view === 'minutes' && value.minute() >= 1)
        return true;

    //Disable chosen hours
    //TODO: Endpoint for other types of disabled hours/days (OccupiedHour, DayOff)

    return false;
}

//Caution: Date saved in LocalTime format
function SaveDateToSessionStorage(key: string, object: Dayjs | null, isDateValid: boolean)
{
    if(isDateValid && object != null)
    {
        sessionStorage.setItem(key, object.format());
        location.href = "/onlinereservation/finalize";
    }
}

export default function ReservationTime({monthArray, isArrayLoading}: {monthArray: boolean[][], isArrayLoading: boolean})
{
    const [pickedDate, setPickedDate] = useState<Dayjs | null>(dayjs('2022-04-17T15:30'));
    const [isDateValid, setIsDateValid] = useState<boolean>(false);

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