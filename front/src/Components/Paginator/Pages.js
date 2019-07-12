import React from "react";

const Pages = ({ number, getPage }) => (
    <li className="page-item">
        <a className="page-link" href="#" onClick={ console.log(number) }>{ number + 1 }</a>
    </li>
);

export default Pages;