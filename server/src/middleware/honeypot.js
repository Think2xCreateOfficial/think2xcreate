const honeypot = (req, res, next) => {
  const { website, confirm_email, phone2 } = req.body;
  
  // If any honeypot field is filled, reject as bot
  if (website || confirm_email || phone2) {
    return res.status(400).json({
      success: false,
      message: 'Invalid request',
    });
  }
  
  next();
};

module.exports = {
  honeypot
}