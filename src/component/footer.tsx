type Footer = {
    copyright : string;
}

const Footer = ({copyright}:Footer) =>{
    return(
        <p className='text-center text-gray-500 font-family pt-6 font-mono'>{copyright}</p>
    )
}

export default Footer;