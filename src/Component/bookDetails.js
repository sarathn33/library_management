import React from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../baseApp";
import { AppState } from "../Context/AppProvider";

export default function BookDetails(){
    const{book,setBook}= AppState()
    const history = useHistory()
    const deleteBook = (id) =>{
        const alterData = book.filter((data)=>{
            return data.id !== id
        })
        setBook(alterData)
    }
    return (
      <BaseApp>
        <div className="card-container">
          {book.map((data,index)=>{
            return (
              <div className="card" key={index}>
                <div className="img-container">
                  <img src={data.image} alt="Book"></img>
                </div>
                <div className="book-details">
                  <div>
                    <h3>{data.name}</h3>
                    <p>by {data.author}</p>
                    <p className="description">{data.description}</p>
                  </div>

                  <div>
                    <button onClick={()=>history.push(`/book/edit/${data.id}`)} type="button" className="btn btn-primary">
                      Edit
                    </button>
                    {"   "}
                    <button onClick={()=>deleteBook(data.id)} type="button" className="btn btn-primary">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </BaseApp>
    );
}