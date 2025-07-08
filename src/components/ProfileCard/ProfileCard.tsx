import styles from './ProfileCard.module.css'
interface Props {
    avatar: string;
    name: string;
    description: string;
   
}

export default function ProfileCard (props: Props){
    const {avatar, name, description} = props;
    return (
    <div className={styles.profileCard}>
      <h2>{name}</h2>
      <img src={avatar} 
      alt="User avatar"
      style={{ width: '400px', height: '400px', objectFit: 'cover' }} />
      <p>{description}</p>
      </div>
    
  );
}
