function getGoogleOAuthUrl() {
  const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth'
  
  const options = {
    redirect_uri: import.meta.env.VITE_OAUTH_REDIRECT_URL,
    client_id: import.meta.env.VITE_CLIENT_ID,
    access_type: 'offline',
    response_type: 'code',
    prompt: 'consent',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ].join(" ")
  }

  console.log({options})

  const queryString = new URLSearchParams(options)

  console.log({queryString})

  return `${rootUrl}?${queryString.toString()}`
}

export default getGoogleOAuthUrl
