const slideRoute = require('express').Router();
const {
    getSlides,
    getSlideById,
    addSlide,
    updateSlide,
    deleteSlide
} = require('../controllers/slide-ctrl');

slideRoute.get('/', getSlides);
slideRoute.get('/:id', getSlideById);
slideRoute.post('/', addSlide);
slideRoute.put('/:id', updateSlide);
slideRoute.delete('/:id', deleteSlide);

module.exports = slideRoute;