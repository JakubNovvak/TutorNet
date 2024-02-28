import { Box, Button, CircularProgress, Divider, Grid, Paper, Typography, styled } from "@mui/material";
import GenericFormButton from "../../components/FinalizeReservationPage/GenericFormInput";
import { Form, Formik, FormikValues, useFormikContext } from "formik";
import {FormValues, CalendarEntryCreateDto, BasicSchema} from "../../components/FinalizeReservationPage/FormValues";
import SelectFormInput from "../../components/FinalizeReservationPage/SelectFormInput";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import POSTCalendarEntry from "../../components/FinalizeReservationPage/API/FetchData";
import PositionedSnackbar from "../../components/FinalizeReservationPage/PostErrorSnackbar";

const FormMainContainer = styled(Box)({
    backgroundColor: "#edeff2", 
    width: "100%", 
    height: "calc(100vh - 16.05rem)",
    minHeight: "calc(100vh - 16.05rem)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})

function onSubmit(formikValues: FormikValues, setSendingState: React.Dispatch<React.SetStateAction<boolean>>, sendSucess: React.Dispatch<React.SetStateAction<number>>){
    //Caution: there is only one tutor in DB, with no near plans of adding more. Should be changed if needed
    const createdCalendarEntry: CalendarEntryCreateDto = {
        CalendarEntryType: 0,
        IsAccepted: false,
        ReservationDate: new Date(formikValues.reservationDate),
        Name: formikValues.name,
        Email: formikValues.email,
        Address: formikValues.address,
        MaterialRange: formikValues.materialRange,
        PhoneNumber: formikValues.phoneNumber.toString(),
        ReservationComment: formikValues.Comment,
        TutorId: 1
    }

    POSTCalendarEntry(createdCalendarEntry, setSendingState, sendSucess);

}

function FinalizeReservationPageContent({reservationDate, sendSucess}: {reservationDate: string, sendSucess: number})
{   
    const formikProps = useFormikContext<FormValues>();
    const date = reservationDate.substring(0, reservationDate.length - 6);
    const nextHour = dayjs(date).add(1, 'hour').format("H");
    const dispalyDate = dayjs(date).format(`D MMMM H:00-${nextHour}:00`);

    useEffect(() => {
        formikProps.setFieldValue("reservationDate", reservationDate);
    }, []);

    //GenericFormButton InputNumber values
    //0 - Reservation Date, 1 - E-mail Address, 2 - Name | Surname, 3 - Material Range, 4 - Address, 5 - Phone Number, 6 - Reservation Comment

    //TODO: Passing "FormikValue", "FormikValueOnChange", "FormikOnBlur" as a one parameter to the "GenericFormButton" doesn't work properly.
    //      Code needs refactorization in another way
    return(
        <FormMainContainer>
            <Paper sx={{width: "50rem", maxHeight: "35rem", minHeight: "35rem"}}>
                <Typography component="div" fontSize={27} fontWeight={540} sx={{pt: "1.2rem", pb: "1.2rem"}}>
                    2. Finalize your reservation
                </Typography>

                <Divider/>
                    <Form>
                        <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", minHeight: "22rem"}}>
                            <Grid container sx={{width: "100%", backgroundColor: "none", height: "100%"}}>
                                <GenericFormButton FormikValue={formikProps.values.reservationDate} FormikValueOnChange={formikProps.handleChange} FormikOnBlur={formikProps.handleBlur} 
                                InputNumber={0} displayValue={dispalyDate} idName="reservationDate" formikError={formikProps.errors.reservationDate} formikTouched={formikProps.touched.reservationDate}
                                />
                                <GenericFormButton FormikValue={formikProps.values.email} FormikValueOnChange={formikProps.handleChange} FormikOnBlur={formikProps.handleBlur}
                                InputNumber={1} displayValue={null} idName="email" formikError={formikProps.errors.email} formikTouched={formikProps.touched.email}
                                />
                                <GenericFormButton FormikValue={formikProps.values.name} FormikValueOnChange={formikProps.handleChange} FormikOnBlur={formikProps.handleBlur}
                                InputNumber={2} displayValue={null} idName="name" formikError={formikProps.errors.name} formikTouched={formikProps.touched.name}
                                />
                                <SelectFormInput FormikValue={formikProps.values.materialRange} /*FormikValueOnChange={formikProps.handleChange}*/ formikSetValue={formikProps.setFieldValue}
                                /*InputNumber={3}*/ Size={6} idName="materialRange" formikError={formikProps.errors.materialRange} formikTouched={formikProps.touched.materialRange}
                                />
                                <GenericFormButton FormikValue={formikProps.values.address} FormikValueOnChange={formikProps.handleChange} FormikOnBlur={formikProps.handleBlur}
                                InputNumber={4} displayValue={null} idName="address" formikError={formikProps.errors.address} formikTouched={formikProps.touched.address}
                                />
                                <GenericFormButton FormikValue={formikProps.values.phoneNumber} FormikValueOnChange={formikProps.handleChange} FormikOnBlur={formikProps.handleBlur}
                                InputNumber={5} displayValue={null} idName="phoneNumber" formikError={formikProps.errors.phoneNumber} formikTouched={formikProps.touched.phoneNumber}
                                />
                                <GenericFormButton FormikValue={formikProps.values.Comment} FormikValueOnChange={formikProps.handleChange} FormikOnBlur={formikProps.handleBlur}
                                InputNumber={6} displayValue={null} idName="Comment" formikError={formikProps.errors.Comment} formikTouched={formikProps.touched.Comment}
                                />
                            </Grid>
                        </Box>

                        <Grid container sx={{paddingTop: "1.8rem"}}>
                            <Grid item xs={12}>
                                <Typography>
                                    {!formikProps.isValid || sendSucess == 2
                                    ?
                                    <Button disabled sx={{color: "black", backgroundColor: "lightgray"}}>Confirm and Send</Button>
                                    :
                                    <Button type="submit" sx={{color: "black", backgroundColor: "lightBlue"}}>Confirm and Send</Button>
                                    }
                                </Typography>
                            </Grid>
                        </Grid>
                    </Form>
            </Paper>
        </FormMainContainer>
    );
}

export default function FinalizeReservationPage()
{
    var state: boolean = true;
    const [sendingState, setSendingState] = useState<boolean>(false);
    const [sendSucess, setSendSucess] = useState<number>(0);
    //0 - neutral, 1 - success, 2 - failed
    console.log("sendSucess: " + sendSucess);
    const storageReservationDate = sessionStorage.getItem("ReservationDate");
    if(storageReservationDate === null)
    {
        state = false;
        console.log("Item in local storage is null.");
    }

    if(sendingState)
        return(
            <FormMainContainer sx={{flexDirection: "column"}}>
                <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", width: "100%", height: "25rem"}}>
                    <CircularProgress size={50} />
                </Box>
            </FormMainContainer>
        );

    if(sendSucess == 1)
        return(
            <FormMainContainer sx={{flexDirection: "column"}}>
                <Typography variant="h4" color={"black"}>
                    All done - thanks for your reservation!
                </Typography>
                <Typography variant="h5" color={"black"} sx={{marginTop: "2rem"}}>
                    You will hear from us about your reservation state, as soon as possible.
                </Typography>
            </FormMainContainer>
        );

    return(
        <>
        {sendSucess == 2 ? <PositionedSnackbar/> : <></>}
        <Formik initialValues={{reservationDate: "Reservation Date", email: "", name: "", materialRange: "", address:"", phoneNumber: "", Comment: ""}}
        onSubmit={(values) => {console.log(values), onSubmit(values, setSendingState, setSendSucess)}}
        validationSchema={BasicSchema}
       >
            {state ? <FinalizeReservationPageContent reservationDate={storageReservationDate!} sendSucess={sendSucess}/> : <h1 style={{color: "black"}}>Error 404 :/</h1>}
        </Formik>
        </>
    );
}