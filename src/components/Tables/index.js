import React from 'react';
import { Link } from 'react-router-dom';
import Table1 from '../../Chairs/Table1.png';
import Table2 from '../../Chairs/Table2.png';
import Table3 from '../../Chairs/Table3.png';
import Table4 from '../../Chairs/Table4.png';
import Table5 from '../../Chairs/Table5.png';
import Table6 from '../../Chairs/Table6.png';
import Table7 from '../../Chairs/Table7.png';
import Table8 from '../../Chairs/Table8.png';
import Table9 from '../../Chairs/Table9.png';

export const Tables = ({setTable}) => {

    return (
     <div>
        <div className="tables">
        <div>
            
            <Link to="/taborder" >
                     <img className = "tablePics" src={Table1} alt="table for 2"
                     onClick={() => {
                    setTable("1")
                }}></img>
            </Link>
            <Link to="/taborder" >
                    <img className = "tablePics" src={Table2} alt="table for 4"
                    onClick={() => {
                   setTable("2")
               }}></img>
           </Link>
           <Link to="/taborder" >
                    <img className = "tablePics" src={Table3} alt="table for 4"
                    onClick={() => {
                   setTable("3")
               }}></img>
           </Link>
        </div>
        <div>
        <Link to="/taborder" >
                    <img className = "tablePics" src={Table4} alt="table for 6"
                    onClick={() => {
                   setTable("4")
               }}></img>
           </Link>
           <Link to="/taborder" >
                    <img className = "tablePics" src={Table5} alt="table for 2"
                    onClick={() => {
                   setTable("5")
               }}></img>
           </Link>
           <Link to="/taborder" >
                    <img className = "tablePics" src={Table6} alt="table for 2"
                    onClick={() => {
                   setTable("6")
               }}></img>
           </Link>
        </div>
        <div>
        <Link to="/taborder" >
                    <img className = "tablePics" src={Table7} alt="table for 6"
                    onClick={() => {
                   setTable("7")
               }}></img>
           </Link>
           <Link to="/taborder" >
                    <img className = "tablePics" src={Table8} alt="table for 4"
                    onClick={() => {
                   setTable("8")
               }}></img>
           </Link>
           <Link to="/taborder" >
                    <img className = "tablePics" src={Table9} alt="table for 4"
                    onClick={() => {
                   setTable("9")
               }}></img>
           </Link>
        </div>
        </div>
    </div>
    )
}

export default Tables;