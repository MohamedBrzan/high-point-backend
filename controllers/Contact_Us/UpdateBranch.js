const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const ContactUs = require('../../models/Contact_Us/Contact_Us');

module.exports = AsyncHandler(async (req, res, next) => {
  const {
    contact_schema_us_id,
    branch_value,
    branch_value_ar,
    new_branch_value,
    new_branch_value_ar,
  } = req.body;

  let contactUs = await ContactUs.findById(contact_schema_us_id);

  if (!contactUs)
    return next(new ErrorHandler(`${req.t('contact_us_schema_error')}`, 404));

  let findBranchIndex = contactUs.branches.findIndex(
    (branch) => branch.toLowerCase() === branch_value.toLowerCase()
  );

  let findBranchArIndex = contactUs.branches_ar.findIndex(
    (branch) => branch.toLowerCase() === branch_value_ar.toLowerCase()
  );

  if (findBranchIndex !== -1 && findBranchArIndex !== -1) {
    contactUs.branches.fill(
      new_branch_value,
      findBranchIndex,
      findBranchIndex + 1
    );
    contactUs.branches_ar.fill(
      new_branch_value_ar,
      findBranchArIndex,
      findBranchArIndex + 1
    );

    await contactUs.save();
    return res.json(contactUs);
  } else {
    return res.json({ message: `${req.t('branches_not_found')}` });
  }
});
