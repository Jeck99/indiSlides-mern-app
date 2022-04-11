import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./slide-modal.css";
import Slide from "../slide/slide";

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

export default function SlideModal({slideItem}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div onClick={handleOpen} id="slide-div-p">
        <h2>{slideItem.title}</h2>
        <img
          className="img-pr"
          src={`images/${slideItem.title}.png`}
          alt={`pic-${slideItem.title}`}
        />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Slide slideItem={slideItem} />
        </Box>
      </Modal>
    </>
  );
}
