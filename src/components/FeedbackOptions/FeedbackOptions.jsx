import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';


import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	buttons: {
		display: 'flex',
	},
	button: {
		margin: 5,
		'&:hover': {
		backgroundColor: 'blue',
		},
	},
});


const FeedbackOptions = ({ todos, onLeaveFeedback }) => {
	 const classes = useStyles();
	return (
		<div className={classes.buttons}>
			{todos.map((todo) => (
				<button key={nanoid()} type="button" name={todo} onClick={onLeaveFeedback} className={classes.button}>
					{todo[0].toUpperCase() + todo.slice(1)}
				</button>
			))}
		</div>
	);
};

FeedbackOptions.propTypes = {
	todos: PropTypes.array.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;