import DateCard from '../../components/DateCard/DateCard'
import { Link } from 'react-router-dom'



const Profiles = (props) => {
	return (
		<>
			<h1>Potential Matches</h1>
			{props.profiles.length 
				? props.profiles.map(profile =>
						<Link to={`/profiles/${profile._id}`} key={profile._id} state={profile}> 
							<DateCard key={profile._id} profile={profile} />
						</Link>
					)
				: <p>No profiles yet</p>
			}
		</>
	)
}

export default Profiles