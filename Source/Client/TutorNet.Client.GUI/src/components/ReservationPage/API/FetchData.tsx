import axios from "axios";

export default async function GetArrayOfCalendarEntries(setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
                                                        setMonthArray: React.Dispatch<React.SetStateAction<boolean[][]>>)
{
    setIsLoading(true);
    try{
        //CAUTION: there is only one tutor in DB, with no near plans of adding more. Should be changed if needed
        const response = await axios.get<boolean[][]>('https://localhost:7043/api/Home/reservation/calendar/1');
        
        setMonthArray(await response.data);
        setIsLoading(false);
    }
    catch(error)
    {
        console.error("There was an issue with Calendar Entries GET request: ", {error});
        await new Promise(resolve => setTimeout(resolve, 8000));
        console.log("Retrying connection to the Server...");
        GetArrayOfCalendarEntries(setIsLoading, setMonthArray);
    }
}