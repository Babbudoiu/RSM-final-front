import React from 'react';
import { Link } from 'react-router-dom';

export const Tables = ({setTable}) => {

    return (
     <div>
        <div className="tables">
        <div>
            <Link to="/taborder" >
                <button 
                onClick={() => {
                    setTable("1")
                }}
                type="button">Table1</button>
            </Link>
            <Link to="/taborder" >
                <button onClick={() => {
                    setTable("2")
                }} type="button">Table2</button>
            </Link>
            <Link to="/taborder" >
                <button onClick={() => {
                    setTable("3")
                }}
                 type="button">Table3</button>
            </Link>
        </div>
        <div>
           <Link to="/taborder" >
                <button onClick={() => {
                    setTable("4")
                }} type="button">Table4</button>
            </Link>
            <Link to="/taborder" >
                <button onClick={() => {
                    setTable("5")
                }} type="button">Table5</button>
            </Link>
            <Link to="/taborder" >
                <button onClick={() => {
                    setTable("6")
                }} type="button">Table6</button>
            </Link>
        </div>
        <div>
            <Link to="/taborder" >
                <button onClick={() => {
                    setTable("7")
                }} type="button">Table7</button>
            </Link>
            <Link to="/taborder" >
                <button onClick={() => {
                    setTable("8")
                }} type="button">Table8</button>
            </Link>
            <Link to="/taborder" >
                <button onClick={() => {
                    setTable("9")
                }} type="button">Table9</button>
            </Link>
        </div>
        </div>
    </div>
    )
}

export default Tables;