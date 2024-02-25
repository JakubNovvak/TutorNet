import { FormControl, FormLabel, Grid, styled } from "@mui/material";
import Input from '@mui/joy/Input';
import { FormikOnBlurHandler, FormikOnChangeHandler, LabelsArray, placeholdersArray } from "./FormValues";

const GridItem = styled(Grid)({
    paddingTop: "1.3rem",
    paddingBottom: "1.3rem"
})

export default function GenericFormButton({ InputNumber, Size, idName, FormikValue, FormikValueOnChange, FormikOnBlur, displayValue }: 
    {InputNumber : number, Size: number, idName: string, FormikValue: string, FormikValueOnChange: FormikOnChangeHandler, FormikOnBlur: FormikOnBlurHandler, displayValue: string | null}): 
    JSX.Element {

    return(
        <GridItem item xs={Size}>
            <FormControl>
                <FormLabel sx={{marginRight: "auto", fontSize: "0.8rem", marginBottom: "-0.0rem"}}>{LabelsArray[InputNumber]}</FormLabel>
                <Input className="outlined-input" id={idName} placeholder={placeholdersArray[InputNumber]}
                 disabled={InputNumber == 0 ? true : false}
                 type={idName == "phoneNumber" ? "number" : ""}
                 value={displayValue === null ? FormikValue : displayValue} onChange={FormikValueOnChange} onBlur={FormikOnBlur}
                 sx={{minWidth: InputNumber == 6 ? "40rem" : "21rem"}}
                 />
            </FormControl>
        </GridItem>
    );
}