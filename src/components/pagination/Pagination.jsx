import React from 'react';
import { useSelector } from 'react-redux/es/exports';



const Pagination = ({ totalItem, actualPage, changePage }) => {

    /* Global setNumberPage */
    const setNumItem = useSelector(state => state.setNumItem)

    /*  Calculate number page max */
    const totalPage = Math.ceil(totalItem / setNumItem)

    /* Range Pagiantion 10  */

    let iniPage = actualPage < 5 ? 1 : (actualPage - 4)
    let lastPage = totalPage
// alert(iniPage)
    /* Control lastPage  */

    if (actualPage < (totalPage - 5)) {
        if ((actualPage + 5) <= totalPage) {
            lastPage = actualPage + 5
        } else {
            lastPage = totalPage
        }

    } else {
        lastPage = totalPage
    }

   /* Load array with number page */ 
   const arrNumber = []
   // alert(iniPage)
    for (let i = iniPage; i <= lastPage; i++) {
        arrNumber.push(i);
    }

// alert(arrNumber)


    return (
        <div>
            <div className='btn-actions' >
            { 
              arrNumber.map((number) =>(

                 <button 
                 onClick={()=>changePage(number)} 
                 key={number} 
                 className='btn'
                 >
                    {number}
                    </button>
                    
              ))
            }
            </div>

        </div>
    );
};

export default Pagination;