import React, { Component } from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';

export class {{pascalCased}}List extends Component {
  render() {
    const props = this.props;

    return (
      <List {...props}>
        <Datagrid>
          <TextField source="id" />
          <TextField source="title" />
        </Datagrid>
      </List>
    );
  }
}
