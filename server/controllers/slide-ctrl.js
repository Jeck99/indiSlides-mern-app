const slides= require('../models/slide-model');

module.exports = {
    // GET /
    getSlides: (req, res) => {
        slides.find()
            .then(slides=> {
                res.status(200).json(slides);
            })
            .catch(err => {
                res.status(500).json({
                    message: 'Failed to get slides',
                    error: err
                });
            });
    },
    // GET /:id
    getSlideById: (req, res) => {
        slides.findById(req.params.id)
            .then(slide => {
                res.status(200).json(slide);
            })
            .catch(err => {
                res.status(500).json({
                    message: 'Failed to get slide',
                    error: err
                });
            });
    },
    // POST /
    addSlide: (req, res) => {
        slides.create(req.body)
            .then(slide => {
                res.status(201).json(slide);
            })
            .catch(err => {
                res.status(500).json({
                    message: 'Failed to add slide',
                    error: err
                });
            });
    },
    // PUT /:id
    updateSlide: (req, res) => {
        slides.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(slide => {
                res.status(200).json(slide);
            })
            .catch(err => {
                res.status(500).json({
                    message: 'Failed to update slide',
                    error: err
                });
            });
    },
    // DELETE /:id
    deleteSlide: (req, res) => {
        slides.findByIdAndDelete(req.params.id)
            .then(() => {
                res.status(200).json({
                    message: 'Slide deleted successfully'
                });
            })
            .catch(err => {
                res.status(500).json({
                    message: 'Failed to delete slide',
                    error: err
                });
            });
    }
}