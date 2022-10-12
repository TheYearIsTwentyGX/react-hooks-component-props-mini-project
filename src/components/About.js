import react from "react";

function About({ image, about }) {
    const img = (image == undefined || image == "") ? "https://via.placeholder.com/215" : image;
    return (
    <aside>
        <img src={img} alt="blog logo"></img>
        <p>{about}</p>
    </aside>)
}

export default About