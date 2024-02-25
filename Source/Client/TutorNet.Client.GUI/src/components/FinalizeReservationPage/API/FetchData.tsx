import { CalendarEntryCreateDto } from "../FormValues";
import axios from "axios";

export default async function POSTCalendarEntry(createdCalendarEntry: CalendarEntryCreateDto)
{
    try{
        //CAUTION: there is only one tutor in DB, with no near plans of adding more. Should me changed if needed
        //const tutorId = 1;
        const response = await axios.post('https://localhost:7043/api/Home', createdCalendarEntry);
        console.log("POST: Respone from API" + response.data);
    }
    catch(error)
    {
        console.error("There was an issie with \"POSTCalendarEntry\" POST request: ", {error});
    }
}