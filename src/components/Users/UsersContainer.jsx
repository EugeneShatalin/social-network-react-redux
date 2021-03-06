import React from 'react';
import {
    followSuccess,
    unfollowSuccess,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return (<>
                {this.props.isFetching ? <Preloader/> : null}
                <Users onPageChanged={this.onPageChanged}
                       totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                       followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

export default compose(
    withAuthRedirect,
    //connect функция из react-redux, которая создает контейнеруную компаненту для
    // передачи и получения данных из store через контекст созданный в index.js с
    // помощью <Provider store={store}>
    connect(mapStateToProps,
        {//обьект с экшенкриэйторами
            follow: followSuccess,
            unfollow: unfollowSuccess,
            setCurrentPage,
            toggleFollowingProgress,
            getUsers
        })
)(UsersContainer);