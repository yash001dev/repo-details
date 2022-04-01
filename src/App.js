import "./App.css";
import {
  Alert,
  CircularProgress,
  Divider,
  Grid,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { Box } from "@mui/system";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchRepos();
  };

  function searchRepos() {
    setLoading(true);
    axios({
      method: "get",
      url: `https://api.github.com/search/repositories`,
      params: {
        q: searchTerm,
      },
    })
      .then((res) => {
        console.log("RESPONSE:", res.data);
        setLoading(false);
        setRepos(res.data.items);
      })
      .catch((err) => {
        <Alert severity="error">{err.message}</Alert>;
        setLoading(false);
      });
  }

  function renderRepo(repo, index) {
    return (
      <div key={index}>
        <ListItem key={repo.id} disablePadding>
          <ListItemButton
            onClick={() => navigate("/details", { state: { data: repo } })}
          >
            <ListItemText primary={repo.name} />
          </ListItemButton>
        </ListItem>
        <Divider />
      </div>
    );
  }

  return (
    <div className="App">
      <Grid container>
        <Grid
          style={{ display: "flex", justifyContent: "center" }}
          item
          xs={12}
        >
          <Paper
            style={{
              marginTop: "1rem",
            }}
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Github Repos"
              value={searchTerm}
              onKeyPress={(ev) => {
                if (ev.key === "Enter") {
                  console.log("ENTER IS CLICKED");
                }
              }}
              inputProps={{ "aria-label": "search google maps" }}
              onChange={handleChange}
            />
            <IconButton
              onClick={handleSubmit}
              sx={{ p: "10px" }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <nav aria-label="secondary mailbox folders">
              <List>
                {loading && <CircularProgress />}
                {repos?.map((repo, index) => renderRepo(repo, index))}
              </List>
            </nav>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
