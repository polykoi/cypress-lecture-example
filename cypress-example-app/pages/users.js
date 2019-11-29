// This is stubbed list component to show of examples of Cypress tests
// It is not an example here, never write components like this.

import React from 'react';

import { Row, Col, List } from 'antd';
import 'antd/dist/antd.css';

const ADMIN_ROLE = 'admin';

const usersResponseMock = [
  {
    id: 1,
    role: 'admin',
    firstName: 'Whitney',
    lastName: 'Ward',
    isActive: true
  },
  {
    id: 2,
    role: 'user',
    firstName: 'Anna',
    lastName: 'Edwards',
    isActive: true
  },
  {
    id: 3,
    role: 'user',
    firstName: 'Terry',
    lastName: 'Gibbs',
    isActive: true
  },
  {
    id: 4,
    role: 'user',
    firstName: 'Kevin',
    lastName: 'Perry',
    isActive: true
  },
  {
    id: 5,
    role: 'user',
    firstName: 'Gerardo',
    lastName: 'Palmer',
    isActive: true
  },
];

class Users extends React.Component {
  state = {
    users: [],
  };

  componentDidMount = () => {
    console.log('componentDidMount')
    this.fetchUsers();
  };

  fetchUsers = async () => {
    // simulate network request
    const users = await new Promise(resolve => setTimeout(() => resolve(usersResponseMock), 500));

    this.setState({ users });
  }

  makeDeleteHandler = userId => () => {
    // simulate removal
    this.setState(prevState => ({ users: prevState.users.filter(user => user.id !== userId) }) );
  };

  render = () => (
    <Row>
      <Col span={12} offset={6}>
        <h1>
           {`Users ${this.state.users.length}`}
        </h1>
        <List
          className="user-list"
          itemLayout="horizontal"
          dataSource={this.state.users}
          renderItem={item => (
            <List.Item
              actions={
                item.role === ADMIN_ROLE
                ? []
                : [
                  <a
                    key="user-list-delete"
                    data-cy="delete-user"
                    onClick={this.makeDeleteHandler(item.id)}
                  >
                    Delete
                  </a>
                  ]
              }
            >
              <List.Item.Meta
                title={`${item.firstName} ${item.lastName}`}
                description={item.role === ADMIN_ROLE ? item.role : '' }
              />
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
}

export default Users;
