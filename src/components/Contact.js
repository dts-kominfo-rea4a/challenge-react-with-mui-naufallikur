// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import { 
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
  return( 
  <>
    <ListItem>
      <ListItemAvatar>
        <Avatar src={data.photo} sx={{width: 75, height: 75}} ></Avatar>
      </ListItemAvatar>
      <ListItemText inset primary={data.name} primaryTypographyProps={{fontWeight: "500"}} secondary={
        <span>
          {data.phone}
          <br></br>
          {data.email}
        </span>
      }>
      </ListItemText>
    </ListItem>
    <Divider variant="middle" />
  </>);
};

export default Contact;
