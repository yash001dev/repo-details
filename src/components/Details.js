import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useLocation } from "react-router-dom";
import ForkLeftIcon from "@mui/icons-material/ForkLeft";
import { BedroomChild, BugReport } from "@mui/icons-material";

function Details() {
  const { state } = useLocation();
  console.log("STATE:", state);
  let owner = state.data.owner.name;
  let repo = state.data.name;

  return (
    <Grid container>
      <Grid style={{ display: "flex", justifyContent: "center" }} item xs={12}>
        <Card sx={{ display: "flex" }} style={{ marginTop: "2rem" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                {state.data.name}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {state.data.description}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Tooltip title="Forks">
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <ForkLeftIcon />
                      <span style={{ marginRight: "1rem" }}>
                        <div>{state.data.forks}</div>
                      </span>
                    </div>
                  </Tooltip>

                  <Tooltip title="Open Issues">
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <BugReport />
                      <span style={{ marginRight: "1rem" }}>
                        <div>{state.data.open_issues}</div>
                      </span>
                    </div>
                  </Tooltip>

                  <Tooltip title="Size">
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <BedroomChild />
                      <span style={{ marginRight: "1rem" }}>
                        <div>{state.data.size}</div>
                      </span>
                    </div>
                  </Tooltip>
                </div>
              </Typography>
            </CardContent>

            {/* <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <IconButton aria-label="play/pause"></IconButton>
            </Box> */}
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={state.data.owner.avatar_url}
            alt="Live from space album cover"
          />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <TableContainer
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <Table sx={{ maxWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Link</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>html url</TableCell>
                <TableCell>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={state.data.html_url}
                  >
                    {state.data.html_url}
                  </a>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>clone url</TableCell>
                <TableCell>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={state.data.clone_url}
                  >
                    {state.data.clone_url}
                  </a>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>avatar url</TableCell>
                <TableCell>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={state.data.owner.avatar_url}
                  >
                    {state.data.owner.avatar_url}
                  </a>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>branches url</TableCell>
                <TableCell>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={state.data.branches_url}
                  >
                    {state.data.branches_url}
                  </a>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>contributors url</TableCell>
                <TableCell>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={state.data.contributors_url}
                  >
                    {state.data.contributors_url}
                  </a>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>events url</TableCell>
                <TableCell>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={state.data.events_url}
                  >
                    {state.data.events_url}
                  </a>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>events url</TableCell>
                <TableCell>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={state.data.events_url}
                  >
                    {state.data.events_url}
                  </a>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>merges url</TableCell>
                <TableCell>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={state.data.merges_url}
                  >
                    {state.data.merges_url}
                  </a>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

export default Details;
