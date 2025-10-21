import './UserCard.css'

function UserCard(props) {

    const defaultAvatar = 'https://placehold.co/128?text=no+photo'

    return (
        <li className='user-card'>
            <img className='user-card__avatar' src={props.user.avatar || defaultAvatar} alt={props.user.name}/>
            <p className='user-card__name'>Name: {props.user.name}</p>
            <p className='user-card__age'>Age:{`${props.user.age < 18 && ' 🔞'} ${props.user.age}`}</p>
            <p className='user-card__email'>Email: {props.user.email}</p>
        </li>
    );
}

export default UserCard;