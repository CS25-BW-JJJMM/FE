import  React, {useSate} from 'react';
import axios from "axios"


const initalState = {
   username:"",
   email:"",
   password1:"",
   password2:""

}

const SignUp = (props) => {
    const [users, setUsers] =useSate({initalState});

    const handleChange = (e) => {
        setUsers({...users, [e.target.name]: e.target.value })
    }

    
    return(
        
            <form>
               <input>
               type="text"
			   name="username"
			   placeholder="Username"
			   onChange={handleChange}
			   value={users.username}
               </input> 
               <input> 
               type="email"
			   name="email"
			   placeholder="Email"
			   onChange={handleChange}
			   value={users.email}  
               </input>
               <input>
               type="password"
			   name="password"
			   placeholder="password"
			   onChange={handleChange}
			   value={users.password1}
               </input>
               <input>
               type="password"
			   name="re-password"
			   placeholder="password"
			   onChange={handleChange}
			   value={users.password2}
               </input>

               <button type="submit">
				Sign Up
			   </button>
            </form>
      
    )
}

export default SignUp;



