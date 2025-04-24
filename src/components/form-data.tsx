'use client';

import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useLocalStorage from '@/hooks/useLocalStorage';

interface props{
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function  FormData({setOpen}:props){

    type Inputs = {
        title: string
        description: string
      }

      const [todos, setTodos] = useLocalStorage('todos', []);
    const { register, handleSubmit, formState: { errors}, reset } = useForm<Inputs>();

    const onSubmit = (data: Inputs) => {
        console.log(data);
        setTodos([...todos,data])
        console.log("Todos are: ",todos);
        setOpen(false);
        reset();

    };

    return (

        <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col gap-[1rem] w-[100%]'>
            <Box className='flex flex-col justify-evenly width-[100%] gap-[10px]'>
                <InputLabel htmlFor="title">Title</InputLabel>
                <TextField id="title" label="Title" variant="outlined" placeholder="Enter title"
                {...register('title', {
                    required: 'title is required',
                    minLength: { value: 3, message: 'Title Should be more then 3 letters' },
                })}
                />
                {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
            </Box>

            <Box className='flex flex-col justify-evenly width-[100%] gap-[10px]'>
                <InputLabel htmlFor="description">Description</InputLabel>
                <TextField id="description" label="Description" variant="outlined" placeholder="Enter description"
                {...register('description', {
                    required: 'title is required',
                    minLength: { value: 8, message: 'Description Should be more then 8 letters' },
                })}
                />
                {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
            </Box>

            <Button type='submit' variant="contained"
            className='w-[30%] flex justify-center self-center'
            >Submit</Button>

        </form > 
    )
}

