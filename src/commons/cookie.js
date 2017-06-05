/**
 * Created by colus on 2016. 10. 18..
 */

export const getCookie = () => {
  let value = '; ' + document.cookie;
  let parts = value.split('; key=');

  if (parts.length === 2) {
    return JSON.parse(atob( parts.pop().split(';').shift() ));
  }
};

export const setCookie = data => document.cookie='key=' + btoa(JSON.stringify(data));
export const removeCookie = () => document.cookie='key=';