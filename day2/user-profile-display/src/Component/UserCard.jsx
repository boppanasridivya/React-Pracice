import React from 'react'
import styles from "./UserProfile.module.css"

const UserCard = ({name,address,avatar,posts,followers,click,isFollow}) => {
   
  return (
    <div className={styles.card}>
        <div className={styles.myImage}>
            <img src={avatar} alt="avatar"></img>
        </div>
        <div>
        <div>
        <h2 className={styles.myName}>{name}</h2>
        </div>
       <div> 
        <p className={styles.myName}>4018 Sachs Trail</p>
       </div>
       
        <p className={styles.myName}>{address}</p>
        <div className={styles.postsFollowers}>
        <div>
        <h3>Posts</h3>
        <p>{posts}</p>
        </div>
         <div>
         <h3>Followers</h3>
         <p>{followers}</p>
         </div>

        </div>
        </div>

    
        <div>
            <button className={styles.btn} onClick={click}>
                {isFollow ? "Follow" : "UnFollow"};
            </button>
        </div>
        
    </div>
  )
}

export default UserCard
