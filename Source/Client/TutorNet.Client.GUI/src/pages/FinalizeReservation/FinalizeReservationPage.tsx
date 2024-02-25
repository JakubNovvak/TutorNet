import { Box, Button, Divider, Grid, Paper, Typography, styled } from "@mui/material";
import GenericFormButton from "../../components/FinalizeReservationPage/GenericFormInput";
import { Form, Formik, FormikValues, useFormikContext } from "formik";
import {FormValues, CalendarEntryCreateDto} from "../../components/FinalizeReservationPage/FormValues";
import SelectFormInput from "../../components/FinalizeReservationPage/SelectFormInput";
import { useEffect } from "react";
import dayjs from "dayjs";
import POSTCalendarEntry from "../../components/FinalizeReservationPage/API/FetchData";

const FormMainContainer = styled(Box)({
    backgroundColor: "#edeff2", 
    width: "100vw", 
    height: "calc(100vh - 235px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})

function onSubmit(formikValues: FormikValues){
    //Caution: there is only one tutor in DB, with no near plans of adding more. Should be changed if needed
    const createdCalendarEntry: CalendarEntryCreateDto = {
        CalendarEntryType: 0,
        IsAccepted: false,
        ReservationDate: new Date(formikValues.reservationDate),
        Name: formikValues.name,
        Email: formikValues.email,
        Address: formikValues.address,
        MaterialRange: formikValues.materialRange,
        PhoneNumber: Math.abs(parseInt(formikValues.phoneNumber)),
        ReservationComment: formikValues.Comment,
        TutorId: 1
    }

    POSTCalendarEntry(createdCalendarEntry);

}

function FinalizeReservationPageContent({reservationDate}: {reservationDate: string})
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
                                InputNumber={0} Size={6} idName="reservationDate" displayValue={dispalyDate}
                                />
                                <GenericFormButton FormikValue={formikProps.values.email} FormikValueOnChange={formikProps.handleChange} FormikOnBlur={formikProps.handleBlur}
                                InputNumber={1} Size={6} idName="email" displayValue={null}
                                />
                                <GenericFormButton FormikValue={formikProps.values.name} FormikValueOnChange={formikProps.handleChange} FormikOnBlur={formikProps.handleBlur}
                                InputNumber={2} Size={6} idName="name" displayValue={null}
                                />
                                <SelectFormInput FormikValue={formikProps.values.materialRange} /*FormikValueOnChange={formikProps.handleChange}*/ formikSetValue={formikProps.setFieldValue}
                                /*InputNumber={3}*/ Size={6} idName="materialRange"
                                />
                                <GenericFormButton FormikValue={formikProps.values.address} FormikValueOnChange={formikProps.handleChange} FormikOnBlur={formikProps.handleBlur}
                                InputNumber={4} Size={6} idName="address" displayValue={null}
                                />
                                <GenericFormButton FormikValue={formikProps.values.phoneNumber} FormikValueOnChange={formikProps.handleChange} FormikOnBlur={formikProps.handleBlur}
                                InputNumber={5} Size={6} idName="phoneNumber" displayValue={null}
                                />
                                <GenericFormButton FormikValue={formikProps.values.Comment} FormikValueOnChange={formikProps.handleChange} FormikOnBlur={formikProps.handleBlur}
                                InputNumber={6} Size={12} idName="Comment" displayValue={null}
                                />
                            </Grid>
                        </Box>

                        <Grid container sx={{paddingTop: "1.8rem"}}>
                            <Grid item xs={12}>
                                <Typography>
                                    <Button type="submit" sx={{color: "black", backgroundColor: "lightBlue"}}>Confirm and Send</Button>
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
    const storageReservationDate = sessionStorage.getItem("ReservationDate");
    if(storageReservationDate === null)
    {
        state = false;
        console.log("Item in local storage is null.");
    }

    return(
        <Formik initialValues={{reservationDate: "Reservation Date", email: "", name: "", materialRange: "", address:"", phoneNumber: "", Comment: ""}}
        onSubmit={(values) => {console.log(values), onSubmit(values)}}
       >
            {state ? <FinalizeReservationPageContent reservationDate={storageReservationDate!}/> : <h1 style={{color: "black"}}>Error 404 :/</h1>}
        </Formik>
    );
}