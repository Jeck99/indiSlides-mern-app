const BASIC_API = process.env.NODE_ENV === 'production' ?
    'https://indi-edc-app.onrender.com' : 'http://localhost:4002';

export const getAllSlides = async () => {
    return await fetch(`${BASIC_API}/students`)
        .then(res => res.json());
}
export const getSlideById = async (id) => {
    return await fetch(`${BASIC_API}/students/${id}`)
        .then(res => res.json());
}
