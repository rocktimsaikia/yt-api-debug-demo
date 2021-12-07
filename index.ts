import { google } from 'googleapis';

(async () => {
  const oauth2Client = new google.auth.OAuth2({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  });
  oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

  const yt = google.youtube({ auth: oauth2Client, version: 'v3' });
  const response = await yt.videos.list({
    id: 'I4wRB7NujEY',
    part: 'statistics,snippet',
  });

  return response.data.items[0].snippet?.title;
})();
