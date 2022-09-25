// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import { Card, CardActions, CardContent, TextField, Button, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";

const theme = createTheme(
    {
        components: {
            // Name of the component
            MuiCard: {
              styleOverrides: {
                // Name of the slot
                root: {
                  // Some CSS
                  backgroundColor: '#fdf2f3',
                },
              },
            },
          },
    });

const ContactForm = ({fntambahContacts}) => 
{
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [newContact, setNewContact]= useState({
        name: "",
        phone: "",
        email: "",
        photo: ""
    });

    //fungsi untuk menangkap apa yang diketikkan di textfield pada form
    const formTextFieldOnChangeHandler = (event) =>
    {
        setNewContact({...newContact, [event.target.name]: event.target.value})
    };

    //fungsi untuk menghandle submit dari form
    const formOnSubmitHandler = (event) =>
    {
        //supaya tidak refresh halamannya ketika tombol submit di form-nya ditekan
        event.preventDefault();

        fntambahContacts(newContact);

        //kosongin isi dari newContact
        setNewContact({
        name: "",
        phone: "",
        email: "",
        photo: ""
        });
    }

    return (
        <form onSubmit={formOnSubmitHandler}>
            <ThemeProvider theme={theme}>
                <Card>
                    <CardContent>
                        <TextField required label="Name" variant="filled" type="text" fullWidth margin="dense" value={newContact.name} name="name" onChange={formTextFieldOnChangeHandler} />
                        <TextField required label="Phone" variant="filled" type="text" fullWidth margin="dense" value={newContact.phone} name="phone" onChange={formTextFieldOnChangeHandler} />
                        <TextField required label="Email" variant="filled" type="email" fullWidth margin="dense" value={newContact.email} name="email" onChange={formTextFieldOnChangeHandler} />
                        <TextField required label="Photo URL" variant="filled" type="url" fullWidth margin="dense" value={newContact.photo} name="photo" onChange={formTextFieldOnChangeHandler} />
                    </CardContent>
                    <CardActions>
                        <Button type="submit" variant="text" color="success">ADD NEW</Button>
                    </CardActions>
                </Card>
            </ThemeProvider>
        </form>
    );
}

export default ContactForm;