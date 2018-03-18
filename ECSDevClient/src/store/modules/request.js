// Axios call is better left in the component that implements it
// By the time the developer inserts all of the fields for a call,
// they might as well use it in their component.

export const request = {
  state: {
    appBaseUrl: 'https://localhost:44311/',
    ssoBaseUrl: 'https://sso.com/',
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:8080',
      'Access-Control-Allow-Credentials': true,
      'Accept': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNjb3R0IiwiYXBwbGljYXRpb24iOiJlY3MiLCJyb2xlVHlwZSI6InB1YmxpYyIsIm5iZiI6MTUyMTMyNjU0OSwiZXhwIjoxNTIxMzMyNTQ5LCJpYXQiOjE1MjEzMjY1NDksImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzExLyJ9.iIqc0qNIHqUI3S3JaAQIcU0gFvYHe6q2EfwI5VSN8iQ',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    }
  },
  getters: {
    getBaseAppUrl: (state) => { return state.appBaseUrl },
    getBaseSsoUrl: (state) => { return state.ssoBaseUrl },
    getRequestHeaders: (state) => { return state.headers }
  },
  mutations: {
    setAuthorizationHeader: function (state, token) {
      state.headers.Authorization = 'Bearer ' + token
    }
  },
  actions: {
    updateToken: function (context, token) {
      context.commit('setAuthorizationHeader', token)
    }
  }
}
