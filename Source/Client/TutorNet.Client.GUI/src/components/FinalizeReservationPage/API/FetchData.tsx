import { CalendarEntryCreateDto } from "../FormValues";
import axios from "axios";

export default async function POSTCalendarEntry(createdCalendarEntry: CalendarEntryCreateDto, setSendingState: React.Dispatch<React.SetStateAction<boolean>>, 
                                                                                              setSendSucess: React.Dispatch<React.SetStateAction<number>>)
{
    setSendingState(true);
    try{
        //CAUTION: there is only one tutor in DB, with no near plans of adding more. Should me changed if needed
        const response = await axios.post('https://localhost:7043/api/Home', createdCalendarEntry);
        console.log("POST: Respone from API" + response.data);
        setSendingState(false);
        setSendSucess(1);
        await new Promise(resolve => setTimeout(resolve, 4000));
        location.href = "/";
    }
    catch(error)
    {
        console.error("There was an issie with \"POSTCalendarEntry\" POST request: ", {error});
        setSendSucess(2);
        setSendingState(false);
        await new Promise(resolve => setTimeout(resolve, 4000));
        setSendSucess(0);
    }
}