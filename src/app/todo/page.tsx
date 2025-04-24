import React from 'react'
import ModalButton from '../../components/modal-button'
import Table from '../../components/table'
import Box from '@mui/material/Box';

export default function page() {

  return (
    <Box className='flex flex-col p-8 gap-[1rem] bg-gradient-to-r from-slate-800 to-zinc-600 h-[100vh]'>
      <Box className='flex justify justify-end'>
        <ModalButton/>
      </Box>

      <Box className='flex justify-center items-center' >
        <Table/>
      </Box>

    </Box>
  )
}
