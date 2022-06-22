

    const drawerGenrator = (menu, counter = 0, level = 0) => {

        return menu.map((item, index) => {
            if (!item.children) {
                return (
                    <div key={parseInt(counter + index)}>
                        <ListItem key={parseInt(counter + index)} sx={{ display: 'block', py: 0, pl: level, color:'#fff' }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                        color: '#fff'
                                    }}
                                >
                                    {item.icon ? item.icon : <DashboardTwoTone />}
                                </ListItemIcon>
                                <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    </div>)
            }

            return (
                <div key={parseInt(counter + index)}>
                    <ListItem key={parseInt(counter + index)} sx={{ display: 'block', py: 0, pl: level, color:'#fff' }} button onClick={() => handleOpenSettings(parseInt(counter + index))}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                    color: '#fff'
                                }}
                            >
                                {item.icon ? item.icon : <DashboardTwoTone />}
                            </ListItemIcon>
                            <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
                            {openCollapse[parseInt(counter + index)] ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                    </ListItem>
                    {/* <Collapse in={true} timeout="auto"> */}
                    <Collapse in={openCollapse[parseInt(counter+index)]} timeout="auto">
                        {drawerGenrator(item.children, parseInt(counter + index), parseInt(level+1))}
                    </Collapse>
                </div>)
        })
    }