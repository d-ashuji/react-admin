import InboxIcon from '@mui/icons-material/MoveToInbox';

const drawerSetting = {
    "backgroundColor": "linear-gradient(6deg, #20b4e3 0%, #0e7dc2) !important",
    "drawerWidth": 240,
    "menu": [
        {
            "name": "Item1",
            "url": "/item1",
        },
        {
            "name": "Item2",
            "url": "/item2",
            "icon": <InboxIcon />
        },
        {
            "name": "Item3",
            "icon": <InboxIcon />,
            "children": [
                {
                    "name": "Child32",
                    "url": "/child31"
                },
                {
                    "name": "Child32",
                    "url": "/child32"
                },
                {
                    "name": "Child32",
                    "url": "/child33"
                }
            ]
        },
        {
            "name": "Item4",
            "icon": <InboxIcon />,
            "children": [
                {
                    "name": "Child41",
                    "url": "/child41"
                },
                {
                    "name": "Child42",
                    "url": "/child42",
                },
            ]
        },
    ],
}
export default drawerSetting 