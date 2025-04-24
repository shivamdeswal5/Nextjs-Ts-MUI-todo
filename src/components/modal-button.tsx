'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
// import FormData from './form-data';
import DataForm from '../components/formData'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',

};

// type Props{
//   open: boolean,
//   setOpen: React.Dispatch<React.SetStateAction<boolean>>
// }


export default function BasicModal() {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}
      sx={{color:'white', backgroundColor:'black', padding:'0.5rem 1.1rem', borderRadius:'20px'}}
      >Add Data</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{width:'100%'}}
      >
        <Box sx={style}>          
            {/* <FormData setOpen = {setOpen} /> */}
            <DataForm setOpen = {setOpen} />
        </Box>
      </Modal>
    </div>
  );
}
