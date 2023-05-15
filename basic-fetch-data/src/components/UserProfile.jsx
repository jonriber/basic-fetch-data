/* eslint-disable react/prop-types */
const UserProfile = ({data}) => {
    return(
        <>
            <h4>Welcome {data.name.title} {data.name.first}</h4>
            <h5>{data.email}</h5>
            <img src={data.picture.large} alt="profile-picture"/>
        </>
    )
}

export default UserProfile