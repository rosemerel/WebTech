import React, {useState} from 'react';

export const UserProfileContext = React.createContext({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    zipCode: "",
    city: "",
    setUserProfileContext: info => {}
});

export const UserProfileContextProvider = ({children}) => {
    const userProfileState = {
        firstname: "",
        lastname: "",
        email: "",
        address: "",
        zipCode: "",
        city: "",
        setUserProfileContext: info =>
        setUserProfile(prevState => ({
            ...prevState, 
            firstname: info.firstname,
            lastname: info.lastname,
            email: info.email,
            address: info.address,
            zipCode: info.zipCode,
            city: info.city
        }))
    }
    const [userProfile, setUserProfile] = useState(userProfileState);
    return <UserProfileContext.Provider value={userProfile}>{children}</UserProfileContext.Provider>
}

export default UserProfileContextProvider;