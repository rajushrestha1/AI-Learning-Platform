import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button, Input, Switch } from '@mui/material'
import { Textarea } from '@/components/ui/textarea'
import { Sparkle } from 'lucide-react'

const AddNewCourseDialog = ({children}) => {
    const [formData, setFormData] = useState({
        name:'',
        description:'',
        chapters:1,
        includeVideo:false,
        difficulty:'',
        category:'',
        level:''
    });



    const onHandleInputChange =(field,value)=>{
        setFormData(prev=>({
            ...prev,
            [field]:value
        }));
        console.log(formData);
    }

    const onGenerate=()=>{
        console.log(formData);
    }


  return (
    <Dialog>
  <DialogTrigger asChild >{children}</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create New Course Using AI</DialogTitle>
      <DialogDescription asChild>
        <div className='flex flex-col gap-4 mt-3'>
            <div>
                <label>Course Name</label>
                <Input  placeholder='Enter your course title' 
                onChange={(event)=>onHandleInputChange ('name', event?.target.value)} 
                className='w-full border p-2 rounded-md mt-1' />
            </div>
            <div>
                <label>Course Description (optional)</label>
                <Textarea placeholder='Enter your course description'
                onChange={(event)=>onHandleInputChange ('description', event?.target.value)} 
                 className='w-full border p-2 rounded-md mt-1' />
            </div>
            <div>
                <label>No. of Chapters</label>
                <Input placeholder='Enter number of chapters' type="number" 
                onChange={(event)=>onHandleInputChange ('chapters', event?.target.value)} 
                className='w-full border p-2 rounded-md mt-1' />
            </div>
            <div className='flex  gap-3 items-center'>
                <label>Include Video</label>
                <Switch 
                onCheckedChange={()=>onHandleInputChange ('includeVideo', !formData?.includeVideo)}
                /> 
            </div>
            <div className='mb-1'>
                <label>Difficulty Level</label>
                <Select onValueChange={(value)=>onHandleInputChange ('difficulty', value)}  >
  <SelectTrigger className="w-full">
    <SelectValue placeholder="Difficulty Level" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectItem value="begineer">Beginner</SelectItem>
      <SelectItem value="intermediate">Intermediate</SelectItem>
      <SelectItem value="advanced">Advanced</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
            </div>
            <div>
                <label>Category</label>
                <Input placeholder='Category Separate by commas'
                onChange={(event)=>onHandleInputChange ('category', event?.target.value)} 
                className='w-full border p-2 rounded-md mt-1' />
            </div>
            <div className='mt-5'>
                <Button className='w-full' onClick={onGenerate}> <Sparkle /> Generate Course</Button>
            </div>
        </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
  )
}

export default AddNewCourseDialog
