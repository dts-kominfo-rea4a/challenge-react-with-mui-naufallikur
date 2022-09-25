import './App.css';
import React, {useState} from "react";
import {Grid, Box, List} from "@mui/material";

//import componentnya
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
const App = () => 
{
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list
  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  const [contacts, setContacts] = useState(contactsJSON);
  
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const tambahContacts  = (contactYangBaru) =>
  {
    setContacts([...contacts, contactYangBaru]);
  };

  return (
    <div className="App">
      <Grid container sx={{marginTop: "10px"}} justifyContent='center'>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Box display="flex" justifyContent="center" sx={{marginTop: "45px"}}>
          <Grid item xs={4}>
            <ContactForm fntambahContacts={tambahContacts} />
          </Grid>
          <Grid item xs={6} sx={{padding: "0 150px"}}>
            <List sx={{width: "550px", backgroundColor: '#cbe3e6'}}>
              {
                contacts.map( (contacts_element) => 
                  {
                    return(
                    <Contact data={contacts_element} key={contacts_element.phone} />);
                  })
              }
            </List>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
};

export default App;
