import asyncHandler from 'express-async-handler';

// @desc Create a link
// @route POST /api/link
// @acess Private/Admin
const createLink = asyncHandler(async (req, res) => {
  console.log('asdasd');
  res.send('asdsadsad');
});

export { createLink };
