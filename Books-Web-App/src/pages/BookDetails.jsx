import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import aws from "../assets/aws.webp";
import apple from "../assets/Apple-Books-icon.png";
import favoriteicon from "../assets/favorite.png";
import readicon from "../assets/book.svg";
function BookDetails() {
    const { id } = useParams();
    const [book, setBook] = React.useState({
        image: "",
        author: "",
        Sellers: ["", ""],
    });
    // console.log(abilities);
    useEffect(() => {
        axios
            .get(`https://656e1da0bcc5618d3c248cea.mockapi.io/Books`)
            .then((res) => {
                const data = res.data.find((item) => {
                    return item.id === id;
                });
                console.log(data);
                setBook({ image: data.book_image, author: data.author, Sellers: data.buy_links });

                // setAbilities(res.data.abilities);
            });
    }, []);
    const favorite = (e) => {
        axios.post(`https://656e1da0bcc5618d3c248cea.mockapi.io/favorites`, {
            userID: "",
            favorite:"", 
        })
    };
    const readed = (e) => {
        console.log("readed");
    }
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="card w-[40rem] bg-base-100 shadow-xl flex flex-col items-center gap-3">
                <figure className="px-10 pt-10">
                    <img src={book.image} alt="Shoes" className="h-56" />
                </figure>
                <h2 className="text-center card-title">author: {book.author}</h2>
                <div className="flex flex-row  card-body items-center ">
                    <a href={book.Sellers[0].url} className=""><img className="w-10" src={aws} alt="" /></a>
                    <a href={book.Sellers[1].url} className=""><img className="w-10" src={apple} alt="" /></a>
                </div>
                <div className="flex flex-row  card-body items-center ">
                    <button onClick={favorite} className=""><img className="w-10" src={favoriteicon} alt="" /></button>
                    <button onClick={readed}  className=""><img className="w-10 rounded-full " src={readicon} alt="" /></button>
                </div>
            </div>
        </div>
    );
}

export default BookDetails;
