import { FormControl, FormLabel, Grid, styled } from "@mui/material";
import Input from '@mui/joy/Input';
import { FormikOnBlurHandler, FormikOnChangeHandler, LabelsArray, placeholdersArray } from "./FormValues";

const GridItem = styled(Grid)({
    paddingTop: "1.3rem",
    paddingBottom: "1.3rem"
})

function ChooseColor(inputNumber: number, error: string | undefined, touched: boolean | undefined)
{
    if(touched === undefined || inputNumber == 6)
        return "neutral";
    
    if(touched && error)
        return "danger";

    if(touched && error === undefined)
        return "success";
}

//TODO: Passing "FormikValue", "FormikValueOnChange", "FormikOnBlur" as a one parameter doesn't work properly. Code needs refactorization in another way
export default function GenericFormButton({ InputNumber, idName, FormikValue, FormikValueOnChange, FormikOnBlur, displayValue, formikError, formikTouched}: 
    {InputNumber : number, FormikValue: string, idName: string, FormikValueOnChange: FormikOnChangeHandler, FormikOnBlur: FormikOnBlurHandler, displayValue: string | null, formikError: string | undefined, formikTouched: boolean | undefined}): 
    JSX.Element {

    return(
        <GridItem item xs={InputNumber == 6 ? 12 : 6}>
            <FormControl>
                <FormLabel sx={{marginRight: "auto", fontSize: "0.8rem", marginBottom: "-0.0rem", textAlign: "left"}}>
                    {LabelsArray[InputNumber]}
                    <Input id={idName} className="outlined-input" placeholder={placeholdersArray[InputNumber]}
                    disabled={InputNumber == 0 ? true : false}
                    // type={InputNumber == 5 ? "number" : ""}
                    value={displayValue === null ? FormikValue : displayValue} onChange={InputNumber == 0 ? () => {} : FormikValueOnChange} onBlur={FormikOnBlur}
                    sx={{minWidth: InputNumber == 6 ? "40rem" : "21rem"}}
                    startDecorator={InputNumber == 5 ? "+48" : ""}
                    color={ChooseColor(InputNumber, formikError, formikTouched)}
                    />
                 </FormLabel>
            </FormControl>
        </GridItem>
    );
}