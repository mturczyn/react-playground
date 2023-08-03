import { EditNote, People } from '@mui/icons-material'
import { routes } from '../../routes'

export const mainNavbarItems = [
    {
        id: 0,
        icon: <People />,
        label: 'Authentication',
        route: routes.Authentication,
    },
    {
        id: 1,
        icon: <EditNote />,
        label: 'Hook Form',
        route: routes.HookForm,
    },
]
