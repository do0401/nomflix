import React from 'react';
import SearchPresenter from './SearchPresenter';

export default class extends React.Component {
	state = {
		movieResults: null,
		tvResults: null,
		seachTerm: '',
		error: null,
		loading: false
	};

	render() {
		const { movieResults, tvResults, seachTerm, error, loading } = this.state;
		return (
			<SearchPresenter
				movieResults={movieResults}
				tvResults={tvResults}
				seachTerm={seachTerm}
				error={error}
				loaidng={loading}
			/>
		);
	}
}
