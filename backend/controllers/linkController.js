import asyncHandler from 'express-async-handler';
import metascraper0 from 'metascraper';
import ms_image from 'metascraper-image';
// import ms_logo from 'metascraper-logo';
// import ms_title from 'metascraper-title';
// import ms_lang from 'metascraper-clearbit';
// import ms_favicon from 'metascraper-logo-favicon';

import got from 'got';

const metascraper = metascraper0([ms_image()]);
// @desc Create a link
// @route POST /api/link
// @acess Private/Admin
const createLink = asyncHandler(async (req, res) => {
  const { link } = req.body;
  const targetUrl = `${link}`;

  const { body: html, url } = await got(targetUrl);
  const metadata = await metascraper({ html, url });
  console.log(metadata);

  res.send(link);
});

export { createLink };
