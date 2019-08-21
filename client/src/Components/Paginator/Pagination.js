import React from 'react';

const Paginator = (props) =>  {

    /**
     * Render the list of all pages
     * @returns {*[]}
     * @private
     */
    const _showPages = () => {
        if(props.meta) {
            let pages = [];

            for(let index = 0; index < props.meta.last_page; index++) {
                pages.push(index + 1)
            }

            return pages.map((page, index) => {
                let activeClass = props.meta.current_page === page ? 'active' : '';
                return (
                    <li className={`page-item ${activeClass}`} key={index}>
                        <a className="page-link"  href="#" onClick={ () => props.changePage(page) }>{ page }</a>
                    </li>
                )
            })
        }
    };

    /**
     * Render the active class if we can go to previous pages
     * @returns {string}
     */
    const activePrev = () => {
        if(props.meta) {
            let {current_page, from} = props.meta;
            return current_page === from ? 'disabled': '';
        }
        return '';
    };


    /**
     * Render the active class if we can go to next pages
     * @returns {string}
     */
    const activeNext = () => {
        if(props.meta) {
            let {current_page, last_page} = props.meta;
            return current_page === last_page ? 'disabled': '';
        }
        return '';
    };

    return (
        <div>
            <ul className="pagination">
                <li className={`page-item ${ activePrev() }`}>
                    <a className="page-link" href="#"
                       onClick={() => props.changePage(props.meta.current_page - 1)}
                    >&laquo;</a>
                </li>

                { _showPages() }

                <li className={`page-item ${ activeNext() }`}>
                    <a className="page-link" href="#"
                       onClick={() => props.changePage(props.meta.current_page + 1)}
                    >&raquo;</a>
                </li>
            </ul>
        </div>
    )
};

export default Paginator;
