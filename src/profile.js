import React, { Component } from 'react';
import Girl from './image/girl.png';

class Profile extends Component {
  state = {
    Person: {
      fullName: 'Emna Cheibi',
      bio: 'Enginneer',
      imgSrc: Girl,
      profession: 'Web developper',
    },
    show: true,
  };

  handleShowPerson = () => this.setState({ show: !this.state.show });

  render() {
    return (
      <div>
        {' '}
        {this.state.show && (
          <div>
            <h2>fullName : {this.state.Person.fullName}</h2>
            <h2>bio : {this.state.Person.bio}</h2>
            <img
              src={this.state.Person.imgSrc}
              alt=''
              style={{ width: '150px', height: '150px' }}
            />
            <h2>Profession : {this.state.Person.profession}</h2>
          </div>
        )}
        <button onClick={this.handleShowPerson}>
          {this.state.show ? 'show the profile' : 'hide the profile'}
        </button>
      </div>
    );
  }
}

export default Profile;
