import React, { useState } from 'react'
import styles from "./UserProfile.module.css"
import UserCard from './UserCard'
import Courses from './Courses'

const Title = () => {
    const userInfo=[
        {
            id:1,
            name:"Chrisse",
            avatar:"https://images.unsplash.com/photo-1604866830893-c13cafa515d5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            posts: 1841,
            followers:60000,
            address:"Hyderabad"
        }

    ]
    const courses=[
        {
            id:1,
            Title1:"Full StackWEb Development",
            Title2:"Data Analytics",
            Eligibility : "18-28 yrs",
            Duration : "30weeks"
        }
    ]
    
    
    const[details, setDetails]=useState(userInfo);
    const[isFollow, setIsFollow] = useState(true);
    const[course, setCourse] = useState(courses);
   const click= () =>{
    setIsFollow(prevIsFollow => !prevIsFollow);
   }
  return (
    <div>
        <h1 className={styles.header}>User Display</h1>
        {details.map((item) =>{
            return(
                <UserCard key ={item.name} {...item} click={click} isFollow={isFollow}/>

            )
           

        })}
        {course.map((item)=>{
          return(
          
                <Courses key={item.id}{...item}/>
        
          )
        })}
        
        
    </div>
  )
}

export default Title
