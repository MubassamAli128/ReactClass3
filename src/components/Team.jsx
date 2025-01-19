import React from 'react'
import Title from './Title'
import Input from './Input'
import Button from './Button'
import { FiPlusCircle } from "react-icons/fi";

function Team(props) {

    const handleTeam=(event)=>{
        if(event.target.id=="cancel"){
            localStorage.setItem('currentPage',"WelcomePage")
            window.location.reload();
        }
    }


  return (
    <div className='w-full md:w-[500px] bg-[#f9f8fe] rounded-2xl py-10 px-4'>
        <Title text="Invite your team"/>
        <p className="text-center text-gray-400">Start collaborating on this new project.</p>
        <Input changeinput={props.changeinput} inputValue={props.email} name="team" title="Email" type="email" placeholder="Email address"/>
        <Input changeinput={props.changeinput} inputValue={props.email} name="team" title="Email" type="email" placeholder="Email address"/>
        <Input changeinput={props.changeinput} inputValue={props.email} name="team" title="Email" type="email" placeholder="Email address"/>
        <Button id="Add" icon={<FiPlusCircle/>} text="Add another" bgColor="bg-transparent font-semibold text-[#6131f0]" border="border-transparent mt-3" onClick={handleTeam}/>
        <hr className='border border-gray-300 mt-2'/>
        <div className="flex items-center justify-between mt-5 w-full">
            <Button id="cancel" text="Cancel" bgColor="bg-transparent font-semibold" border="border-gray-400" onClick={handleTeam} inputValue={""} />
            <Button id="next" text="Send invites" color="text-white" bgColor="bg-[#8359fd] font-semibold" border="border-gray-400" onClick={handleTeam} />
        </div>

    </div>
  )
}

export default Team