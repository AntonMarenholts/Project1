interface Props {
    avatar: string;
    name: string;
    description: string;
   
}

export default function ProfileCard (props: Props){
    const {avatar, name, description} = props;
    return (
    <div className="profile-card">
      <img src={avatar} 
      alt="User avatar"
      style={{ width: '400px', height: '400px', objectFit: 'cover' }} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}
