const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const ContactUs = require('../../models/Contact_Us/Contact_Us');

module.exports = AsyncHandler(async (req, res, next) => {
  const { contact_schema_us_id, branch_value, branch_value_ar } = req.body;

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
    contactUs = await ContactUs.findByIdAndUpdate(
      contact_schema_us_id,
      {
        $pull: {
          branches: branch_value,
          branches_ar: branch_value_ar,
        },
      },
      {
        new: true,
        runValidators: true,
      }
    );

    return res.json(contactUs);
  } else {
    return res.json({ message: `${req.t('branches_not_found')}` });
  }
});
