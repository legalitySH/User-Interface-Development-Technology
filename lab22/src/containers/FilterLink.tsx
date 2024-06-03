import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'
import {RootState} from "@reduxjs/toolkit/query";
import {Dispatch} from "redux";

const mapStateToProps = (state : RootState<any,any,any>, ownProps : any) => ({
    active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch : Dispatch, ownProps : any)  => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)