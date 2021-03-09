import axios from 'axios';
import asyncHandler from 'express-async-handler';
import metascraper0 from 'metascraper';
import ms_image from 'metascraper-image';
import ms_title from 'metascraper-title';
import ms_logo from 'metascraper-logo';
import ms_clearbit from 'metascraper-clearbit';
import ms_favicon from 'metascraper-logo-favicon';

// @desc Create a link
// @route POST /api/link
// @acess Private/Admin
const createLink = asyncHandler(async (req, res) => {
  const metascraper = metascraper0([ms_image(), ms_title(), ms_logo(), ms_clearbit(), ms_favicon()]);
  const { link } = req.body;

  const regex = new RegExp('^(http|https)://');
  const urLink = link.match(regex) ? link : `https://${link}`;

  try {
    const {
      data: html,
      config: { url },
    } = await axios(urLink);
    const metadata = await metascraper({ html, url });
    res.send(metadata);
  } catch (error) {
    res.status(400);
    throw new Error('Invaild url');
  }
});

export { createLink };
