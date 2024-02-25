import axios from "axios";

export default async function GetArrayOfCalendarEntries(setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
                                                        setMonthArray: React.Dispatch<React.SetStateAction<boolean[][]>>)
{
    console.log("Ustawiam loading na true.");
    setIsLoading(true);
    try{
        //CAUTION: there is only one tutor in DB, with no near plans of adding more. Should be changed if needed
        //const tutorId = 1;
        const response = await axios.get<boolean[][]>('https://localhost:7043/api/Home/reservation/calendar/1');
        setMonthArray(await response.data);
        setIsLoading(false);
        //For testing the loading feature
        //await new Promise(resolve => setTimeout(resolve, 1000));
        //console.log("GET: Respone from API" + response.data);
        //const returnedArray: boolean[][] = await response.data;
    }
    catch(error)
    {
        console.error("There was an issie with \"GetArrayOfCalendarEntries\" GET request: ", {error});
    }
}