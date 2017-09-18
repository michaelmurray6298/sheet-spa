/* eslint-disable import/no-named-as-default, no-shadow, consistent-return */
import React from 'react';
import { Grid, Card, Button } from 'semantic-ui-react';

import './Login.css';

export const Login = () => {


  const GOOGLE_AUTH_URL = process.env.REACT_APP_GOOGLE_AUTH_URL;
    return (
      <Grid verticalAlign={'middle'}>
        <Grid.Row centered verticalAlign={'middle'}>
          <Grid.Column centered verticalAlign={'middle'}>
            <Card raised centered className="island">
              <Card.Content>
                <Button
                  as="a"
                  href={`${GOOGLE_AUTH_URL}`}
                  className="butterButton"
                  size="large"
                  content="Login with Google"
                  icon="google"
                />
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );

}


export default Login;
