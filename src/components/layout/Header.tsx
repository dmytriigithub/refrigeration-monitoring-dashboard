import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Chip,
  IconButton,
  Badge,
} from "@mui/material";

import { NotificationsOutlined } from "@mui/icons-material";

import { useLocation } from "react-router-dom";

const pageTitles: Record<string, string> = {
  "/": "Dashboard",
  "/equipment": "Equipment",
  "/alerts": "Alerts & Events",
  "/monitoring": "Temperature Monitoring",
};

function Header() {
  const location = useLocation();

  const pageTitle = pageTitles[location.pathname] ?? "Dashboard";

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#FFFFFF",
        color: "#102A43",
        borderBottom: "1px solid #E5EAF0",
      }}
    >
      <Toolbar
        sx={{
          minHeight: "72px",
          px: 3,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {pageTitle}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Chip
            label="System Online"
            color="success"
            size="small"
            variant="outlined"
          />

          <IconButton color="inherit" aria-label="Notifications">
            <Badge badgeContent={3} color="error">
              <NotificationsOutlined />
            </Badge>
          </IconButton>

          <Typography
            variant="body2"
            sx={{ color: "#64748B", fontWeight: 500 }}
          >
            Demo User
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
