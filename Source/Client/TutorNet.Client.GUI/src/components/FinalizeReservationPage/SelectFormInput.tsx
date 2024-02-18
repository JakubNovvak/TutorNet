import { FormControl, FormLabel, Grid, styled } from "@mui/material";
import { FormikOnBlurHandler, FormikOnChangeHandler, FormikSelectOnChangeHandler } from "./FormValues";
import { RangeValues, FormikSetValue } from "./FormValues";
import {Select, Option} from "@mui/joy/";
import { useEffect } from "react";


const GridItem = styled(Grid)({
    paddingTop: "1.3rem",
    paddingBottom: "1.3rem"
})


export default function SelectFormInput({ InputNumber, Size, idName, FormikValue, FormikValueOnChange, formikSetValue }: 
    {InputNumber : number, Size: number, idName: string, FormikValue: string, FormikValueOnChange: FormikSelectOnChangeHandler, formikSetValue: FormikSetValue}): 
    JSX.Element {

    return(
        <GridItem item xs={Size}>
            <FormControl>
                <FormLabel sx={{marginRight: "auto", fontSize: "0.8rem", marginBottom: "-0.1rem"}}>Material Range</FormLabel>
                <Select placeholder="Please Select Range" sx={{minWidth: "21rem"}} value={FormikValue} onChange={(event, value) => {formikSetValue(idName, value)}}>
                    <Option value={RangeValues[0]}>{RangeValues[0]}</Option>
                    <Option value={RangeValues[1]}>{RangeValues[1]}</Option>
                    <Option value={RangeValues[2]}>{RangeValues[2]}</Option>
                    <Option value={RangeValues[3]}>{RangeValues[3]}</Option>
                    <Option value={RangeValues[4]}>{RangeValues[4]}</Option>
                    <Option value={RangeValues[5]}>{RangeValues[5]}</Option>
                    <Option value="other">Other</Option>
                </Select>
            </FormControl>
        </GridItem>
    );
}