import React, { Component } from 'react'


class NavLeft extends Component {
  state = {
    dropdownAccount: "0", dropdownMenuItem1: "0", dropdownMenuItem2: "0", dropdownWholeMenu: "0"
  }
  dropdownAccount = () => {
    this.setState({
      dropdownAccount: this.state.dropdownAccount == 0 ? "120px" : "0"
    })
  }
  dropdownMenuItem1= () => {
    this.setState({
      dropdownMenuItem1: this.state.dropdownMenuItem1 == 0 ? "640px" : "0"
    })
  }
  dropdownMenuItem2= () => {
    this.setState({
      dropdownMenuItem2: this.state.dropdownMenuItem2 == 0 ? "300px" : "0"
    })
  }
  dropdownWholeMenu= () => {
    this.setState({
      dropdownWholeMenu: this.state.dropdownWholeMenu == 0 ? "-280px" : "0"
    })
  }
  render() {

    return (
      <nav style={{left: this.state.dropdownWholeMenu}}>

        <div className="togglemenu" onClick={this.dropdownWholeMenu}>
            { this.state.dropdownWholeMenu !== "0" ?
            <div className="dot" style={{right: "-80px",backgroundColor: "rgba(235, 235, 235, 0.9)"}}><i className="fas fa-bars" style={{color: "black"}}></i></div> : <div className="dot"><i className="fas fa-chevron-circle-left"></i></div>}
        </div>
        <div className="right-navbar">

          
          <div className="logo">
              <h1>WatchOnline.tv</h1>
          </div>

          <div className="account">
            <div className="dropdown-item">
                <div className="dropdown" onClick={this.dropdownAccount}>
                    <i className="fas fa-user-circle"></i> 
                    <p>Kamil Moskal</p>
                    {this.state.dropdownAccount == 0 ? <i className="fas fa-angle-down"></i> : <i className="fas fa-angle-up"></i>}

                </div>
                <ul style={{height: this.state.dropdownAccount}}>
                  <li>Account</li>
                  <li>Favourites</li>
                  <li>Log out</li>
                </ul>
              </div>
          </div>

          <div className="menu">

                <div className="no-dropdown-item">
                  <i className="fas fa-columns"></i>
                  <p>Home</p>
                </div>

                <div className="dropdown-item">
                    <div className="dropdown active" onClick={this.dropdownMenuItem1}>
                        <i className="fas fa-film"></i>
                        <p>Movies</p>
                        {this.state.dropdownMenuItem1 == 0 ? <i className="fas fa-angle-down"></i> : <i className="fas fa-angle-up"></i>}
                    </div>
                      <ul style={{height: this.state.dropdownMenuItem1}}>
                        <li>Action</li>
                        <li>Biografy</li>
                        <li>Drama</li>
                        <li>Fantasy</li>
                        <li>Horror</li>
                        <li>Comedy</li>
                        <li>Musical</li>
                        <li>Sci-Fi</li>
                        <li>Sport</li>
                        <li>Military</li>
                        <li>Anime</li>
                        <li>Family</li>
                        <li>Dokumentary</li>
                        <li>Disaster</li>
                        <li>Thriller</li>
                        <li>Costiume</li>
                        <li>Adventure</li>
                      </ul>
                </div>

                <div className="dropdown-item">
                    <div className="dropdown" onClick={this.dropdownMenuItem2}>
                        <i className="fas fa-desktop"></i>
                        <p>Tv-shows</p>
                        {this.state.dropdownMenuItem2 == 0 ? <i className="fas fa-angle-down"></i> : <i className="fas fa-angle-up"></i>}
                    </div>
                      <ul style={{height: this.state.dropdownMenuItem2}}>
                        <li>Action</li>
                        <li>Biografy</li>
                        <li>Drama</li>
                        <li>Fantasy</li>
                        <li>Horror</li>
                        <li>Comedy</li>
                        <li>Musical</li>
                        <li>Sci-Fi</li>
                      </ul>
                </div>

                <div className="no-dropdown-item">
                  <i className="fas fa-burn"></i>
                  <p>Premiere</p>
                </div>
               
          </div>
    
        </div>
      </nav>
    )
  }
}

export default NavLeft
