import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import _compact from 'lodash/compact';

import classNames from 'classnames';

class FadeRotator extends React.Component {
	state = {
		currentIndex: 0
	};

  static getDerivedStateFromProps (props, state) {
    return {
      children: _compact(props.children)
    };
  }

	componentDidMount() {
		this.setRotator();
	}

	componentWillUnmount() {
		if (this.interval) {
			clearInterval(this.interval);
		}
	}

	setRotator() {
		if (this.interval) {
			clearInterval(this.interval);
		}

		this.interval = () => {
			const { currentIndex, children } = this.state;

			if (children.length < 1) {
				return false;
			}

			if (children.length === 1) {
				if (currentIndex !== 0) {
					this.setState(prevState => ({
						currentIndex: 0
					}));
				}

				return false;
			}

			this.setState((prevState) => {
				const { currentIndex } = prevState;
				const atEnd = currentIndex >= prevState.children.length - 1;

				return {
					...prevState,
					currentIndex: atEnd ? 0 : currentIndex + 1
				};
			});
		};

		setInterval(this.interval, 10000);
	}

	render() {
		const { classes, className, ...restOfProps } = this.props;
		const { currentIndex, children } = this.state;

		return (
			<div className={classNames(classes.root, className)} {...restOfProps}>
				{children.map((child, index) => (
					<div
            key={index}
						className={classNames(classes.item, {
							[classes.hidden]: currentIndex !== index
						})}
					>
						{child}
					</div>
				))}
			</div>
		);
	}
}

const styles = {
	root: {
		position: 'relative'
	},
	item: {
		position: 'absolute',
		top: 0,
		left: 0,
    right: 0,
    bottom: 0,
		transition: 'opacity 2s ease-in',
		opacity: 1
	},
	hidden: {
		opacity: 0,
    transition: 'opacity 2s ease-out',
	}
};

export default withStyles(styles)(FadeRotator);
