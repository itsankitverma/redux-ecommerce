import React from 'react'
import { useRouter } from "next/router";

const Profile = () => {
    const router = useRouter()
    const name = router.query.profile
    return (
        <div>name is - {name}</div>
    )
}

export default Profile