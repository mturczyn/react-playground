import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { mainNavbarItems } from './navbarItems'
import { styles } from './styles'
import { useNavigate } from 'react-router'

export default function Navbar() {
    const navigate = useNavigate()

    return (
        <Drawer sx={styles.drawer} variant="permanent" anchor="left">
            <Toolbar />
            <Divider />
            <List>
                {mainNavbarItems.map((item) => (
                    <ListItem
                        key={item.id}
                        disablePadding
                        onClick={() => navigate(item.route)}
                    >
                        <ListItemButton>
                            <ListItemIcon sx={styles.icon}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}
