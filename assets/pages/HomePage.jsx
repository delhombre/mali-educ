import { Divider, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import React from 'react';
import TopBar from '../components/TopBar';
import SideBar from "../components/SideBar"
import { Inbox as InboxIcon } from "@material-ui/icons/Inbox"
import {Mail as MailIcon} from "@material-ui/icons/Mail"

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {//
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {//
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const HomePage = (props) => {
//     const classes = useStyles();
//     const { window } = props;
//     const [mobileOpen, setMobileOpen] = React.useState(false);

//     const container = window !== undefined ? () => window().document.body : undefined;

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <div>
//       <div className={classes.toolbar} />
//       <Divider />
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

    return <>
        <div className={classes.root}>
            <TopBar onDrawerToggle={ handleDrawerToggle} />
            {/* <SideBar onDrawerToggle={handleDrawerToggle} onOpen={mobileOpen} container={container} drawer={drawer} drawerWidth={drawerWidth} /> */}
        </div>
    </>
}

export default HomePage;