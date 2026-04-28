import axios from "axios"
import {useEffect, useState} from "react"
import {jwtDecode} from "jwt-decode" // remove curly bracs

function Profile() {
    const [currentUser, setCurrentUser] = useState({})
    const token = localStorage.getItem("token")
    const tokenDecoded = jwtDecode(token)
    const userId = tokenDecoded.userId



    // npm i jwt-decode


    useEffect(() => {
        const getUser = async() => {
            const res = await axios.get(`https://my-website-prdg.onrender.com/users/${userId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            setCurrentUser(res.data)
        }
    }, [token, userId])

    return (
        <div>
            <p>Name: {currentUser.username}</p>
            <p>Age: {currentUser.age}</p>
            <p>Email: {currentUser.email}</p>
        </div>
    )
}

export default Profile