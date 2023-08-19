import React, { Component } from 'react';
import axios from 'axios';
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm';
class Home extends Component  {
    // const [workouts, setWorkouts] = useState(null);
    // useEffect(() => {
    //     const fetchWorkouts = async () => {
    //         const response = await fetch('/api/workouts')
    //         const json = await response.json()

    //         if (response.ok) {
    //             setWorkouts(json);
    //         }
    //     }
    //     fetchWorkouts()
    // }, [])
    constructor(props) {
        super(props);

        this.state = {
            workouts: [],
       };
    }

    componentDidMount() {
        axios.get('/api/workouts')
            .then(response => {
                this.setState({ workouts: response.data });
            })
            .catch(error => {
                console.error('Error fetching workouts:', error);
            });
        console.log('state.workouts: ', this.state.workouts);
    }
    componentDidUpdate() {
        axios.get('/api/workouts')
            .then(response => {
                this.setState({ workouts: response.data });
            })
            .catch(error => {
                console.error('Error fetching workouts:', error);
            });
        console.log('componentDidUpdate: ', this.state.workouts);
    }

    render() {return (
        <div className="home">
            <div className="workouts">
            {this.state.workouts.map((workout) => (
                        <WorkoutDetails key={workout._id} workout={workout} />
                    ))}
            </div>
            <WorkoutForm/>
        </div>
    )}
}

export default Home;