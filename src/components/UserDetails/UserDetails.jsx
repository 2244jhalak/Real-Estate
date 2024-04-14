
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const UserDetails = () => {
    const { user,setUser} = useContext(AuthContext);
    const [displayName, setDisplayName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [email,setEmail]=useState("")
    const [isEditing, setIsEditing] = useState(false);

    // useEffect to set initial state when user object is available
    useEffect(() => {
        if (user) {
            setDisplayName(user.displayName || "");
            setPhotoURL(user.photoURL || "");
            setEmail(user.email || "");
        }
    }, [user]);

    // Function to handle form submission and update user profile
    const handleSubmit = async (e) => {
        
        e.preventDefault();
        try {
            await updateProfile(auth.currentUser, {
                displayName: displayName,
                email:email,
                photoURL: photoURL
                
            });
            setUser({ ...user, displayName: displayName,email:email, photoURL: photoURL });
            console.log('Profile updated successfully');
            setIsEditing(false); // Disable editing mode after saving
            
        } catch (error) {
            console.log('Error updating profile:', error);
        }
    };
    

    return (
        <div className="text-center my-10">
            <h2 className="text-3xl font-bold">User Profile</h2>
            <div className="mt-5 flex items-center justify-center border-2 mx-[450px] py-5 rounded-lg border-black">
            {user && (
                <form onSubmit={handleSubmit}>
                    <label>
                        Name : 
                        <input
                            className="mb-3 font-semibold"
                            type="text"
                            value= {displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                            disabled={!isEditing} // Enable input field when editing
                        />
                    </label>
                    <br />
                    <label>
                        Email :
                        <input
                            className="mb-3 font-semibold"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={!isEditing} // Enable input field when editing
                        />
                    </label>
                    <br />
                    <label>
                        Photo URL:
                        <input
                            className="mb-3 font-semibold"
                            type="text"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            disabled={!isEditing} // Enable input field when editing
                        />
                    </label>
                    <br />
                    {isEditing ? (
                        <>
                            <button className="btn btn-outline" type="submit">Save Changes</button>
                            
                        </>
                    ) : (
                        <button className="btn btn-outline" onClick={() => setIsEditing(true)}>Edit Profile</button>
                    )}
                </form>
            )}
            </div>   
        </div>
    );
};

export default UserDetails;
