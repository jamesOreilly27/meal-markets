import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchMeals } from '../../store'
import SearchPanelPresenter from '../presenters/SearchPanelPresenter'
import SearchResultsPresenter from '../presenters/SearchResultsPresenter'

class SearchContainerClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filteredMeals: []
    }
    this.handleFilters = this.handleFilters.bind(this)
  }

  componentDidMount() {
    const { fetchAllMeals, zip } = this.props
    fetchAllMeals(zip)
  }

  handleFilters(useFilter = () => true ) {
    this.setState({
      filteredMeals: this.props.meals.filter(meal => useFilter(meal))
    })
  }

  render() {
    const { allMeals } = this.props
    const { filteredMeals } = this.state
    return (
      <div>
        <SearchPanelPresenter
          handleFilters={this.handleFilters}
        />
        <SearchResultsPresenter
          allMeals={allMeals}
          filteredMeals={filteredMeals}
        />
      </div>
    )
  }
}

const mapState = state => ({
  allMeals: state.meals,
  zip: state.user.zipcode
})

const mapDispatch = dispatch => ({
  fetchAllMeals (zip) {
    dispatch(fetchMeals(zip))
  }
})

const SearchContainer = withRouter(connect(mapState, mapDispatch)(SearchContainerClass))
export default SearchContainer
