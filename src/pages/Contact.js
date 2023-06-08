import React from "react";
import Layout from "../components/layout/Layout";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from '@mui/icons-material/Call';

function Contact() {
  return (
    <div>
      <Layout>
        <Box
          sx={{
            my: 10,
            ml: 10,
            "& h4": {
              fontWeight: "bold",
              mb: 2,
            },
          }}
        >
          <Typography variant="h4">Contact My Resturant</Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio
            beatae ducimus magni nobis culpa praesentium velit expedita quae,
            corrupti, pariatur inventore laboriosam consectetur modi impedit
            error, repudiandae obcaecati doloribus.
          </p>
        </Box>
        <Box sx={{m:3, width:'600px', ml:5, "@media (max-width:600px)": {
          width:'300px',
        }}}>
          <TableContainer component={Paper}>
            <Table aria-lable="contact table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ bgcolor:"black", color:"white" }}
                  align="center"
                  >Contact Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 
                    180-000-0000 (totalfree)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <EmailIcon sx={{ color: "skyblue", pt: 1 }} />{" "}
                    dmk1234@gmail.com
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <CallIcon sx={{ color: "green", pt: 1 }} />{" "}
                    123 456 7890
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Layout>
    </div>
  );
}

export default Contact;
