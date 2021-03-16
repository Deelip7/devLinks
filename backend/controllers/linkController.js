import axios from 'axios';
import asyncHandler from 'express-async-handler';
import metascraper0 from 'metascraper';
import ms_image from 'metascraper-image';
import ms_title from 'metascraper-title';
import ms_logo from 'metascraper-logo';
import ms_clearbit from 'metascraper-clearbit';
import ms_favicon from 'metascraper-logo-favicon';
import Link from '../models/linkModel.js';

// @desc Get all links
// @route GET /api/link
// @access Public
const listLinks = asyncHandler(async (req, res) => {
  const link = await Link.find({});
  if (link) {
    res.json(link);
  } else {
    res.status(400);
    throw new Error('Links not found');
  }
});

// @desc Create a link
// @route POST /api/link
// @access Private/Admin
const createLink = asyncHandler(async (req, res) => {
  const metascraper = metascraper0([ms_image(), ms_title(), ms_logo(), ms_clearbit(), ms_favicon()]);
  const { link } = req.body;

  const regex = new RegExp('^(http|https)://www.');
  const urlLink = link.match(regex) ? link : 'no';

  console.log(urlLink);
  try {
    const {
      data: html,
      config: { url },
    } = await axios(urlLink);
    const metadata = await metascraper({ html, url });
    const { image, title, logo } = metadata;

    const linkExist = await Link.findOne({ url });
    if (linkExist) {
      res.status(400);
      throw new Error('Link already Exists');
    }
    const link = new Link({
      title,
      url,
      logo,
      image,
    });

    const createLink = await link.save();
    res.status(200).json(createLink);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

export { listLinks, createLink };
