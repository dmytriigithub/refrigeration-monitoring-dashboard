import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import {
  DashboardOutlined,
  DevicesOutlined,
  NotificationsActiveOutlined,
  ShowChartOutlined,
} from "@mui/icons-material";

import { NavLink } from "react-router-dom";

const drawerWidth = 260;

const navigationItems = [
  {
    title: "Dashboard",
    path: "/",
    icon: <DashboardOutlined />,
  },
  {
    title: "Equipment",
    path: "/equipment",
    icon: <DevicesOutlined />,
  },
  {
    title: "Alerts & Events",
    path: "/alerts",
    icon: <NotificationsActiveOutlined />,
  },
  {
    title: "Monitoring",
    path: "/monitoring",
    icon: <ShowChartOutlined />,
  },
];

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#102A43",
          color: "#FFFFFF",
          borderRight: "none",
        },
      }}
    >
      <Toolbar sx={{ px: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Refrigeration
        </Typography>
      </Toolbar>

      <Box sx={{ px: 2, py: 2 }}>
        <Typography
          variant="caption"
          sx={{
            color: "#9FB3C8",
            fontWeight: 600,
            px: 2,
          }}
        >
          MAIN MENU
        </Typography>

        <List sx={{ mt: 1 }}>
          {navigationItems.map((item) => (
            <ListItemButton
              key={item.path}
              component={NavLink}
              to={item.path}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                color: "#D9E2EC",

                "&.active": {
                  backgroundColor: "#1565C0",
                  color: "#FFFFFF",
                },

                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              <ListItemIcon sx={{ color: "inherit", minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>

              <ListItemText
                primary={item.title}
                slotProps={{
                  primary: {
                    sx: {
                      fontSize: 14,
                      fontWeight: 500,
                    },
                  },
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
