import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function InputModal() {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = () => {
    console.log("Input Value: ", inputValue);
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open Input Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-input-title"
        aria-describedby="modal-input-description"
      >
        <Box sx={style}>
          <Typography id="modal-input-title" variant="h6" component="h2">
            Enter Your Data
          </Typography>
          <TextField
            fullWidth
            id="input-field"
            label="Input"
            variant="outlined"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            sx={{ mt: 2 }}
          />
          <Button onClick={handleSubmit} variant="contained" sx={{ mt: 2 }}>
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
