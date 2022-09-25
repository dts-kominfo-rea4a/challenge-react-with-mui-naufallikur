// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import { 
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Divider
    } from "@mui/material";


// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => 
{
    // Contact berisi foto, nama, telepon, dan email
    return (
      <List sx={{width: "550px", backgroundColor: '#cbe3e6'}}>
        {data.map( contact => 
          {
            return(
              <div key={contact.phone}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar src={contact.photo} sx={{width: 75, height: 75}} ></Avatar>
                  </ListItemAvatar>
                  <ListItemText inset primary={contact.name} primaryTypographyProps={{fontWeight: "500"}} secondary={
                    <span>
                      {contact.phone}
                      <br></br>
                      {contact.email}
                    </span>
                  }>
                  </ListItemText>
                  </ListItem>
                  <Divider variant="middle" />
              </div>
            );
          })}
      </List>
    );
};

export default Contact;
