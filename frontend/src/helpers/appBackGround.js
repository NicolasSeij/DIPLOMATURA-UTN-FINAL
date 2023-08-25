import img from '../images/backHome.jpg'

export const appBackGround = (page) => {

    if(page === '/'){
        return (`linear-gradient(rgb(20,23,28,0.75), rgb(20,23,28,0.75)), url(${img})`);
    }
    else
    {
        return ('var(--claro)');
    }
}