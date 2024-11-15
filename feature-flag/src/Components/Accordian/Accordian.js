import { useState } from "react";
import data from './data';
import './Accordian.css'

export default function Accordian(){

    const [selected, setSelected] = useState(null);
    const [multiSelection, setMultiSelection] = useState(false);
    const [multi, setMulti] = useState([]);

    function handleSingleSelection(getCurrentId){
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId){
        let copyMultiple = [...multi];
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

        if(findIndexOfCurrentId === -1){
            copyMultiple.push(getCurrentId);
        }
        else{
            copyMultiple.splice(findIndexOfCurrentId, 1);
        }

        setMulti(copyMultiple);
    }
    return(
        <div className="wrapper">
            <button onClick={()=>setMultiSelection(!multiSelection)}>{multiSelection ? 'Disable Multi Selection' : 'Enable Multi Selection'}</button>
            <div className="accordian">
                {
                    data && data.length > 0 ?

                    data.map(dataItem=><div className="item">
                        <div onClick={multiSelection ? ()=>handleMultiSelection(dataItem.id) : ()=>handleSingleSelection(dataItem.id)} className="title">
                            <h3>{dataItem.question}</h3>
                            <span>{(multiSelection ? multi.includes(dataItem.id) : selected === dataItem.id) ? "-" : "+"}</span>
                        </div>
                        {
                            multiSelection
                            ? multi.indexOf(dataItem.id) !== -1 && (
                                <div className="content">
                                    {dataItem.answer}
                                </div>
                            )
                            : selected === dataItem.id && (
                                <div className="content">
                                    {dataItem.answer}
                                </div>
                            )
                        }
                    </div>)

                    : <div>No data Found!</div>
                }
            </div>
        </div>
    )
}