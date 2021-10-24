import React from "react";
import { Card, CardBody } from "reactstrap";


const UserCard =({user})=>{

     return(
         <Card className="text-center mt-3 mb-4">
             <img src={user.avatar_url} className="img-thumbnail" alt="profine-img"/>
             <CardBody>
                 <div className="text-primary">{user.name}</div>
                 <div className="text-primary">{user.locaiton}</div>
                 <div className="text-primary">{user.bio}</div>
                 <div className="text-info">Availabe for hire :{user.hireable ? "YES":"NO"}</div>
                 <div className="text-info">Followers :{user.followers}</div>
             </CardBody>

         </Card>
     )
}

export default UserCard;