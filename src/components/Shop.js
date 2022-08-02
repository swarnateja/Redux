import { Component } from "react";
import { connect } from "react-redux";
import { buyLaptop, buyMobile, fetchUsers } from "../redux/actions";
import "./Styles.css";
class Shop extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Shop</h1>
        <div className="item">
          <p>Laptops</p>
          <p>Available Count {this.props.numOfLaptops}</p>
          <button className="button" onClick={this.props.buyLaptop}>
            Buy
          </button>
        </div>
        <div className="item">
          <p>Mobiles</p>
          <p>Available Count {this.props.numOfMobiles}</p>
          <button className="button" onClick={this.props.buyMobile}>
            Buy
          </button>
        </div>
        <div className="item">
          <p>Users</p>
          <p>Available Count {this.props.users.length}</p>
          <button className="button" onClick={this.props.fetchUsers}>
            API Call
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    numOfLaptops: state.laptop.numOfLaptops,
    numOfMobiles: state.mobile.numOfMobiles,
    users: state.users.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyLaptop: () => dispatch(buyLaptop()),
    buyMobile: () => dispatch(buyMobile()),
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
