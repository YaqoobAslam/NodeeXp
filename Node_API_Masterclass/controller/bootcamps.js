// @desc    Get all bootcamps
// @route   Get /api/v1/bootcamps
// @access  public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({success: true, msg: 'Show all bootcamps'})
}

// @desc    Get all bootcamp
// @route   Get /api/v1/bootcamp/:id
// @access  public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({success: true, msg: `Show bootcamp ${req.params.id}`})
}

// @desc    Create all bootcamp
// @route   POST /api/v1/bootcamp/:id
// @access  private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Create new bootcamp'})

}

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamp/:id
// @access  private
exports.updateBootcamp = (req, res, next) => {
  
}

// @desc    Delete bootcamp
// @route   PUT /api/v1/bootcamp/:id
// @access  private
exports.updateBootcamp = (req, res, next) => {

}