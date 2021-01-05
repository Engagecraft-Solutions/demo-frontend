import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import env from 'env';
import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

function Header() {
  const [get, setGet] = useState([]);
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch(`${env.APIUrlGet}`, {
      headers: {
        Accept: 'application/json',
      },
    })
      .then(res => (res.ok ? res.json() : setGet([])))
      .then(result => {
        if (result && result) {
          return setGet(result);
        }
        return setGet([]);
      });
  }, []);

  useEffect(() => {
    fetch(`${env.APIUrlPost}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({"title":"Frontend title to API and back"}),
    })
      .then(res => (res.ok ? res.json() : setPost([])))
      .then(result => {
        if (result && result) {
          return setPost(result);
        }
        return setPost([]);
      });
  }, []);

  return (
    <div>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/features">
          <FormattedMessage {...messages.features} />
        </HeaderLink>
      </NavBar>
      GET API DATA
      {JSON.stringify(get)}
      <br />
      POST API DATA
      {JSON.stringify(post)}
    </div>
  );
}

export default Header;
